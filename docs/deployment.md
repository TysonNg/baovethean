# Triển khai VPS với PM2, Nginx và SSL

Kiến trúc production:

`Internet -> Nginx :80/:443 -> Next.js + Payload :3000 -> PostgreSQL :5432`

Nginx nhận kết nối công khai và xử lý HTTPS. PM2 quản lý tiến trình Node.js
chạy Next.js ở cổng nội bộ. PostgreSQL không được mở ra Internet.

## 1. DNS và tường lửa

Tạo hai bản ghi DNS trỏ về IPv4 của VPS:

- `A baovethean.com -> <IP_VPS>`
- `A www.baovethean.com -> <IP_VPS>`

Chờ DNS cập nhật rồi kiểm tra:

```bash
dig +short baovethean.com
dig +short www.baovethean.com
```

Mở SSH, HTTP và HTTPS:

```bash
sudo ufw allow OpenSSH
sudo ufw allow "Nginx Full"
sudo ufw enable
```

Không mở cổng 3000 hoặc 5432 ra Internet.

## 2. Cài phần mềm

Trên Ubuntu:

```bash
sudo apt update
sudo apt install -y nginx certbot
sudo npm install -g pm2
```

Node.js phải tương thích với phiên bản Next.js trong `package.json`.

## 3. Chuẩn bị ứng dụng

Ví dụ mã nguồn đặt tại `/var/www/baovethean`:

```bash
cd /var/www/baovethean
cp .env.example .env
npm ci
npm run migrate
npm run build
```

Điền `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`, `DATABASE_URI`,
`PAYLOAD_SECRET`, `PAYLOAD_PREVIEW_SECRET` và SMTP thật trong `.env`. Dùng
mật khẩu PostgreSQL ngẫu nhiên (ví dụ `openssl rand -hex 32`), không dùng
thông tin mặc định và không commit `.env`.

Khởi tạo hoặc restore database trước khi chạy ứng dụng. Production cố ý không
tự tạo database trống khi biến `DATABASE_URI` bị sai hoặc database bị mất.

Khởi động Next.js bằng PM2:

```bash
cd /var/www/baovethean
pm2 start deploy/pm2/ecosystem.config.cjs
pm2 status
curl -I http://127.0.0.1:3000
pm2 startup
```

Chạy lệnh có `sudo` mà `pm2 startup` in ra, sau đó:

```bash
pm2 save
```

## 4. Bootstrap Nginx

Cấu hình bootstrap không tham chiếu chứng chỉ chưa tồn tại:

```bash
sudo mkdir -p /var/www/certbot
sudo cp deploy/nginx/baovethean.com.bootstrap.conf /etc/nginx/sites-available/baovethean.com
sudo ln -s /etc/nginx/sites-available/baovethean.com /etc/nginx/sites-enabled/baovethean.com
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

Nếu liên kết đã tồn tại, bỏ qua lệnh `ln -s`.

## 5. Cấp chứng chỉ Let’s Encrypt

Chỉ chạy sau khi cả hai bản ghi DNS đã trỏ đúng VPS và cổng 80 truy cập được:

```bash
sudo certbot certonly --webroot -w /var/www/certbot -d baovethean.com -d www.baovethean.com
```

Certbot sẽ hỏi email và yêu cầu đồng ý điều khoản Let’s Encrypt.

## 6. Bật HTTPS và reverse proxy

Sau khi Certbot cấp chứng chỉ thành công:

```bash
sudo cp deploy/nginx/baovethean.com.conf /etc/nginx/sites-available/baovethean.com
sudo nginx -t
sudo systemctl reload nginx
```

Cấu hình cuối cùng thực hiện:

- `http://*` chuyển sang `https://baovethean.com`;
- `https://www.baovethean.com/*` chuyển 301 sang domain chính;
- `https://baovethean.com/*` proxy đến `127.0.0.1:3000`;
- cho phép upload tối đa 50 MB.

## 7. Kiểm tra

```bash
curl -I http://baovethean.com
curl -I http://www.baovethean.com/kiem-tra
curl -I https://www.baovethean.com/kiem-tra
curl -I https://baovethean.com
sudo nginx -t
sudo certbot renew --dry-run
```

Kỳ vọng ba URL đầu chuyển về HTTPS trên `baovethean.com`; URL cuối trả phản
hồi từ Next.js.

## 8. Cập nhật ứng dụng

```bash
cd /var/www/baovethean
git pull --ff-only
npm ci
npm run migrate
npm run build
pm2 reload deploy/pm2/ecosystem.config.cjs --update-env
pm2 save
```

`pm2 reload` thay tiến trình cũ bằng bản build mới. Với một tiến trình fork,
có thể có một khoảng gián đoạn rất ngắn khi khởi động lại.

## 9. Theo dõi và xử lý lỗi

```bash
pm2 status
pm2 logs baovethean
sudo journalctl -u nginx -n 100 --no-pager
sudo tail -n 100 /var/log/nginx/error.log
sudo systemctl status certbot.timer
```

- `502 Bad Gateway`: kiểm tra `pm2 status` và
  `curl http://127.0.0.1:3000`.
- Nginx không reload: sửa lỗi do `sudo nginx -t` báo trước khi reload lại.
- SSL không cấp được: kiểm tra DNS, tường lửa và đường dẫn ACME trên cổng 80.

## 10. Quay lại bản ứng dụng trước

Checkout commit ổn định, build lại rồi reload PM2:

```bash
cd /var/www/baovethean
git checkout <COMMIT_ON_DINH>
npm ci
npm run build
pm2 reload deploy/pm2/ecosystem.config.cjs --update-env
```

Không xóa thư mục `/etc/letsencrypt`; chứng chỉ và lịch tự gia hạn nằm tại đó.
