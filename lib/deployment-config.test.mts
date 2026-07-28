import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path: string) => readFile(path, "utf8");

test("configures canonical HTTPS routing and the local Next.js upstream", async () => {
    const nginx = await read("deploy/nginx/baovethean.com.conf");

    assert.match(nginx, /server_name baovethean\.com;/);
    assert.match(nginx, /server_name www\.baovethean\.com;/);
    assert.match(nginx, /return 301 https:\/\/baovethean\.com\$request_uri;/);
    assert.match(nginx, /proxy_pass http:\/\/127\.0\.0\.1:3000;/);
    assert.match(nginx, /client_max_body_size 50M;/);
    assert.match(nginx, /proxy_set_header X-Forwarded-Proto \$scheme;/);
    assert.match(nginx, /proxy_set_header Upgrade \$http_upgrade;/);
});

test("defines the bootstrap ACME route and PM2 production process", async () => {
    const [bootstrap, pm2] = await Promise.all([
        read("deploy/nginx/baovethean.com.bootstrap.conf"),
        read("deploy/pm2/ecosystem.config.cjs"),
    ]);

    assert.match(bootstrap, /location \^~ \/\.well-known\/acme-challenge\//);
    assert.match(bootstrap, /root \/var\/www\/certbot;/);
    assert.match(pm2, /name: "baovethean"/);
    assert.match(pm2, /HOSTNAME: "127\.0\.0\.1"/);
    assert.match(pm2, /PORT: "3000"/);
    assert.match(pm2, /NODE_ENV: "production"/);
});

test("documents certificate issuance, renewal, and the canonical public URL", async () => {
    const [deployment, environment] = await Promise.all([
        read("docs/deployment.md"),
        read(".env.example"),
    ]);

    assert.match(
        deployment,
        /certbot certonly --webroot -w \/var\/www\/certbot -d baovethean\.com -d www\.baovethean\.com/,
    );
    assert.match(deployment, /certbot renew --dry-run/);
    assert.match(environment, /NEXT_PUBLIC_SERVER_URL=https:\/\/baovethean\.com/);
    assert.match(environment, /NEXT_PUBLIC_SITE_URL=https:\/\/baovethean\.com/);
});
