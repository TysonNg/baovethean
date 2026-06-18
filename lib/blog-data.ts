import type { BlogArticle, BlogCategory } from "@/types";

export const BLOG_PER_PAGE = 9;

export const BLOG_CATEGORIES: BlogCategory[] = [
    { label: "Kinh nghiệm", slug: "kinh-nghiem" },
    { label: "Quy trình", slug: "quy-trinh" },
    { label: "Nhân sự", slug: "nhan-su" },
    { label: "Bảo vệ nhà máy", slug: "bao-ve-nha-may" },
    { label: "An ninh doanh nghiệp", slug: "an-ninh-doanh-nghiep" },
];

export const BLOG_ARTICLES: BlogArticle[] = [
    {
        slug: "quy-trinh-trien-khai-bao-ve-nha-may",
        code: "BVT · 026",
        category: "Bảo vệ nhà máy",
        categorySlug: "bao-ve-nha-may",
        date: "12 tháng 5, 2026",
        isoDate: "2026-05-12",
        title: "Quy trình triển khai dịch vụ bảo vệ nhà máy chuyên nghiệp",
        excerpt:
            "Từ khảo sát ban đầu, đánh giá rủi ro đến bố trí ca trực và phối hợp PCCC — chín bước cốt lõi đảm bảo nhà máy được bảo vệ chặt chẽ ngay từ ngày đầu tiên triển khai.",
        content:
            "Từ khảo sát ban đầu, đánh giá rủi ro đến bố trí ca trực và phối hợp PCCC — chín bước cốt lõi đảm bảo nhà máy được bảo vệ chặt chẽ ngay từ ngày đầu tiên triển khai.",
        body: [
            {
                type: "paragraph",
                text: "Triển khai dịch vụ bảo vệ nhà máy không bắt đầu từ ngày nhân viên đầu tiên vào ca trực, mà bắt đầu từ buổi khảo sát thực địa và những cuộc làm việc kỹ lưỡng với ban quản lý nhà máy. Càng chuẩn bị kỹ trong giai đoạn này, càng giảm rủi ro vận hành và phát sinh sau khi ký hợp đồng. Một quy trình tốt giúp nhà máy ổn định trong cả vòng đời hợp đồng, thay vì phải điều chỉnh liên tục sau khi đã triển khai.",
            },
            {
                type: "paragraph",
                text: "Bài viết tổng hợp chín bước cốt lõi trong quy trình triển khai mà Bảo vệ Thế An áp dụng tại hơn 50 nhà máy trên cả nước — từ khu công nghiệp VSIP, Mỹ Phước, Amata đến các nhà máy chế biến tại Long An, Đồng Nai và Hải Phòng. Mỗi bước đều có đầu ra cụ thể và thời gian dự kiến, để khách hàng có thể theo dõi tiến độ minh bạch.",
            },
            {
                type: "heading",
                text: "Khảo sát và đánh giá thực địa",
            },
            {
                type: "paragraph",
                text: "Bước đầu tiên là khảo sát chi tiết. Tổ khảo sát của Bảo vệ Thế An gồm 2 – 3 chuyên viên nghiệp vụ sẽ làm việc trực tiếp tại nhà máy trong 4 – 6 giờ. Họ ghi nhận sơ đồ mặt bằng, luồng ra vào, hạ tầng an ninh hiện hữu và đặc thù vận hành của nhà máy. Buổi khảo sát luôn đi kèm phỏng vấn người phụ trách an ninh, trưởng ca sản xuất và đại diện ban quản lý.",
            },
            {
                type: "paragraph",
                text: "Khảo sát viên không chỉ đếm cổng hay đo diện tích — họ đánh giá rủi ro thực tế. Ví dụ: một cổng phụ ít người ra vào nhưng nằm khuất tầm nhìn camera là điểm yếu cao hơn cổng chính có lưu lượng lớn. Lối thoát hiểm tầng kỹ thuật, hành lang giữa kho và xưởng, khu vực thay đồ công nhân — đều là những vị trí cần xem xét kỹ.",
            },
            {
                type: "paragraph",
                text: "Đầu ra của bước này là báo cáo khảo sát 8 – 12 trang, kèm sơ đồ điểm trực, ảnh hiện trường và danh sách hạ tầng cần bổ sung (nếu có). Báo cáo gửi khách hàng trong vòng 2 – 3 ngày làm việc kể từ buổi khảo sát.",
            },
            {
                type: "quote",
                text: "Một cuộc khảo sát tốt giúp chúng tôi tiết kiệm được hàng trăm giờ điều chỉnh phương án sau này. Khảo sát đầy đủ là gốc rễ của một hợp đồng vận hành ổn định.",
            },
            {
                type: "heading",
                text: "Phân tích rủi ro an ninh",
            },
            {
                type: "paragraph",
                text: "Sau khảo sát, bộ phận chuyên môn lập ma trận rủi ro chia thành bốn nhóm: rủi ro vật lý (trộm cắp, đột nhập), rủi ro vận hành (gián đoạn sản xuất, mất hàng), rủi ro nhân sự (xung đột nội bộ, công nhân vi phạm) và rủi ro phòng cháy. Mỗi rủi ro được xếp hạng theo hai trục: xác suất xảy ra và mức độ thiệt hại.",
            },
            {
                type: "paragraph",
                text: "Các rủi ro nhóm cao được ưu tiên thiết kế phương án giảm thiểu trước. Ví dụ: nhà máy có kho thành phẩm gần đường công cộng thường có rủi ro trộm cắp cao — phương án sẽ tăng cường tuần tra đêm và lắp đặt thêm camera tại các điểm mù. Nhà máy chế biến thực phẩm cần kiểm soát chéo về vệ sinh và an toàn lao động, không chỉ bảo vệ tài sản.",
            },
            {
                type: "paragraph",
                text: "Kết quả của giai đoạn này là báo cáo phân tích rủi ro 12 – 16 trang, kèm bản đồ điểm trực, đề xuất nhân sự ca trực và dự toán chi phí chi tiết. Đây là nền tảng để xây dựng báo giá minh bạch — phân tách rõ chi phí nhân sự, thiết bị, đào tạo và giám sát, không có chi phí ẩn.",
            },
            {
                type: "heading",
                text: "Thiết kế phương án và điều lệnh ca trực",
            },
            {
                type: "paragraph",
                text: "Mỗi nhà máy có sổ điều lệnh riêng. Sổ này bao gồm: lịch ca trực, sơ đồ tuần tra, danh mục kiểm tra theo giờ, quy trình bàn giao ca, quy trình xử lý sự cố và danh bạ liên lạc khẩn cấp. Điều lệnh được phê duyệt bởi cả Bảo vệ Thế An và đại diện ban quản lý nhà máy trước khi triển khai.",
            },
            {
                type: "paragraph",
                text: "Sổ điều lệnh không phải tài liệu cứng — chúng tôi xem nó là tài liệu sống, được cập nhật sau mỗi 90 ngày hoặc khi nhà máy có thay đổi vận hành lớn. Mọi cập nhật đều có biên bản ký xác nhận giữa hai bên, đảm bảo cả nhân viên ca trực và ban quản lý đều nắm chung một phiên bản.",
            },
            {
                type: "heading",
                text: "Tuyển chọn và đào tạo nhân sự ca trực",
            },
            {
                type: "paragraph",
                text: "Nhân sự ca trực không phải là người bất kỳ trong danh sách — họ được lựa chọn dựa trên đặc thù nhà máy. Nhà máy chế biến thực phẩm cần nhân sự đã được huấn luyện về vệ sinh thực phẩm. Nhà máy hóa chất cần nhân sự có kinh nghiệm xử lý tình huống cháy nổ. Nhà máy điện tử cần nhân sự kiểm soát chống thất thoát linh kiện nhỏ.",
            },
            {
                type: "paragraph",
                text: "Sau khi chọn nhân sự, đào tạo nhập cuộc kéo dài 16 – 24 giờ, ngay tại nhà máy khách hàng. Nhân viên học sơ đồ địa điểm, làm quen với hệ thống camera, gặp các bộ phận liên quan và thực hành thao tác kiểm tra ra vào dưới sự giám sát của đội trưởng ca.",
            },
            {
                type: "heading",
                text: "Bàn giao ca đầu tiên và giám sát giai đoạn đầu",
            },
            {
                type: "paragraph",
                text: "Ca trực đầu tiên luôn có mặt đội trưởng ca và một chuyên viên giám sát của Bảo vệ Thế An. Họ quan sát luồng vận hành, hỗ trợ nhân viên mới và ghi nhận các điểm cần hiệu chỉnh. Hai tuần đầu tiên được giám sát chặt với báo cáo hàng ngày gửi cho ban quản lý nhà máy.",
            },
            {
                type: "paragraph",
                text: "Sau hai tuần, tần suất báo cáo chuyển sang hàng tuần, rồi hàng tháng theo cam kết hợp đồng. Mỗi báo cáo đều có thống kê ca trực, danh sách sự cố (nếu có), lượt tuần tra và đề xuất cải tiến cho kỳ tiếp theo.",
            },
            {
                type: "heading",
                text: "Phối hợp PCCC và xử lý tình huống",
            },
            {
                type: "paragraph",
                text: "Nhân viên bảo vệ nhà máy là lực lượng phản ứng đầu tiên khi có sự cố cháy nổ. Mọi nhân viên đều được huấn luyện PCCC 40 giờ, biết sử dụng bình chữa cháy, vòi cứu hỏa và quy trình báo cháy nội bộ. Họ cũng tham gia diễn tập PCCC định kỳ cùng với đội nội bộ của nhà máy — thường là hàng quý hoặc theo lịch của ban quản lý.",
            },
            {
                type: "paragraph",
                text: "Đối với các tình huống khác — tai nạn lao động, xung đột nội bộ, đột nhập — đều có quy trình chuẩn được mô tả trong sổ điều lệnh. Nhân viên bảo vệ ưu tiên báo cáo đội trưởng ca và bộ phận liên quan của khách hàng, sau đó thực hiện các bước xử lý tại chỗ trong phạm vi cho phép.",
            },
            {
                type: "heading",
                text: "Đánh giá định kỳ và cải tiến liên tục",
            },
            {
                type: "paragraph",
                text: "Cứ mỗi quý, Bảo vệ Thế An và ban quản lý nhà máy tổ chức buổi đánh giá hợp tác. Nội dung bao gồm: thống kê ca trực và sự cố, đánh giá tác phong nhân sự, đề xuất điều chỉnh phương án (nếu có) và lắng nghe phản hồi từ phía nhà máy. Đây là cơ chế quan trọng để dịch vụ không bị trôi theo thời gian.",
            },
            {
                type: "paragraph",
                text: "Một quy trình triển khai chặt chẽ không phải là gánh nặng — đó là điều kiện cần để dịch vụ bảo vệ thực sự bảo vệ được doanh nghiệp. Đầu tư thời gian vào chín bước trên giúp khách hàng hạn chế rủi ro trong cả vòng đời hợp đồng, và xây dựng nền tảng cho hợp tác dài hạn với chi phí hợp lý.",
            },
            {
                type: "paragraph",
                text: "Nếu doanh nghiệp của bạn đang cân nhắc dịch vụ bảo vệ nhà máy, hãy bắt đầu từ buổi khảo sát miễn phí. Một báo cáo khảo sát đầy đủ — kèm phân tích rủi ro và đề xuất phương án — là cơ sở tốt nhất để đánh giá đối tác trước khi ký hợp đồng dài hạn.",
            },
        ],
        tags: [
            "Bảo vệ nhà máy",
            "Khu công nghiệp",
            "PCCC",
            "Quy trình vận hành",
            "Khảo sát thực địa",
            "An ninh công nghiệp",
        ],
        heroLabel: "HERO · 01",
        heroCaption: "Khu công nghiệp VSIP — Bình Dương",
        imageLabel: "IMG · F01",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 12,
        featured: true,
    },
    {
        slug: "kinh-nghiem-lua-chon-cong-ty-bao-ve",
        code: "BVT · 025",
        category: "Kinh nghiệm",
        categorySlug: "kinh-nghiem",
        date: "12 tháng 5, 2026",
        isoDate: "2026-05-12",
        title: "Kinh nghiệm lựa chọn công ty bảo vệ uy tín cho doanh nghiệp",
        excerpt:
            "Bảy tiêu chí mà ban quản lý tòa nhà và doanh nghiệp nên xem xét trước khi ký hợp đồng dịch vụ bảo vệ dài hạn — từ giấy phép, đào tạo nhân sự đến quy trình giám sát.",
        content:
            "Bảy tiêu chí mà ban quản lý tòa nhà và doanh nghiệp nên xem xét trước khi ký hợp đồng dịch vụ bảo vệ dài hạn.",
        body: [
            {
                type: "paragraph",
                text: "Việc lựa chọn đơn vị bảo vệ phù hợp có thể tiết kiệm cho doanh nghiệp hàng trăm triệu chi phí và những rủi ro khó đo lường. Một quyết định sai dẫn đến mất an ninh, thiệt hại tài sản hoặc tệ hơn là mất uy tín thương hiệu — đặc biệt với các tòa nhà văn phòng hạng A hoặc nhà máy có khách hàng quốc tế đến làm việc.",
            },
            {
                type: "paragraph",
                text: "Bài viết tổng hợp bảy tiêu chí thực tế mà ban quản lý nên đặt ra trước khi ký hợp đồng. Đây là tiêu chí được rút ra từ hơn 200 hợp đồng đang vận hành của Bảo vệ Thế An — cùng những bài học từ các trường hợp khách hàng chuyển từ đơn vị khác sang.",
            },
            {
                type: "heading",
                text: "Giấy phép và pháp lý",
            },
            {
                type: "paragraph",
                text: "Yêu cầu đơn vị cung cấp giấy phép An ninh trật tự (ANTT) do Cục Cảnh sát Quản lý hành chính về Trật tự xã hội (C06 — Bộ Công an) cấp. Giấy phép này có thời hạn và cần được gia hạn định kỳ — kiểm tra xem giấy phép còn hiệu lực hay không.",
            },
            {
                type: "paragraph",
                text: "Ngoài giấy phép gốc, các chứng chỉ bổ sung như ISO 9001:2015 (hệ thống quản lý chất lượng), chứng chỉ PCCC, chứng chỉ huấn luyện nghiệp vụ cũng là dấu hiệu của đơn vị nghiêm túc đầu tư vào hệ thống vận hành.",
            },
            {
                type: "heading",
                text: "Quy trình đào tạo nhân sự",
            },
            {
                type: "paragraph",
                text: "Hỏi rõ về chương trình đào tạo: thời lượng, nội dung, phương pháp đánh giá. Một đơn vị nghiêm túc sẽ có chương trình huấn luyện ít nhất 80 – 120 giờ trước khi nhân viên vào ca, kèm theo các khóa bổ sung định kỳ về PCCC, sơ cấp cứu và xử lý tình huống.",
            },
            {
                type: "paragraph",
                text: "Yêu cầu xem thực tế: ảnh và video khóa đào tạo, danh sách giảng viên, đánh giá đầu ra của học viên. Đơn vị không có chương trình đào tạo chuẩn — hoặc đào tạo chỉ là buổi giới thiệu 2 – 3 giờ — chắc chắn sẽ gặp vấn đề về tác phong và xử lý tình huống khi đưa nhân sự vào ca.",
            },
            {
                type: "quote",
                text: "Chất lượng dịch vụ bảo vệ không đến từ đồng phục đẹp hay tòa nhà sang trọng — nó đến từ con người được đào tạo bài bản và quy trình rõ ràng.",
            },
            {
                type: "heading",
                text: "Hệ thống giám sát ca trực",
            },
            {
                type: "paragraph",
                text: "Đơn vị tốt có trung tâm điều hành giám sát 24/7 — không phụ thuộc hoàn toàn vào điện thoại liên lạc với ca trực. Hệ thống chấm công GPS, thẻ tuần tra điện tử và camera giám sát ca trực giúp khách hàng kiểm chứng nhân viên có thực sự có mặt và làm đúng quy trình hay không.",
            },
            {
                type: "paragraph",
                text: "Yêu cầu xem dashboard giám sát mẫu, báo cáo ca trực mẫu và quy trình xử lý khi nhân viên vắng mặt hoặc vi phạm. Đây là cách kiểm chứng nhanh nhất mức độ chuyên nghiệp của đơn vị.",
            },
            {
                type: "heading",
                text: "Cam kết SLA và điều khoản hợp đồng",
            },
            {
                type: "paragraph",
                text: "Hợp đồng tốt có cam kết SLA cụ thể: thời gian xử lý sự cố, tần suất báo cáo, hình thức xử phạt khi vi phạm. Tránh các hợp đồng chung chung — chỉ ghi 'đảm bảo an ninh' mà không có cam kết đo lường được.",
            },
            {
                type: "paragraph",
                text: "Đặc biệt chú ý điều khoản chấm dứt hợp đồng — một đơn vị nghiêm túc sẽ có điều khoản chấm dứt sớm với thời gian báo trước hợp lý (30 – 60 ngày), không 'giữ chân' khách hàng bằng các điều khoản phạt khắc nghiệt.",
            },
            {
                type: "heading",
                text: "Quy mô và năng lực dự phòng",
            },
            {
                type: "paragraph",
                text: "Đơn vị có quy mô đủ lớn sẽ có khả năng dự phòng nhân sự khi xảy ra sự cố — nhân viên đột xuất nghỉ, ca trực thay đổi đột xuất. Hỏi rõ về tỷ lệ nhân sự dự phòng (thường 10 – 15% tổng số ca) và phương án thay thế trong 24 giờ.",
            },
            {
                type: "paragraph",
                text: "Quy mô cũng thể hiện năng lực đào tạo, năng lực pháp lý và khả năng triển khai nhanh khi khách hàng cần. Đơn vị quá nhỏ thường không đủ nguồn lực cho các hợp đồng phức tạp hoặc đa địa điểm.",
            },
            {
                type: "heading",
                text: "Tham khảo từ khách hàng hiện hữu",
            },
            {
                type: "paragraph",
                text: "Yêu cầu danh sách khách hàng tham khảo — đặc biệt là khách hàng cùng ngành hoặc cùng mô hình với doanh nghiệp của bạn. Một cuộc điện thoại 15 phút với người phụ trách an ninh của một khách hàng hiện hữu có giá trị hơn hàng giờ thuyết trình của đơn vị cung cấp.",
            },
            {
                type: "paragraph",
                text: "Câu hỏi quan trọng nhất khi tham khảo: 'Nếu chọn lại, anh chị có chọn đơn vị này không?' và 'Trường hợp xảy ra sự cố lớn, đơn vị xử lý thế nào?' — câu trả lời thực tế sẽ cho bạn bức tranh đầy đủ về dịch vụ.",
            },
            {
                type: "heading",
                text: "Phương án khảo sát và đề xuất ban đầu",
            },
            {
                type: "paragraph",
                text: "Đơn vị nghiêm túc sẽ cung cấp khảo sát miễn phí và báo cáo đề xuất chi tiết trước khi báo giá. Một báo cáo tốt cho thấy mức độ chuyên nghiệp ngay từ đầu — không cần thuyết phục bằng lời nói.",
            },
            {
                type: "paragraph",
                text: "Nếu đơn vị chỉ báo giá theo bảng chung mà không khảo sát thực địa — đó là dấu hiệu cảnh báo. Mỗi doanh nghiệp có đặc thù khác nhau, không thể áp dụng phương án chung cho mọi địa điểm.",
            },
            {
                type: "paragraph",
                text: "Lựa chọn đối tác bảo vệ là quyết định dài hạn — thường gắn với hợp đồng 12 – 36 tháng. Dành thời gian sàng lọc kỹ ở giai đoạn đầu giúp doanh nghiệp tránh được những chi phí ẩn về sau, cả về tài chính lẫn uy tín.",
            },
        ],
        tags: [
            "Kinh nghiệm",
            "Lựa chọn nhà cung cấp",
            "Hợp đồng bảo vệ",
            "Giấy phép ANTT",
            "Đánh giá đối tác",
        ],
        heroLabel: "HERO · 02",
        heroCaption: "Tòa nhà văn phòng — Quận 1",
        imageLabel: "ART · 01",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 10,
    },
    {
        slug: "quy-trinh-bao-ve-nha-may-chuyen-nghiep",
        code: "BVT · 024",
        category: "Quy trình",
        categorySlug: "quy-trinh",
        date: "28 tháng 4, 2026",
        isoDate: "2026-04-28",
        title: "Quy trình bảo vệ nhà máy chuyên nghiệp theo chuẩn doanh nghiệp",
        excerpt:
            "Từ tiếp nhận ca trực, kiểm soát ra vào đến phối hợp PCCC — quy trình một ca trực 12 giờ đầy đủ tại khu vực sản xuất công nghiệp.",
        content:
            "Từ tiếp nhận ca trực, kiểm soát ra vào đến phối hợp PCCC — quy trình đầy đủ tại khu vực sản xuất công nghiệp.",
        body: [
            {
                type: "paragraph",
                text: "Bảo vệ nhà máy đòi hỏi quy trình chặt chẽ hơn nhiều so với bảo vệ tòa nhà văn phòng thông thường. Khu vực sản xuất có nhiều loại nhân sự ra vào (công nhân, kỹ sư, nhà thầu, khách), lưu lượng hàng hóa lớn và yêu cầu kiểm soát chéo về an toàn lao động — đặt ra mức độ phức tạp cao cho đội ngũ bảo vệ.",
            },
            {
                type: "paragraph",
                text: "Bài viết mô tả chi tiết quy trình một ca trực 12 giờ điển hình tại một nhà máy sản xuất 500 – 1.000 nhân sự — áp dụng tại các nhà máy điện tử, cơ khí và chế biến thực phẩm mà Bảo vệ Thế An đang cung cấp dịch vụ.",
            },
            {
                type: "heading",
                text: "Trước ca: chuẩn bị và bàn giao",
            },
            {
                type: "paragraph",
                text: "Nhân viên đến nhà máy trước giờ vào ca 30 phút. Họ thay đồng phục, kiểm tra trang thiết bị cá nhân (bộ đàm, đèn pin, sổ ghi chép, thẻ tuần tra điện tử) và tập trung tại phòng giao ban. Đội trưởng ca tổ chức buổi giao ban điều lệnh kéo dài 15 phút.",
            },
            {
                type: "paragraph",
                text: "Nội dung giao ban gồm: phân công vị trí cho từng nhân viên, thông báo tình hình ca trước (sự cố nếu có, thay đổi vận hành), nhắc nhở điểm cần chú ý cho ca mới và xác nhận liên lạc khẩn cấp. Mọi nhân viên đều ký xác nhận đã nhận điều lệnh.",
            },
            {
                type: "heading",
                text: "Kiểm soát ra vào và đăng ký khách",
            },
            {
                type: "paragraph",
                text: "Mỗi điểm trực có danh mục kiểm tra theo giờ. Nhân viên cổng chính kiểm tra thẻ ra vào của công nhân, kiểm soát phương tiện vận chuyển vào khu vực sản xuất và đăng ký khách đến làm việc. Mọi khách phải có lịch hẹn xác nhận từ bộ phận liên quan của nhà máy.",
            },
            {
                type: "paragraph",
                text: "Phương tiện vận chuyển hàng hóa vào kho cần kiểm tra giấy tờ, đối chiếu phiếu xuất nhập và niêm phong container. Trường hợp xe có dấu hiệu bất thường (niêm phong hỏng, giấy tờ không khớp), nhân viên giữ xe và báo cáo đội trưởng ca xử lý.",
            },
            {
                type: "heading",
                text: "Tuần tra theo lịch ngẫu nhiên",
            },
            {
                type: "paragraph",
                text: "Tuần tra thực hiện ngẫu nhiên nhưng đảm bảo phủ kín tất cả các điểm trong sơ đồ. Mỗi điểm trực có thẻ tuần tra điện tử — nhân viên quét mã khi đến điểm, dữ liệu đẩy về trung tâm giám sát thời gian thực. Tần suất tuần tra thường 2 giờ/lần ban ngày và 1 giờ/lần ban đêm.",
            },
            {
                type: "paragraph",
                text: "Khu vực trọng yếu — kho thành phẩm, khu vực chứa hóa chất, phòng máy chủ, trạm điện — có lịch tuần tra dày hơn. Tuần tra không chỉ là đi qua điểm mà còn quan sát các dấu hiệu bất thường: cửa khóa có nguyên vẹn không, ánh sáng có bị tắt đột ngột không, có dấu vết đột nhập hay không.",
            },
            {
                type: "heading",
                text: "Phối hợp PCCC và an toàn lao động",
            },
            {
                type: "paragraph",
                text: "Nhân viên bảo vệ là lực lượng phản ứng đầu tiên khi có sự cố cháy nổ hoặc tai nạn lao động. Mỗi ca có ít nhất một nhân viên được phân công làm trưởng nhóm PCCC, có trách nhiệm kiểm tra hệ thống báo cháy, vòi cứu hỏa và bình chữa cháy mỗi ngày.",
            },
            {
                type: "paragraph",
                text: "Khi có báo cháy, quy trình là: xác nhận tại điểm báo (loại bỏ báo cháy giả), báo cáo trung tâm điều hành, kích hoạt phương án sơ tán theo khu vực và phối hợp với đội PCCC chuyên trách của nhà máy. Mọi diễn tập PCCC được tổ chức định kỳ — thường hàng quý.",
            },
            {
                type: "heading",
                text: "Xử lý tình huống bất thường",
            },
            {
                type: "paragraph",
                text: "Tình huống bất thường được phân loại theo mức độ: mức 1 (sự cố nhỏ, nhân viên ca trực tự xử lý), mức 2 (sự cố trung bình, cần đội trưởng ca có mặt), mức 3 (sự cố lớn, cần báo cáo trung tâm điều hành và ban quản lý nhà máy). Mỗi mức có quy trình xử lý chi tiết và thời gian phản hồi cam kết.",
            },
            {
                type: "paragraph",
                text: "Mọi sự cố đều có biên bản — kèm ảnh, thời gian, danh sách người liên quan và hành động đã thực hiện. Biên bản gửi đội trưởng ca cuối ngày, tổng hợp thành báo cáo tuần và báo cáo tháng.",
            },
            {
                type: "heading",
                text: "Cuối ca: bàn giao và báo cáo",
            },
            {
                type: "paragraph",
                text: "Trước khi kết thúc ca, đội trưởng ca tổng hợp số liệu: số lượt tuần tra, số khách đăng ký, danh sách sự cố (nếu có) và những điểm cần lưu ý cho ca tiếp theo. Buổi bàn giao giữa hai ca kéo dài 10 – 15 phút, có biên bản ký xác nhận hai bên.",
            },
            {
                type: "paragraph",
                text: "Báo cáo cuối ca được gửi về trung tâm điều hành — dữ liệu này là nguồn để xây dựng báo cáo tuần (gửi khách hàng thứ Hai hàng tuần) và báo cáo tháng (đánh giá KPI và đề xuất cải tiến). Đây cũng là dữ liệu để buổi đánh giá hợp tác hàng quý.",
            },
            {
                type: "quote",
                text: "Quy trình không phải là rào cản — nó là khung để dịch vụ chuyên nghiệp có thể tái lập được ở mọi địa điểm và mọi ca trực.",
            },
            {
                type: "paragraph",
                text: "Quy trình tốt chỉ phát huy hiệu quả khi nhân viên hiểu và tuân thủ. Vì vậy, đào tạo nhập cuộc và giám sát giai đoạn đầu là yếu tố quyết định — không chỉ là viết quy trình ra giấy. Một quy trình được vận hành nhất quán trong 24 tháng tại 50 nhà máy là minh chứng cho sự bền vững của mô hình này.",
            },
        ],
        tags: [
            "Bảo vệ nhà máy",
            "Quy trình",
            "Ca trực",
            "PCCC",
            "An toàn lao động",
            "Kiểm soát ra vào",
        ],
        heroLabel: "HERO · 03",
        heroCaption: "Nhà máy chế biến — Đồng Nai",
        imageLabel: "ART · 02",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 10,
    },
    {
        slug: "tieu-chuan-nhan-vien-bao-ve-chuyen-nghiep",
        code: "BVT · 023",
        category: "Nhân sự",
        categorySlug: "nhan-su",
        date: "15 tháng 4, 2026",
        isoDate: "2026-04-15",
        title: "Những tiêu chuẩn cần có của một nhân viên bảo vệ chuyên nghiệp",
        excerpt:
            "Tác phong, kỹ năng nghiệp vụ và khả năng xử lý tình huống — ba trụ cột phân biệt nhân viên bảo vệ chuyên nghiệp với nhân viên bảo vệ thông thường.",
        content:
            "Tác phong, kỹ năng nghiệp vụ và khả năng xử lý tình huống — ba trụ cột phân biệt nhân viên bảo vệ chuyên nghiệp.",
        body: [
            {
                type: "paragraph",
                text: "Một nhân viên bảo vệ chuyên nghiệp khác hẳn một người chỉ đứng cổng. Sự khác biệt nằm ở ba yếu tố: tác phong, nghiệp vụ và khả năng phán đoán. Khách hàng có thể không nhận ra ngay sự khác biệt khi mọi thứ diễn ra suôn sẻ — nhưng khi có sự cố, sự khác biệt này quyết định liệu thiệt hại được khống chế hay leo thang.",
            },
            {
                type: "paragraph",
                text: "Bài viết phân tích chi tiết ba trụ cột này — kèm những tình huống thực tế từ hơn 500 nhân viên đang vận hành tại 200+ địa điểm của Bảo vệ Thế An.",
            },
            {
                type: "heading",
                text: "Tác phong và kỷ luật cá nhân",
            },
            {
                type: "paragraph",
                text: "Tác phong bắt đầu từ những chi tiết nhỏ: đúng giờ vào ca, đồng phục chỉn chu, tư thế chào đúng điều lệnh, giao tiếp lễ phép. Mỗi chi tiết tự nó không tạo nên dịch vụ chuyên nghiệp — nhưng cộng dồn lại, chúng định hình hình ảnh và tạo cảm giác an tâm cho khách hàng và cư dân.",
            },
            {
                type: "paragraph",
                text: "Kỷ luật cá nhân thể hiện qua việc tuân thủ điều lệnh ca trực — không hút thuốc tại điểm trực, không sử dụng điện thoại cá nhân khi làm việc, không rời điểm trực nếu chưa được bàn giao. Đây là những quy tắc tưởng đơn giản nhưng là nền tảng của một dịch vụ bảo vệ thực sự.",
            },
            {
                type: "paragraph",
                text: "Tác phong cũng bao gồm cách xử lý khi gặp khách. Nhân viên chuyên nghiệp luôn chào trước, hướng dẫn rõ ràng và giữ thái độ bình tĩnh kể cả khi gặp khách khó tính. Nóng nảy hay thái độ thiếu lịch sự — dù chỉ một lần — đã đủ phá vỡ hình ảnh dịch vụ trong mắt khách hàng.",
            },
            {
                type: "heading",
                text: "Nghiệp vụ bảo vệ và sử dụng thiết bị",
            },
            {
                type: "paragraph",
                text: "Nghiệp vụ bảo vệ bao gồm: kiểm soát ra vào, tuần tra, sử dụng thiết bị PCCC, sơ cấp cứu cơ bản và quy trình xử lý sự cố. Mọi tình huống bất thường đều có quy trình — nhân viên chuyên nghiệp thuộc quy trình và xử lý đúng quy trình, thay vì hành động theo cảm tính.",
            },
            {
                type: "paragraph",
                text: "Sử dụng thiết bị cũng là nghiệp vụ — biết kiểm tra hệ thống camera, biết thao tác máy soi hành lý (tại các tòa nhà có lắp đặt), biết sử dụng thẻ tuần tra điện tử và bộ đàm. Một nhân viên không quen thiết bị sẽ chậm trong tình huống cần xử lý nhanh.",
            },
            {
                type: "paragraph",
                text: "Đào tạo nghiệp vụ tại Bảo vệ Thế An kéo dài 120 giờ trước khi vào ca, kèm các khóa bổ sung định kỳ hàng quý. Mọi nhân viên đều có chứng chỉ huấn luyện nội bộ, được làm mới mỗi 12 tháng dựa trên đánh giá thực tế.",
            },
            {
                type: "quote",
                text: "Tác phong dạy được, nghiệp vụ đào tạo được — nhưng khả năng phán đoán là thứ phân biệt nhân viên tốt với nhân viên xuất sắc.",
            },
            {
                type: "heading",
                text: "Khả năng phán đoán và xử lý tình huống",
            },
            {
                type: "paragraph",
                text: "Đây là yếu tố khó dạy nhất. Nhân viên chuyên nghiệp biết khi nào cần báo cáo cấp trên, khi nào tự xử lý, khi nào yêu cầu hỗ trợ. Họ đánh giá nhanh mức độ rủi ro của một tình huống và phản ứng phù hợp — không hoảng loạn, không bỏ qua.",
            },
            {
                type: "paragraph",
                text: "Ví dụ thực tế: một người lạ đứng quan sát tòa nhà trong 20 phút. Nhân viên thiếu kinh nghiệm có thể bỏ qua hoặc tiếp cận trực tiếp với thái độ căng thẳng. Nhân viên chuyên nghiệp sẽ quan sát, ghi nhận đặc điểm, báo cáo đội trưởng ca và chỉ tiếp cận khi có dấu hiệu rõ ràng.",
            },
            {
                type: "paragraph",
                text: "Khả năng phán đoán được rèn luyện qua kinh nghiệm và mentoring. Đó là lý do tại sao Bảo vệ Thế An phân ca theo cấp độ — nhân viên mới luôn được ghép với nhân viên có kinh nghiệm trong 90 ngày đầu, và có đội trưởng ca giám sát chặt.",
            },
            {
                type: "heading",
                text: "Sức khỏe và thể lực",
            },
            {
                type: "paragraph",
                text: "Nghề bảo vệ đòi hỏi thể lực — ca trực 12 giờ, đi bộ tuần tra liên tục, sẵn sàng phản ứng nhanh khi có sự cố. Mọi nhân viên đều có khám sức khỏe định kỳ 6 tháng/lần, kèm theo bài kiểm tra thể lực tại trung tâm huấn luyện.",
            },
            {
                type: "paragraph",
                text: "Yêu cầu cơ bản: chiều cao 1,65 m (nam) hoặc 1,55 m (nữ), không có bệnh truyền nhiễm, không có vấn đề về thị lực hoặc thính lực ảnh hưởng đến công việc. Đây là tiêu chuẩn tuyển dụng đầu vào — không có ngoại lệ.",
            },
            {
                type: "heading",
                text: "Đạo đức nghề nghiệp",
            },
            {
                type: "paragraph",
                text: "Yếu tố cuối cùng nhưng quan trọng nhất: trung thực. Nhân viên bảo vệ tiếp xúc với tài sản và thông tin nhạy cảm của khách hàng. Một sai phạm nhỏ về đạo đức — nhận quà từ khách, kể chuyện nội bộ ra ngoài, bao che cho đồng nghiệp — đều có thể phá vỡ niềm tin của khách hàng.",
            },
            {
                type: "paragraph",
                text: "Kiểm tra lý lịch tư pháp là bắt buộc trước khi tuyển — không có tiền án, tiền sự. Trong quá trình làm việc, mọi sai phạm đạo đức đều bị xử lý nghiêm theo quy chế nội bộ, kể cả với nhân viên đã làm việc lâu năm.",
            },
            {
                type: "paragraph",
                text: "Năm yếu tố trên — tác phong, nghiệp vụ, phán đoán, sức khỏe, đạo đức — không có yếu tố nào có thể thiếu. Đó là lý do Bảo vệ Thế An đầu tư nghiêm túc vào quy trình tuyển dụng, đào tạo và đánh giá định kỳ — để đảm bảo mọi nhân viên đại diện cho công ty đều đạt chuẩn chuyên nghiệp.",
            },
        ],
        tags: [
            "Nhân sự",
            "Đào tạo",
            "Tác phong",
            "Tiêu chuẩn nghề nghiệp",
            "Nghiệp vụ bảo vệ",
        ],
        heroLabel: "HERO · 04",
        heroCaption: "Trung tâm đào tạo — Bình Dương",
        imageLabel: "ART · 03",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 9,
    },
    {
        slug: "giai-phap-an-ninh-toa-nha-van-phong",
        code: "BVT · 022",
        category: "An ninh doanh nghiệp",
        categorySlug: "an-ninh-doanh-nghiep",
        date: "08 tháng 4, 2026",
        isoDate: "2026-04-08",
        title: "Giải pháp an ninh toàn diện cho tòa nhà văn phòng hạng A",
        excerpt:
            "Hệ thống ba lớp an ninh kết hợp con người, công nghệ và quy trình — mô hình bảo vệ hiệu quả cho tòa nhà thương mại hạng A tại TP.HCM và Hà Nội.",
        content:
            "Hệ thống kiểm soát ra vào, tuần tra định kỳ và phối hợp BQL — mô hình an ninh hiệu quả cho tòa nhà thương mại.",
        body: [
            {
                type: "paragraph",
                text: "Tòa nhà văn phòng hạng A là môi trường đặc thù — vừa cần an ninh chặt chẽ, vừa phải giữ trải nghiệm chuyên nghiệp cho khách thuê và khách đến giao dịch. Một mô hình an ninh quá cứng nhắc gây cảm giác khó chịu cho khách hàng; quá lỏng lại tạo rủi ro về tài sản và uy tín tòa nhà.",
            },
            {
                type: "paragraph",
                text: "Bảo vệ Thế An triển khai mô hình ba lớp an ninh tại các tòa nhà hạng A — kết hợp con người, công nghệ và quy trình — đã được áp dụng tại Centec Tower, Saigon Centre, Bitexco Financial Tower (TP.HCM) và Keangnam Landmark, Lotte Center (Hà Nội).",
            },
            {
                type: "heading",
                text: "Lớp 1 — Kiểm soát ra vào tại sảnh",
            },
            {
                type: "paragraph",
                text: "Khu vực sảnh là tuyến đầu tiên của hệ thống an ninh. Nhân viên trực sảnh 24/7 phối hợp với hệ thống thẻ từ và camera nhận diện. Mỗi lượt ra vào của khách thuê được ghi nhận tự động qua thẻ; khách đến giao dịch được đăng ký tại quầy lễ tân an ninh.",
            },
            {
                type: "paragraph",
                text: "Quy trình đăng ký khách: kiểm tra giấy tờ tùy thân, đối chiếu với danh sách hẹn từ khách thuê, cấp thẻ khách có giới hạn thời gian và khu vực truy cập. Camera nhận diện chụp ảnh khách tại sảnh — dữ liệu lưu 90 ngày phục vụ truy vết khi cần.",
            },
            {
                type: "paragraph",
                text: "Bãi xe có nhân viên trực và camera giám sát toàn diện. Xe ra vào quét thẻ tự động hoặc đăng ký thủ công (đối với khách). Tầng hầm có hệ thống cảm biến chuyển động và đèn tự động — phát hiện hoạt động bất thường ngoài giờ làm việc.",
            },
            {
                type: "heading",
                text: "Lớp 2 — Tuần tra và phản ứng nhanh",
            },
            {
                type: "paragraph",
                text: "Lớp thứ hai là tổ tuần tra di động kiểm tra hành lang, tầng kỹ thuật và khu vực ngoài giờ. Tổ này gồm 2 – 3 nhân viên thay phiên — tuần tra theo lịch ngẫu nhiên, dày hơn vào ban đêm và cuối tuần.",
            },
            {
                type: "paragraph",
                text: "Tổ phản ứng có mặt tại điểm gọi trong 5 phút khi có sự cố — chuông báo cháy, cảnh báo từ hệ thống camera, hoặc yêu cầu hỗ trợ từ khách thuê. Đội trưởng ca quyết định phương án xử lý ngay tại chỗ và báo cáo trung tâm điều hành nếu cần leo cấp.",
            },
            {
                type: "paragraph",
                text: "Khu vực kỹ thuật — phòng máy chủ, trạm điện, phòng điều khiển — có nhân viên chuyên trách và quy trình kiểm soát ra vào riêng. Chỉ những người trong danh sách được phê duyệt mới được phép vào, và mọi lượt vào đều có biên bản ghi nhận.",
            },
            {
                type: "heading",
                text: "Lớp 3 — Trung tâm điều hành và giám sát từ xa",
            },
            {
                type: "paragraph",
                text: "Trung tâm điều hành (SOC) hoạt động 24/7 — giám sát toàn bộ camera, hệ thống báo động và liên lạc ca trực. Khi có cảnh báo từ hệ thống, SOC xác minh nhanh và điều phối nhân lực phù hợp.",
            },
            {
                type: "paragraph",
                text: "SOC cũng phân tích dữ liệu hàng ngày: số lượt ra vào, tỷ lệ tuần tra hoàn thành đúng giờ, danh sách sự cố và xu hướng theo thời gian. Đây là nguồn dữ liệu để báo cáo định kỳ và đề xuất cải tiến cho ban quản lý tòa nhà.",
            },
            {
                type: "quote",
                text: "An ninh tòa nhà hạng A không phải là tăng số lượng bảo vệ — mà là thiết kế hệ thống ba lớp để mỗi lớp bổ trợ cho lớp kia.",
            },
            {
                type: "heading",
                text: "Phối hợp với ban quản lý và khách thuê",
            },
            {
                type: "paragraph",
                text: "Mô hình an ninh chỉ hiệu quả khi có phối hợp chặt với ban quản lý tòa nhà và đại diện các khách thuê lớn. Cuộc họp định kỳ hàng tháng giữa Bảo vệ Thế An và BQL bao gồm: thống kê an ninh, đánh giá hệ thống, đề xuất cải tiến và thông báo về các thay đổi vận hành sắp tới.",
            },
            {
                type: "paragraph",
                text: "Khách thuê lớn — đặc biệt là ngân hàng, công ty công nghệ và văn phòng đại diện quốc tế — thường có yêu cầu an ninh bổ sung. Bảo vệ Thế An cung cấp dịch vụ tùy chỉnh: bảo vệ chuyên trách cho tầng VIP, kiểm soát truy cập riêng cho khu vực server, hoặc dịch vụ hộ tống tài liệu mật giữa các văn phòng.",
            },
            {
                type: "heading",
                text: "An ninh ngoài giờ và sự kiện đặc biệt",
            },
            {
                type: "paragraph",
                text: "Tòa nhà hạng A thường có sự kiện ngoài giờ — họp đối tác buổi tối, ra mắt sản phẩm cuối tuần, hoặc đón tiếp khách VIP. Bảo vệ Thế An triển khai phương án riêng cho từng sự kiện: tăng cường nhân lực, kiểm soát ra vào nghiêm hơn, và phối hợp với ban tổ chức về danh sách khách mời.",
            },
            {
                type: "paragraph",
                text: "Ngoài giờ làm việc thông thường, hệ thống chuyển sang chế độ giám sát cao — toàn bộ cửa khóa, cảm biến chuyển động hoạt động, và tổ tuần tra tăng tần suất. Đây là khoảng thời gian rủi ro cao nhất nhưng cũng dễ kiểm soát nhất nếu có quy trình rõ ràng.",
            },
            {
                type: "paragraph",
                text: "Một tòa nhà văn phòng hạng A được bảo vệ tốt mang lại giá trị vô hình lớn — giữ chân khách thuê, tăng giá thuê và xây dựng uy tín dài hạn. Đầu tư vào hệ thống an ninh ba lớp là đầu tư có tỷ suất sinh lời cao nhưng khó đo lường trực tiếp.",
            },
        ],
        tags: [
            "Tòa nhà văn phòng",
            "An ninh doanh nghiệp",
            "Kiểm soát ra vào",
            "Tòa nhà hạng A",
            "SOC",
            "Phối hợp BQL",
        ],
        heroLabel: "HERO · 05",
        heroCaption: "Tòa nhà hạng A — Quận 1",
        imageLabel: "ART · 04",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 9,
    },
    {
        slug: "dao-tao-ky-nang-pccc-cho-bao-ve",
        code: "BVT · 021",
        category: "Nhân sự",
        categorySlug: "nhan-su",
        date: "01 tháng 4, 2026",
        isoDate: "2026-04-01",
        title: "Đào tạo kỹ năng PCCC cho đội ngũ bảo vệ chuyên nghiệp",
        excerpt:
            "Chương trình huấn luyện PCCC 40 giờ — từ lý thuyết, thực hành đến diễn tập sơ tán quy mô lớn tại trung tâm huấn luyện Bình Dương.",
        content:
            "Chương trình huấn luyện PCCC 40 giờ — từ lý thuyết đến thực hành diễn tập tại hiện trường.",
        body: [
            {
                type: "paragraph",
                text: "Phòng cháy chữa cháy (PCCC) là kỹ năng cốt lõi của nhân viên bảo vệ tại nhà máy và tòa nhà. Trong một sự cố cháy nổ, nhân viên bảo vệ là lực lượng phản ứng đầu tiên — phát hiện sớm, báo cháy đúng cấp, sử dụng thiết bị chữa cháy ban đầu và hỗ trợ sơ tán có thể chênh lệch giữa thiệt hại nhỏ và thiệt hại lớn.",
            },
            {
                type: "paragraph",
                text: "Bảo vệ Thế An tổ chức chương trình huấn luyện PCCC 40 giờ bắt buộc cho toàn bộ nhân viên trước khi vào ca. Chương trình kết hợp lý thuyết và thực hành, được giảng dạy bởi giảng viên có chứng chỉ từ Cảnh sát PCCC.",
            },
            {
                type: "heading",
                text: "Phần lý thuyết — 16 giờ",
            },
            {
                type: "paragraph",
                text: "Học viên học về nguyên lý cháy nổ — tam giác cháy (nhiên liệu, oxy, nguồn nhiệt) và cách triệt tiêu một trong ba yếu tố để dập cháy. Các loại đám cháy được phân loại theo nguồn nhiên liệu: cháy chất rắn (loại A), cháy chất lỏng (B), cháy chất khí (C), cháy kim loại (D) và cháy điện (E).",
            },
            {
                type: "paragraph",
                text: "Mỗi loại đám cháy có loại bình chữa cháy phù hợp. Sử dụng sai bình có thể làm đám cháy lan rộng — ví dụ phun nước vào đám cháy điện là tai nạn nghiêm trọng. Nhân viên cần thuộc bảng phân loại và nhận biết nhanh trong tình huống thực tế.",
            },
            {
                type: "paragraph",
                text: "Quy định pháp luật về PCCC — Luật PCCC 2001 và các văn bản hướng dẫn — cũng là phần bắt buộc. Học viên hiểu trách nhiệm của đơn vị bảo vệ, trách nhiệm của chủ sở hữu công trình và quy định về kiểm tra PCCC định kỳ.",
            },
            {
                type: "paragraph",
                text: "Quy trình báo cháy nội bộ — từ phát hiện, xác minh, báo cáo cấp trên đến gọi 114 — được rèn luyện kỹ. Một sai sót trong báo cháy có thể chậm 5 – 10 phút phản ứng, đủ để đám cháy lan ngoài tầm kiểm soát.",
            },
            {
                type: "heading",
                text: "Phần thực hành — 24 giờ",
            },
            {
                type: "paragraph",
                text: "Học viên thực hành sử dụng bình bột ABC, bình CO2 và vòi chữa cháy tại trung tâm huấn luyện Bình Dương. Các bài thực hành mô phỏng đám cháy thật — đốt khay nhiên liệu trong môi trường kiểm soát — để học viên cảm nhận được nhiệt, khói và áp lực thời gian.",
            },
            {
                type: "paragraph",
                text: "Sử dụng bình chữa cháy đúng cách không đơn giản như mở nắp và phun. Quy tắc P.A.S.S — Pull (rút chốt), Aim (hướng vòi), Squeeze (bóp tay cò), Sweep (quét) — được rèn luyện đến mức phản xạ. Học viên phải đạt thời gian dưới 30 giây từ phát hiện đến dập cháy thử nghiệm.",
            },
            {
                type: "paragraph",
                text: "Sử dụng vòi cứu hỏa cũng được rèn luyện — kéo vòi, kết nối nguồn nước, kiểm soát áp lực. Đây là kỹ năng cần phối hợp 2 – 3 người, đòi hỏi giao tiếp tốt trong tình huống căng thẳng.",
            },
            {
                type: "heading",
                text: "Diễn tập sơ tán",
            },
            {
                type: "paragraph",
                text: "Diễn tập sơ tán quy mô lớn được tổ chức cuối khóa — mô phỏng cháy tại tòa nhà 10 tầng với 200 người tham gia (học viên đóng vai cư dân, khách thuê và nhân viên). Học viên phải hướng dẫn sơ tán theo phương án, kiểm soát đám đông và phối hợp với lực lượng PCCC giả định.",
            },
            {
                type: "paragraph",
                text: "Diễn tập có quay video toàn bộ — sau đó học viên xem lại và phân tích sai sót. Đây là bài học quan trọng nhất của khóa: không có lý thuyết nào thay thế được việc trực tiếp trải nghiệm áp lực thời gian và sự rối loạn trong tình huống thực.",
            },
            {
                type: "quote",
                text: "Trong sự cố cháy, mọi giây đều quý. Đào tạo PCCC tốt giúp nhân viên phản xạ đúng — thay vì hoảng loạn — trong 60 giây đầu tiên.",
            },
            {
                type: "heading",
                text: "Cập nhật định kỳ và diễn tập tại địa điểm",
            },
            {
                type: "paragraph",
                text: "Khóa 40 giờ chỉ là khởi đầu. Mọi nhân viên đều tham gia khóa cập nhật 8 giờ mỗi quý, và diễn tập PCCC định kỳ tại địa điểm khách hàng — thường là phối hợp với đội PCCC nội bộ của nhà máy hoặc tòa nhà.",
            },
            {
                type: "paragraph",
                text: "Diễn tập tại địa điểm giúp nhân viên quen với sơ đồ thực tế, biết vị trí thiết bị PCCC và lối thoát hiểm. Đây cũng là dịp để rà soát và cập nhật phương án PCCC theo thay đổi vận hành — ví dụ khi nhà máy mở thêm khu vực sản xuất mới.",
            },
            {
                type: "heading",
                text: "Chứng chỉ và đánh giá đầu ra",
            },
            {
                type: "paragraph",
                text: "Cuối khóa, học viên thi đầu ra — phần lý thuyết và phần thực hành. Phải đạt cả hai phần mới được cấp chứng chỉ và phân ca. Tỷ lệ đậu khóa đầu là khoảng 85%; học viên không đạt được phụ đạo và thi lại sau 7 ngày.",
            },
            {
                type: "paragraph",
                text: "Chứng chỉ PCCC nội bộ có hiệu lực 12 tháng. Sau thời gian này, nhân viên phải tham gia khóa làm mới 16 giờ và thi lại để duy trì chứng chỉ. Đây là cơ chế đảm bảo kỹ năng không bị phai nhạt theo thời gian.",
            },
            {
                type: "paragraph",
                text: "Đầu tư vào đào tạo PCCC nghiêm túc không chỉ vì tuân thủ pháp luật — đó là cam kết với khách hàng rằng đội ngũ bảo vệ có đủ năng lực phản ứng khi sự cố xảy ra. Trong những giây phút quan trọng nhất, đào tạo tốt là khác biệt giữa kiểm soát được và để mất.",
            },
        ],
        tags: [
            "PCCC",
            "Đào tạo",
            "Diễn tập sơ tán",
            "An toàn cháy nổ",
            "Chứng chỉ nghiệp vụ",
            "Bình chữa cháy",
        ],
        heroLabel: "HERO · 06",
        heroCaption: "Trung tâm huấn luyện PCCC — Bình Dương",
        imageLabel: "ART · 05",
        author: "Phòng Đào tạo — Bảo vệ Thế An",
        authorRole: "Trung tâm huấn luyện nghiệp vụ",
        authorBio:
            "Phòng Đào tạo phụ trách thiết kế chương trình huấn luyện nghiệp vụ và PCCC, đảm bảo tiêu chuẩn nội bộ và cập nhật quy định mới của Cảnh sát PCCC.",
        authorInitials: "PĐ",
        readTime: 9,
    },
    {
        slug: "bao-ve-kho-bai-logistics",
        code: "BVT · 020",
        category: "Quy trình",
        categorySlug: "quy-trinh",
        date: "25 tháng 3, 2026",
        isoDate: "2026-03-25",
        title: "Bảo vệ kho bãi logistics — kiểm soát hàng hóa và phương tiện",
        excerpt:
            "Quy trình kiểm soát xuất nhập kho, giám sát camera 24/7 và phối hợp với đội vận chuyển tại các khu logistics lớn ở Bình Dương, Long An và Hải Phòng.",
        content:
            "Quy trình kiểm soát xuất nhập kho, giám sát camera 24/7 và phối hợp với đội vận chuyển.",
        body: [
            {
                type: "paragraph",
                text: "Kho bãi logistics là môi trường có lưu lượng hàng hóa và phương tiện ra vào liên tục — đòi hỏi quy trình kiểm soát chặt chẽ để tránh thất thoát và đảm bảo an toàn vận hành. Một trung tâm phân phối quy mô vừa có thể có 200 – 500 lượt xe ra vào mỗi ngày, kèm theo hàng nghìn lượt nhập xuất hàng hóa.",
            },
            {
                type: "paragraph",
                text: "Bảo vệ Thế An cung cấp dịch vụ tại hơn 30 kho bãi logistics — từ trung tâm phân phối của các chuỗi bán lẻ (Co.opmart, AEON), kho hàng e-commerce, đến kho logistics quốc tế tại các khu công nghiệp lớn.",
            },
            {
                type: "heading",
                text: "Kiểm soát xuất nhập phương tiện",
            },
            {
                type: "paragraph",
                text: "Mọi phương tiện ra vào đều được kiểm tra ba lớp: giấy tờ tài xế (CMND/CCCD, bằng lái), giấy tờ phương tiện (đăng ký, đăng kiểm) và giấy tờ liên quan đến hàng hóa (lệnh điều xe, phiếu xuất kho, biên bản giao nhận).",
            },
            {
                type: "paragraph",
                text: "Container và xe tải có niêm phong được kiểm tra mã niêm phong khớp với hồ sơ. Trường hợp niêm phong hỏng, sai mã, hoặc xe có dấu hiệu bất thường, nhân viên giữ xe tại khu vực chờ và báo cáo đội trưởng ca cùng đại diện ban quản lý kho.",
            },
            {
                type: "paragraph",
                text: "Camera ghi hình toàn bộ quy trình tại cổng — bao gồm biển số xe, gương mặt tài xế và quá trình kiểm tra giấy tờ. Dữ liệu lưu 30 – 90 ngày tùy theo loại kho, phục vụ truy vết khi có khiếu nại từ khách hàng hoặc nội bộ kho.",
            },
            {
                type: "heading",
                text: "Quản lý xuất nhập hàng hóa",
            },
            {
                type: "paragraph",
                text: "Tại cửa kho, nhân viên bảo vệ phối hợp với nhân viên kho đối chiếu số lượng và mã hàng. Mọi pallet xuất kho được quét mã barcode hoặc QR code — dữ liệu đẩy về hệ thống WMS (Warehouse Management System) của khách hàng.",
            },
            {
                type: "paragraph",
                text: "Hàng hóa giá trị cao — điện tử, dược phẩm, mỹ phẩm — có quy trình kiểm soát chặt hơn. Đối với những lô hàng đặc biệt, có thể yêu cầu ký xác nhận của hai nhân viên kho và một nhân viên bảo vệ tại thời điểm xuất.",
            },
            {
                type: "paragraph",
                text: "Trường hợp nhập kho, nhân viên kiểm tra niêm phong khi xe đến và mở niêm phong tại điểm dỡ hàng — đảm bảo không có thay đổi trong quá trình vận chuyển. Mọi sai lệch về số lượng được ghi nhận biên bản tại chỗ.",
            },
            {
                type: "heading",
                text: "Tuần tra và giám sát camera",
            },
            {
                type: "paragraph",
                text: "Tổ tuần tra kiểm tra ranh giới kho, khu vực bảo quản đặc biệt và lối thoát hiểm theo lịch ngẫu nhiên — thường 2 giờ/lần ban ngày và 1 giờ/lần ban đêm. Tuần tra ban đêm có thêm đèn pin cường độ cao và liên lạc bộ đàm với trung tâm điều hành mỗi 30 phút.",
            },
            {
                type: "paragraph",
                text: "Hệ thống camera AI cảnh báo các sự kiện bất thường: người lảng vảng quanh ranh giới kho, phương tiện đỗ tại khu vực hạn chế, hoặc chuyển động trong kho ngoài giờ. Nhân viên giám sát xác minh nhanh và điều phối tổ tuần tra kiểm tra trực tiếp.",
            },
            {
                type: "quote",
                text: "Kho bãi logistics là môi trường rủi ro thất thoát cao — một sai sót trong quy trình kiểm soát có thể dẫn đến thiệt hại hàng tỷ đồng cho khách hàng.",
            },
            {
                type: "heading",
                text: "Phối hợp với đội vận chuyển và nhân viên kho",
            },
            {
                type: "paragraph",
                text: "Đội vận chuyển — bao gồm tài xế xe nâng, công nhân bốc xếp và tài xế xe tải — là những người có quyền truy cập rộng nhất trong kho. Quy trình phối hợp được mô tả rõ trong sổ điều lệnh: ai có quyền vào khu nào, thời gian được phép ở lại, và quy tắc ứng xử khi có sự cố.",
            },
            {
                type: "paragraph",
                text: "Nhân viên bảo vệ không can thiệp vào hoạt động vận hành kho — vai trò của họ là quan sát, ghi nhận và báo cáo. Trường hợp phát hiện sai phạm, họ thông báo trưởng ca kho và ghi vào báo cáo ca, không tự xử lý.",
            },
            {
                type: "heading",
                text: "Báo cáo và truy vết khi có sự cố",
            },
            {
                type: "paragraph",
                text: "Mỗi ca trực có báo cáo cuối ca — gồm thống kê lượt xe, danh sách lô hàng đặc biệt, lượt tuần tra hoàn thành và sự cố (nếu có). Báo cáo lưu trên hệ thống và truy cập được bởi cả nhân sự kho và Bảo vệ Thế An.",
            },
            {
                type: "paragraph",
                text: "Khi xảy ra thất thoát hoặc khiếu nại, đội điều tra của Bảo vệ Thế An phối hợp với ban quản lý kho truy vết: xem video camera, kiểm tra biên bản giao nhận, phỏng vấn nhân sự ca trực. Quá trình điều tra thường kết thúc trong 7 – 14 ngày, kèm báo cáo chi tiết và kiến nghị cải tiến.",
            },
            {
                type: "paragraph",
                text: "Bảo vệ kho bãi không chỉ là 'giữ cửa' — đó là một mắt xích trong chuỗi cung ứng. Một quy trình kiểm soát tốt giúp khách hàng giảm thất thoát, tăng độ tin cậy với đối tác và tối ưu chi phí logistics tổng thể. Đầu tư vào đội ngũ bảo vệ chuyên nghiệp tại kho là đầu tư có tỷ suất sinh lời rõ ràng và đo lường được.",
            },
        ],
        tags: [
            "Kho bãi",
            "Logistics",
            "Quy trình kiểm soát",
            "WMS",
            "Trung tâm phân phối",
            "Chuỗi cung ứng",
        ],
        heroLabel: "HERO · 07",
        heroCaption: "Trung tâm phân phối — Long An",
        imageLabel: "ART · 06",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 10,
    },
    {
        slug: "an-ninh-su-kien-quy-mo-lon",
        code: "BVT · 019",
        category: "Kinh nghiệm",
        categorySlug: "kinh-nghiem",
        date: "18 tháng 3, 2026",
        isoDate: "2026-03-18",
        title: "Kinh nghiệm tổ chức an ninh cho sự kiện quy mô lớn",
        excerpt:
            "Triển khai nhanh, kiểm soát đám đông và phối hợp với ban tổ chức — bài học từ các sự kiện 5.000 — 15.000 người tham dự tại TP.HCM, Hà Nội và Đà Nẵng.",
        content:
            "Triển khai nhanh, kiểm soát đám đông và phối hợp với ban tổ chức — bài học từ các sự kiện lớn.",
        body: [
            {
                type: "paragraph",
                text: "An ninh sự kiện là một dạng dịch vụ đặc biệt trong ngành bảo vệ — triển khai ngắn ngày (thường 1 – 3 ngày), huy động nhân sự lớn (50 – 300 người tùy quy mô) và yêu cầu phối hợp chặt với ban tổ chức, đơn vị tổ chức và đôi khi với cơ quan chức năng địa phương.",
            },
            {
                type: "paragraph",
                text: "Bảo vệ Thế An đã cung cấp dịch vụ an ninh cho hơn 80 sự kiện quy mô 5.000 – 15.000 người trong 5 năm qua — bao gồm hội nghị quốc tế, ra mắt sản phẩm, sự kiện thể thao và đêm nhạc. Bài viết tổng hợp những bài học cốt lõi từ quá trình này.",
            },
            {
                type: "heading",
                text: "Lập phương án theo kịch bản sự kiện",
            },
            {
                type: "paragraph",
                text: "Mỗi sự kiện có kịch bản riêng — vị trí khu VIP, lối thoát hiểm, khu vực hậu trường, điểm kiểm soát vé. Tổ an ninh xây dựng phương án chi tiết theo kịch bản trước ngày diễn ra ít nhất 7 ngày, bao gồm: sơ đồ bố trí nhân lực, lịch ca trực, quy trình xử lý sự cố và danh bạ liên lạc khẩn cấp.",
            },
            {
                type: "paragraph",
                text: "Phương án được trình bày trực tiếp với ban tổ chức và (nếu cần) với đại diện cơ quan công an địa phương. Mọi điều chỉnh đều được cập nhật vào phương án cuối — bản chính được phân phát cho tất cả đội trưởng và đội phó vào buổi giao ban đầu tiên.",
            },
            {
                type: "paragraph",
                text: "Phương án không chỉ là chi tiết về vị trí. Nó còn bao gồm phương án dự phòng cho các tình huống: thời tiết xấu, cháy nổ tại sân khấu, đám đông quá tải, người nổi tiếng bị quấy rối, hoặc người tham dự gặp vấn đề sức khỏe nghiêm trọng.",
            },
            {
                type: "heading",
                text: "Kiểm soát đám đông tại cổng vào",
            },
            {
                type: "paragraph",
                text: "Sự kiện 5.000+ người đòi hỏi quy trình kiểm soát ra vào tinh gọn — vé điện tử, làn riêng cho VIP, quy trình xử lý đám đông khi đông cục bộ. Một sai sót nhỏ tại cổng vào — như mở cổng trễ 10 phút — có thể tạo đám đông dồn ép gây nguy hiểm.",
            },
            {
                type: "paragraph",
                text: "Tổ chức làn riêng theo loại vé: làn VIP (kiểm tra nhanh, có quầy đón tiếp), làn thường (kiểm tra vé và an ninh cơ bản), và làn nhân viên / báo chí (kiểm soát danh sách chặt hơn). Mỗi làn có 4 – 6 nhân viên kiểm soát, dày hơn ở khung giờ cao điểm.",
            },
            {
                type: "paragraph",
                text: "Kiểm tra an ninh tại cổng — kiểm tra túi xách, máy soi (nếu cần) — phải nhanh nhưng không cẩu thả. Đào tạo nhân viên nhận biết các vật cấm (vũ khí, chất nổ, đồ uống có cồn ngoài luồng) là yêu cầu bắt buộc.",
            },
            {
                type: "heading",
                text: "Bố trí nhân lực bên trong khu vực sự kiện",
            },
            {
                type: "paragraph",
                text: "Nhân viên bên trong được phân loại theo vai trò: nhân viên cố định tại vị trí (cổng, lối thoát hiểm, khu VIP), nhân viên di động tuần tra (đi tự do trong khu vực được phân) và đội phản ứng nhanh (chờ tại điểm trung tâm, sẵn sàng triển khai khi có sự cố).",
            },
            {
                type: "paragraph",
                text: "Mật độ nhân lực thông thường là 1 nhân viên / 50 – 100 người tham dự — tùy theo độ phức tạp của sự kiện. Sự kiện có khu VIP đông, người nổi tiếng tham gia, hoặc lịch sử có rủi ro xô đẩy thường cần mật độ dày hơn.",
            },
            {
                type: "quote",
                text: "Sự kiện thành công về an ninh là sự kiện mà không ai để ý đến đội ngũ bảo vệ — họ ở đó, sẵn sàng, nhưng không gây cảm giác ngột ngạt.",
            },
            {
                type: "heading",
                text: "Phối hợp với đơn vị y tế và PCCC",
            },
            {
                type: "paragraph",
                text: "Mọi sự kiện quy mô lớn đều có đội y tế trực — thường là 2 – 4 nhân viên y tế và 1 xe cứu thương tại chỗ. Đội bảo vệ phối hợp chặt với đội y tế qua bộ đàm — báo cáo nhanh khi có người cần hỗ trợ y tế và hộ tống tới khu vực điều trị.",
            },
            {
                type: "paragraph",
                text: "Đội PCCC tại địa điểm sự kiện cũng có vai trò quan trọng — kiểm tra thiết bị trước sự kiện, trực trong suốt thời gian diễn ra và sẵn sàng triển khai khi có báo cháy. Đội bảo vệ là cầu nối thông tin giữa đám đông và đội PCCC khi có sự cố.",
            },
            {
                type: "heading",
                text: "Quản lý lối thoát hiểm và phương án sơ tán",
            },
            {
                type: "paragraph",
                text: "Lối thoát hiểm phải luôn được thông thoáng — không có ghế chắn, không có hàng quán đặt sai vị trí. Nhân viên bảo vệ kiểm tra lối thoát mỗi 30 phút và báo cáo ngay khi phát hiện vật cản.",
            },
            {
                type: "paragraph",
                text: "Phương án sơ tán được phổ biến cho toàn đội — biết lối thoát nào dành cho khu vực nào, ai chịu trách nhiệm hướng dẫn ở từng lối, và quy trình điểm danh sau khi sơ tán. Diễn tập sơ tán trước sự kiện là việc bắt buộc — không phải cho khách tham dự, mà cho đội ngũ bảo vệ.",
            },
            {
                type: "heading",
                text: "Báo cáo sau sự kiện và rút kinh nghiệm",
            },
            {
                type: "paragraph",
                text: "Trong vòng 24 – 48 giờ sau sự kiện, đội an ninh nộp báo cáo tổng kết — gồm: tổng quan vận hành, danh sách sự cố, đánh giá hiệu quả phương án và kiến nghị cho lần tổ chức tiếp theo.",
            },
            {
                type: "paragraph",
                text: "Buổi rút kinh nghiệm giữa Bảo vệ Thế An và ban tổ chức thường được tổ chức trong tuần đầu tiên sau sự kiện. Đây là dịp để cả hai bên đánh giá những gì hoạt động tốt, những gì cần cải tiến — đặc biệt với các sự kiện thường niên hoặc khách hàng có chuỗi sự kiện liên tục.",
            },
            {
                type: "paragraph",
                text: "An ninh sự kiện là dịch vụ đòi hỏi kinh nghiệm thực tế — không thể học hết qua sách vở. Mỗi sự kiện là một bài học mới, và đội ngũ tích lũy kinh nghiệm dần qua hàng trăm sự kiện sẽ tạo ra khác biệt rõ rệt so với đơn vị chỉ làm 'theo quy trình'.",
            },
        ],
        tags: [
            "Sự kiện",
            "Kiểm soát đám đông",
            "Triển khai nhanh",
            "Phối hợp ban tổ chức",
            "Phương án sơ tán",
            "An ninh sự kiện",
        ],
        heroLabel: "HERO · 08",
        heroCaption: "Sự kiện doanh nghiệp — TP.HCM",
        imageLabel: "ART · 07",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 11,
    },
    {
        slug: "kiem-soat-ra-vao-bang-cong-nghe",
        code: "BVT · 018",
        category: "An ninh doanh nghiệp",
        categorySlug: "an-ninh-doanh-nghiep",
        date: "10 tháng 3, 2026",
        isoDate: "2026-03-10",
        title: "Kiểm soát ra vào bằng công nghệ — xu hướng an ninh hiện đại",
        excerpt:
            "Tích hợp thẻ từ, nhận diện khuôn mặt và camera AI vào quy trình bảo vệ tòa nhà và khu công nghiệp — cách triển khai và những lưu ý thực tế.",
        content:
            "Tích hợp thẻ từ, nhận diện khuôn mặt và camera AI vào quy trình bảo vệ.",
        body: [
            {
                type: "paragraph",
                text: "Công nghệ không thay thế con người trong nghề bảo vệ — nhưng có thể tăng hiệu quả và giảm sai sót khi được tích hợp đúng cách. Trong 5 năm qua, các tòa nhà hạng A và khu công nghiệp tại Việt Nam đã chuyển dần sang mô hình kiểm soát ra vào lai (hybrid) — kết hợp nhân lực bảo vệ với hệ thống thẻ từ, camera AI và phần mềm quản lý.",
            },
            {
                type: "paragraph",
                text: "Bài viết phân tích các công nghệ phổ biến nhất hiện nay, kèm những lưu ý thực tế từ các dự án Bảo vệ Thế An đã tích hợp tại tòa nhà văn phòng và khu công nghiệp lớn.",
            },
            {
                type: "heading",
                text: "Thẻ từ và hệ thống quản lý ra vào",
            },
            {
                type: "paragraph",
                text: "Thẻ từ là công nghệ phổ biến nhất và cũng là nền tảng của mọi hệ thống kiểm soát ra vào hiện đại. Mỗi nhân sự (nhân viên, khách thuê, khách vãng lai) có thẻ riêng, quét tại đầu đọc khi vào và ra khu vực được phân quyền.",
            },
            {
                type: "paragraph",
                text: "Hệ thống thẻ từ tốt cho phép phân quyền chi tiết — theo khu vực, theo thời gian, theo loại nhân sự. Ví dụ: nhân viên kế toán chỉ được vào tầng văn phòng từ 7:00 – 19:00; khách thuê được vào tầng họ thuê 24/7 nhưng không vào tầng kỹ thuật. Khi nhân sự nghỉ việc, chỉ cần vô hiệu hóa thẻ — không cần thay khóa.",
            },
            {
                type: "paragraph",
                text: "Tích hợp thẻ từ với hệ thống chấm công và quản lý nhân sự là bước nâng cao. Khi đó, dữ liệu ra vào trở thành dữ liệu chấm công — giúp HR tiết kiệm thời gian và giảm gian lận chấm công hộ.",
            },
            {
                type: "heading",
                text: "Nhận diện khuôn mặt",
            },
            {
                type: "paragraph",
                text: "Công nghệ nhận diện khuôn mặt đã chín muồi và được triển khai rộng tại các tòa nhà hạng A. Hệ thống chụp ảnh khách tại sảnh, đối chiếu với cơ sở dữ liệu khách thường xuyên (nhân viên, khách thuê đăng ký) — giúp nhận diện trong 1 – 2 giây.",
            },
            {
                type: "paragraph",
                text: "Lợi ích chính: tăng tốc quy trình ra vào cho nhân viên thường xuyên (không cần xuất trình thẻ), phát hiện khách trong danh sách đen (nhân viên đã nghỉ việc, khách có lịch sử gây rối), và lưu trữ ảnh khách vãng lai phục vụ truy vết.",
            },
            {
                type: "paragraph",
                text: "Lưu ý quan trọng: nhận diện khuôn mặt phải tuân thủ quy định về bảo vệ dữ liệu cá nhân — đặc biệt với Nghị định 13/2023/NĐ-CP của Việt Nam. Khách hàng triển khai cần có chính sách rõ ràng về việc thu thập, lưu trữ và xóa dữ liệu sinh trắc học.",
            },
            {
                type: "heading",
                text: "Camera AI và phát hiện bất thường",
            },
            {
                type: "paragraph",
                text: "Camera AI là bước tiến lớn so với camera truyền thống. Thay vì chỉ ghi hình thụ động, hệ thống AI phân tích hình ảnh theo thời gian thực và cảnh báo các sự kiện bất thường: người lảng vảng quanh khu vực hạn chế, đám đông tập trung đột ngột, người ngã hoặc bất tỉnh, phương tiện đỗ tại vị trí cấm.",
            },
            {
                type: "paragraph",
                text: "Cảnh báo đến trung tâm điều hành và đội tuần tra — họ xác minh trực tiếp và xử lý theo quy trình. Camera AI không thay thế nhân viên bảo vệ; nó giúp nhân viên tập trung vào những điểm cần can thiệp thay vì giám sát thụ động 100+ màn hình cùng lúc.",
            },
            {
                type: "paragraph",
                text: "Hiệu suất camera AI phụ thuộc vào điều kiện ánh sáng, góc đặt camera và độ chính xác của model. Tại các tòa nhà hạng A, camera AI có độ chính xác 92 – 97% — đủ tốt để vận hành nhưng vẫn cần xác minh con người trước khi hành động.",
            },
            {
                type: "quote",
                text: "Công nghệ không thay thế nhân viên bảo vệ — nó giúp họ làm việc thông minh hơn và phản ứng nhanh hơn trong những tình huống quan trọng.",
            },
            {
                type: "heading",
                text: "Cổng kiểm soát tự động và turnstile",
            },
            {
                type: "paragraph",
                text: "Cổng turnstile (cổng xoay) kết hợp với thẻ từ hoặc nhận diện khuôn mặt là giải pháp phổ biến tại sảnh tòa nhà. Cổng chỉ mở khi quét thẻ hoặc nhận diện thành công — ngăn chặn người không có quyền vào sảnh chung.",
            },
            {
                type: "paragraph",
                text: "Cổng tốt có cảm biến chống chui qua (tailgating) — phát hiện khi hai người đi qua cùng một lượt quét thẻ. Đây là rủi ro phổ biến trong các tòa nhà đông người, đặc biệt vào khung giờ cao điểm sáng và chiều.",
            },
            {
                type: "heading",
                text: "Bãi xe thông minh",
            },
            {
                type: "paragraph",
                text: "Bãi xe thông minh sử dụng camera nhận diện biển số (ANPR — Automatic Number Plate Recognition) thay cho thẻ giấy hoặc thẻ từ. Xe ra vào tự động, không cần dừng quét thẻ — tăng tốc dòng xe và giảm áp lực cho nhân viên bãi.",
            },
            {
                type: "paragraph",
                text: "Hệ thống cũng giúp truy vết khi có sự cố — biết xe nào vào lúc nào, đỗ ở vị trí nào, ra vào trong bao lâu. Dữ liệu này có giá trị khi xử lý va chạm, mất mát tài sản hoặc tranh chấp giữa khách thuê.",
            },
            {
                type: "heading",
                text: "Tích hợp và phối hợp với nhân lực bảo vệ",
            },
            {
                type: "paragraph",
                text: "Lỗi phổ biến nhất khi triển khai công nghệ: nghĩ rằng công nghệ giảm được nhân lực bảo vệ. Thực tế ngược lại — công nghệ tăng năng suất của mỗi nhân viên, nhưng vai trò của con người vẫn không thể thiếu. Camera AI cảnh báo, nhưng nhân viên phải có mặt xử lý. Thẻ từ kiểm soát, nhưng nhân viên phải đối thoại với khách khi có vấn đề.",
            },
            {
                type: "paragraph",
                text: "Mô hình tối ưu: công nghệ xử lý 80% các tình huống thông thường, để nhân lực bảo vệ tập trung vào 20% tình huống phức tạp cần phán đoán và can thiệp. Đầu tư đúng tỷ lệ giữa công nghệ và nhân lực là bài toán quan trọng nhất khi xây dựng hệ thống an ninh hiện đại.",
            },
        ],
        tags: [
            "Công nghệ an ninh",
            "Camera AI",
            "Nhận diện khuôn mặt",
            "Thẻ từ",
            "Kiểm soát ra vào",
            "Bãi xe thông minh",
        ],
        heroLabel: "HERO · 09",
        heroCaption: "Tòa nhà công nghệ — Quận 7",
        imageLabel: "ART · 08",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 10,
    },
    {
        slug: "quan-ly-ca-truc-bao-ve-hieu-qua",
        code: "BVT · 017",
        category: "Quy trình",
        categorySlug: "quy-trinh",
        date: "02 tháng 3, 2026",
        isoDate: "2026-03-02",
        title: "Quản lý ca trực bảo vệ hiệu quả — công cụ và phương pháp",
        excerpt:
            "Hệ thống chấm công GPS, thẻ tuần tra điện tử và báo cáo ca trực tự động — cách Bảo vệ Thế An giám sát hơn 500 nhân sự tại 200+ địa điểm cùng lúc.",
        content:
            "Hệ thống chấm công GPS, báo cáo ca trực tự động và quy trình giám sát.",
        body: [
            {
                type: "paragraph",
                text: "Quản lý ca trực không chỉ là chấm công — đó là việc đảm bảo người đúng có mặt đúng giờ tại đúng vị trí, và làm đúng việc được phân công. Với hơn 500 nhân sự đang vận hành tại 200+ địa điểm trên cả nước, Bảo vệ Thế An cần hệ thống quản lý ca trực có thể đo lường được, truy vết được và cải tiến được.",
            },
            {
                type: "paragraph",
                text: "Bài viết mô tả ba lớp của hệ thống quản lý ca trực mà chúng tôi đang vận hành — kèm những bài học từ quá trình triển khai trong 5 năm qua.",
            },
            {
                type: "heading",
                text: "Chấm công GPS và xác thực vị trí",
            },
            {
                type: "paragraph",
                text: "Nhân viên chấm công bằng ứng dụng nội bộ trên điện thoại — không phải bằng máy chấm công cố định. Ứng dụng ghi nhận thời gian, vị trí GPS và ảnh chụp tại điểm trực — đảm bảo nhân viên thực sự có mặt tại địa điểm phân công.",
            },
            {
                type: "paragraph",
                text: "Nếu nhân viên chấm công ngoài bán kính cho phép (thường 100m so với địa điểm), hệ thống tự động báo cảnh báo cho đội trưởng ca và trung tâm điều hành. Đây là cơ chế chống chấm công hộ — vấn đề phổ biến trong ngành bảo vệ truyền thống.",
            },
            {
                type: "paragraph",
                text: "Dữ liệu chấm công đẩy về dashboard quản lý theo thời gian thực — đội ngũ giám sát có thể thấy tỷ lệ chấm công đúng giờ của mỗi địa điểm, danh sách nhân viên đi muộn, và xu hướng theo tuần / tháng. Đây là nguồn dữ liệu cốt lõi để đánh giá hiệu suất.",
            },
            {
                type: "heading",
                text: "Thẻ tuần tra điện tử",
            },
            {
                type: "paragraph",
                text: "Mỗi điểm trực có thẻ tuần tra điện tử — thường là tag NFC dán cố định tại vị trí khó di chuyển. Nhân viên dùng điện thoại quét mã tại điểm — dữ liệu đẩy về trung tâm giám sát thời gian thực, kèm timestamp và ảnh hiện trường.",
            },
            {
                type: "paragraph",
                text: "Lịch tuần tra được lập trước — thường là tuần tra mỗi 2 giờ ban ngày và mỗi 1 giờ ban đêm. Hệ thống tự động kiểm tra lịch — nếu nhân viên không quét đúng giờ, đội trưởng ca nhận cảnh báo và liên lạc kiểm tra.",
            },
            {
                type: "paragraph",
                text: "Tuần tra điện tử thay thế hoàn toàn sổ tuần tra giấy. Lợi ích lớn nhất không phải tiết kiệm giấy — mà là dữ liệu có thể phân tích. Đội ngũ giám sát biết điểm nào hay bị bỏ sót, thời điểm nào có tỷ lệ tuần tra thấp nhất, và nhân viên nào có hiệu suất tốt / kém.",
            },
            {
                type: "heading",
                text: "Báo cáo ca trực tự động",
            },
            {
                type: "paragraph",
                text: "Cuối mỗi ca, dữ liệu chấm công, tuần tra và sự cố (nếu có) được tổng hợp thành báo cáo ca tự động — không cần đội trưởng ca viết tay. Báo cáo gồm: tỷ lệ tuần tra hoàn thành, số lượng sự cố ghi nhận, ảnh từ các điểm trực và ghi chú tự do.",
            },
            {
                type: "paragraph",
                text: "Đội trưởng ca chỉ cần xác nhận và bổ sung ghi chú đặc biệt (nếu có). Báo cáo sau đó được tổng hợp thành báo cáo tuần (gửi khách hàng thứ Hai hàng tuần) và báo cáo tháng (đánh giá KPI và đề xuất cải tiến).",
            },
            {
                type: "quote",
                text: "Khi mọi ca trực đều có dữ liệu rõ ràng, đánh giá hiệu suất trở thành công việc khách quan — không phải dựa vào cảm tính của đội trưởng ca.",
            },
            {
                type: "heading",
                text: "Trung tâm điều hành và xử lý sự cố",
            },
            {
                type: "paragraph",
                text: "Trung tâm điều hành 24/7 là 'bộ não' của hệ thống — giám sát toàn bộ địa điểm cùng lúc qua dashboard, xử lý cảnh báo và điều phối nhân lực dự phòng. Đội ngũ trung tâm thường gồm 3 – 5 chuyên viên trực thay phiên.",
            },
            {
                type: "paragraph",
                text: "Khi có sự cố — báo cháy, sự cố an ninh, nhân viên vắng mặt đột xuất — trung tâm xác minh nhanh và điều phối phương án phù hợp. Quy trình leo cấp được mô tả chi tiết: cấp 1 (đội trưởng ca), cấp 2 (giám sát khu vực), cấp 3 (ban điều hành) — với thời gian phản hồi cam kết.",
            },
            {
                type: "heading",
                text: "Đánh giá hiệu suất nhân viên",
            },
            {
                type: "paragraph",
                text: "Dữ liệu ca trực là nguồn để đánh giá hiệu suất hàng tháng. Các chỉ số chính: tỷ lệ chấm công đúng giờ, tỷ lệ tuần tra hoàn thành, số lượng sự cố báo cáo đúng, đánh giá từ khách hàng. Mỗi nhân viên có hồ sơ hiệu suất riêng — được dùng cho xét tăng lương và thăng tiến.",
            },
            {
                type: "paragraph",
                text: "Nhân viên có hiệu suất thấp ba tháng liên tiếp sẽ vào diện đào tạo lại hoặc luân chuyển. Đây không phải là biện pháp trừng phạt — mà là cơ hội để nhân viên cải thiện trong môi trường mới hoặc với hỗ trợ thêm.",
            },
            {
                type: "heading",
                text: "Phản hồi từ khách hàng",
            },
            {
                type: "paragraph",
                text: "Hệ thống cũng tích hợp kênh phản hồi từ khách hàng — qua app riêng hoặc qua đại diện ban quản lý. Khách hàng có thể đánh giá chất lượng ca trực hàng tháng, ghi nhận lời khen / phê bình và yêu cầu thay đổi.",
            },
            {
                type: "paragraph",
                text: "Phản hồi tích cực được công bố nội bộ — tạo động lực cho nhân viên. Phản hồi tiêu cực được xử lý theo quy trình — không bao che, không bỏ qua. Mọi khiếu nại từ khách hàng đều có biên bản phản hồi trong vòng 48 giờ.",
            },
            {
                type: "paragraph",
                text: "Quản lý ca trực hiệu quả không phải là vấn đề kỹ thuật — đó là vấn đề văn hóa. Khi mọi người trong tổ chức đều nhìn vào cùng một dashboard, cùng một số liệu, thì việc cải tiến trở thành quá trình liên tục và tự nhiên. Đó là nền tảng để dịch vụ bảo vệ chuyên nghiệp duy trì chất lượng ổn định trong dài hạn.",
            },
        ],
        tags: [
            "Quản lý ca trực",
            "Chấm công GPS",
            "Thẻ tuần tra điện tử",
            "Báo cáo tự động",
            "Trung tâm điều hành",
            "KPI",
        ],
        heroLabel: "HERO · 10",
        heroCaption: "Trung tâm điều hành — TP.HCM",
        imageLabel: "ART · 09",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 10,
    },
    {
        slug: "bao-ve-cong-trinh-xay-dung",
        code: "BVT · 016",
        category: "Bảo vệ nhà máy",
        categorySlug: "bao-ve-nha-may",
        date: "22 tháng 2, 2026",
        isoDate: "2026-02-22",
        title: "Đặc thù bảo vệ công trình xây dựng — rủi ro và giải pháp",
        excerpt:
            "Quản lý vật tư, kiểm soát nhân công ra vào và đảm bảo an toàn lao động tại công trường — những bài học thực tế từ hơn 50 công trình tại TP.HCM, Hà Nội và Đà Nẵng.",
        content:
            "Bảo vệ công trình xây dựng đòi hỏi sự kết hợp giữa quản lý vật tư, kiểm soát nhân công và đảm bảo an toàn lao động.",
        body: [
            {
                type: "paragraph",
                text: "Bảo vệ công trình xây dựng là một dạng dịch vụ đặc thù — môi trường thay đổi liên tục, nhiều nhà thầu phụ và rủi ro thất thoát vật tư cao. Một dự án cao tầng 30 tầng có thể có 20 – 30 nhà thầu phụ, 500 – 1000 công nhân và lưu lượng vật tư hàng trăm tấn mỗi tuần — đặt ra mức độ phức tạp riêng cho đội ngũ bảo vệ.",
            },
            {
                type: "paragraph",
                text: "Bảo vệ Thế An đã cung cấp dịch vụ tại hơn 50 công trình lớn — từ nhà cao tầng (Centec, Diamond Plaza) đến công trình hạ tầng (đường cao tốc, cầu vượt). Bài viết tổng hợp các rủi ro đặc thù và phương án xử lý.",
            },
            {
                type: "heading",
                text: "Rủi ro thất thoát vật tư",
            },
            {
                type: "paragraph",
                text: "Vật tư xây dựng có giá trị cao và dễ vận chuyển — sắt thép, vật liệu điện, dây cáp đồng. Thất thoát vật tư tại công trường có thể chiếm 2 – 5% tổng chi phí dự án — con số đáng kể với những dự án trăm tỷ.",
            },
            {
                type: "paragraph",
                text: "Phương án kiểm soát: mọi vật tư nhập kho công trường đều có phiếu nhập và đối chiếu thực tế. Vật tư cao giá (sắt, đồng, dây cáp) được niêm phong và lưu kho riêng. Quy trình xuất kho yêu cầu chữ ký của ít nhất hai bên — đại diện nhà thầu chính và nhân viên kho.",
            },
            {
                type: "paragraph",
                text: "Phương tiện vận chuyển ra khỏi công trường đều được kiểm tra. Trường hợp xe có dấu hiệu chở vật tư bất hợp pháp (không có phiếu xuất, không khớp với kế hoạch thi công), nhân viên bảo vệ giữ xe và báo cáo ban chỉ huy công trường.",
            },
            {
                type: "heading",
                text: "Kiểm soát nhân công và nhà thầu phụ",
            },
            {
                type: "paragraph",
                text: "Mỗi nhà thầu phụ đăng ký danh sách công nhân trước khi vào công trường. Công nhân được cấp thẻ định danh có ảnh — đeo trên đồng phục trong suốt thời gian làm việc. Quy trình này giúp phân biệt người được phép và người lạ tại công trường.",
            },
            {
                type: "paragraph",
                text: "Cổng vào công trường có hệ thống quét thẻ và ghi nhận giờ vào / ra. Dữ liệu này không chỉ dùng cho an ninh — mà còn cho chấm công nhà thầu phụ và quản lý nhân lực. Một số dự án tích hợp với hệ thống ERP của nhà thầu chính, giúp tính lương và quyết toán hợp đồng phụ chính xác.",
            },
            {
                type: "paragraph",
                text: "Đối với khách / đối tác đến tham quan công trường, quy trình là: đăng ký trước, được cấp mũ bảo hộ và áo phản quang tại cổng, có người dẫn đi suốt thời gian tham quan. Không cho khách đi tự do trong khu vực thi công.",
            },
            {
                type: "heading",
                text: "An toàn lao động",
            },
            {
                type: "paragraph",
                text: "Mặc dù an toàn lao động không phải nhiệm vụ chính của đội bảo vệ, họ là người phát hiện đầu tiên khi có vi phạm — công nhân không đội mũ bảo hộ, không thắt dây an toàn khi làm việc trên cao, hoặc khu vực thi công không có rào chắn. Nhân viên bảo vệ thông báo ngay cho đội ATLĐ và ghi vào biên bản ca.",
            },
            {
                type: "paragraph",
                text: "Khi xảy ra tai nạn lao động, đội bảo vệ là lực lượng phản ứng đầu tiên — cách ly hiện trường, hỗ trợ sơ cấp cứu (nếu được đào tạo), gọi xe cấp cứu và phối hợp với cơ quan chức năng. Mỗi nhân viên đều có sơ cứu chứng chỉ — đào tạo cùng khóa PCCC.",
            },
            {
                type: "quote",
                text: "Bảo vệ công trình không phải là đứng cổng đếm xe — đó là một mắt xích trong hệ thống quản lý dự án xây dựng.",
            },
            {
                type: "heading",
                text: "Bảo vệ trang thiết bị và máy móc",
            },
            {
                type: "paragraph",
                text: "Công trình có nhiều máy móc giá trị — cẩu tháp, xe ben, máy đào, máy phát điện. Bảo vệ tuần tra khu vực máy móc, kiểm tra niêm phong (nếu có) và báo cáo khi phát hiện dấu hiệu can thiệp trái phép.",
            },
            {
                type: "paragraph",
                text: "Ban đêm là thời điểm rủi ro cao — công trường thường vắng, đèn ít. Nhân viên ca đêm tăng tần suất tuần tra và phối hợp với hệ thống cảm biến chuyển động (nếu có lắp đặt) để phát hiện đột nhập.",
            },
            {
                type: "heading",
                text: "Phối hợp với cộng đồng xung quanh",
            },
            {
                type: "paragraph",
                text: "Công trình xây dựng ảnh hưởng tới cộng đồng xung quanh — tiếng ồn, bụi, lưu lượng xe ra vào. Đội bảo vệ là cầu nối thông tin — nhận khiếu nại từ người dân (qua tuyến phố hoặc qua chính quyền), chuyển cho ban chỉ huy công trường và phản hồi lại cộng đồng.",
            },
            {
                type: "paragraph",
                text: "Mối quan hệ tốt với người dân khu vực giúp dự án tránh được những rắc rối không cần thiết — biểu tình, khiếu nại lên chính quyền, hoặc các vụ việc nhỏ leo thang. Đây là vai trò mềm nhưng quan trọng của đội ngũ bảo vệ tại công trường.",
            },
            {
                type: "heading",
                text: "Bàn giao công trình hoàn thành",
            },
            {
                type: "paragraph",
                text: "Khi dự án hoàn thành, đội bảo vệ chuyển dần sang vai trò bảo vệ bàn giao — kiểm soát chặt hơn ra vào, đảm bảo vật tư và máy móc còn lại được bảo quản đúng cho đến khi nhà thầu chính bàn giao công trình cho chủ đầu tư. Giai đoạn này thường kéo dài 2 – 4 tuần.",
            },
            {
                type: "paragraph",
                text: "Sau khi bàn giao, đội bảo vệ có thể chuyển sang vai trò bảo vệ vận hành tòa nhà (đối với dự án dân dụng) hoặc rút lui (đối với dự án hạ tầng). Sự chuyển đổi này cần kế hoạch trước — thường được lập trong tháng cuối của giai đoạn thi công.",
            },
            {
                type: "paragraph",
                text: "Bảo vệ công trình xây dựng đòi hỏi tính linh hoạt cao — môi trường thay đổi, quy mô nhân lực thay đổi, rủi ro thay đổi theo từng giai đoạn dự án. Một đội ngũ chuyên nghiệp biết thích ứng và đi cùng dự án từ móng đến hoàn thiện là tài sản có giá trị thực cho chủ đầu tư.",
            },
        ],
        tags: [
            "Công trình xây dựng",
            "Vật tư",
            "Kiểm soát nhân công",
            "An toàn lao động",
            "Bảo vệ công trường",
            "Quản lý nhà thầu phụ",
        ],
        heroLabel: "HERO · 11",
        heroCaption: "Công trường cao tầng — TP.HCM",
        imageLabel: "ART · 10",
        author: "Phòng Truyền thông — Bảo vệ Thế An",
        authorRole: "Bộ phận nội dung chuyên môn",
        authorBio:
            "Bộ phận nội dung chuyên môn — tổng hợp tài liệu kỹ thuật, kinh nghiệm vận hành và cập nhật quy định pháp luật về dịch vụ bảo vệ tại Việt Nam.",
        authorInitials: "PT",
        readTime: 10,
    },
    {
        slug: "tuyen-dung-va-giu-chan-nhan-su-bao-ve",
        code: "BVT · 015",
        category: "Nhân sự",
        categorySlug: "nhan-su",
        date: "15 tháng 2, 2026",
        isoDate: "2026-02-15",
        title: "Tuyển dụng và giữ chân nhân sự bảo vệ — thách thức ngành",
        excerpt:
            "Chiến lược tuyển dụng, chế độ đãi ngộ và lộ trình phát triển nghề nghiệp giúp Bảo vệ Thế An duy trì tỷ lệ nghỉ việc dưới 10% — thấp hơn ba lần trung bình ngành.",
        content:
            "Chiến lược tuyển dụng và giữ chân nhân sự — Bảo vệ Thế An duy trì tỷ lệ nghỉ việc dưới 10%.",
        body: [
            {
                type: "paragraph",
                text: "Ngành dịch vụ bảo vệ Việt Nam đối mặt với tỷ lệ nghỉ việc cao — trung bình 30 – 40% mỗi năm, cá biệt có những đơn vị 60 – 70%. Nguyên nhân: lương thấp, công việc đơn điệu, ít cơ hội thăng tiến và môi trường thiếu chuyên nghiệp. Hệ quả là chất lượng dịch vụ không ổn định, đào tạo liên tục bị 'reset' và chi phí tuyển dụng cao.",
            },
            {
                type: "paragraph",
                text: "Bảo vệ Thế An duy trì tỷ lệ nghỉ việc dưới 10% trong 3 năm qua — thấp hơn ba lần so với trung bình ngành. Bài viết chia sẻ ba trụ cột giúp đạt được con số này: tuyển chọn đầu vào, chế độ đãi ngộ minh bạch và lộ trình phát triển nghề nghiệp.",
            },
            {
                type: "heading",
                text: "Tuyển chọn ngay từ đầu vào",
            },
            {
                type: "paragraph",
                text: "Vấn đề nghỉ việc cao thường bắt nguồn từ giai đoạn tuyển — nhận sai người. Bảo vệ Thế An có quy trình tuyển nghiêm túc: kiểm tra lý lịch tư pháp, khám sức khỏe, phỏng vấn nhiều vòng và đánh giá tác phong trong khóa đào tạo. Tỷ lệ đậu cuối khoảng 60 – 70% so với số đăng ký ban đầu.",
            },
            {
                type: "paragraph",
                text: "Ứng viên hiểu rõ yêu cầu công việc trước khi vào — không có 'sốc nghề' sau 2 tuần. Họ biết về ca trực 12 giờ, công việc đứng nhiều, mức lương cụ thể và lộ trình phát triển. Sự minh bạch ngay từ đầu giúp loại bỏ những người không phù hợp trước khi đầu tư đào tạo.",
            },
            {
                type: "paragraph",
                text: "Đặc biệt với nhóm ứng viên trẻ (18 – 25 tuổi), buổi giới thiệu nghề là quan trọng — họ thường thiếu hình dung về thực tế công việc. Cho phép họ đi thực tế cùng đội trưởng ca 1 ca trực trước khi quyết định ký hợp đồng giúp giảm tỷ lệ bỏ việc sau 30 ngày.",
            },
            {
                type: "heading",
                text: "Chế độ đãi ngộ minh bạch",
            },
            {
                type: "paragraph",
                text: "Lương đúng hạn mỗi tháng — không chậm, không trừ vô lý. Đây là tiêu chí cơ bản nhưng nhiều đơn vị không làm được. Bảo vệ Thế An cam kết trả lương vào ngày 05 hàng tháng, bao gồm lương cơ bản, phụ cấp ca đêm, lễ Tết, làm thêm giờ tính minh bạch theo Bộ luật Lao động.",
            },
            {
                type: "paragraph",
                text: "Bảo hiểm xã hội, bảo hiểm y tế, bảo hiểm thất nghiệp đầy đủ ngay từ tháng đầu — không có chuyện 'thử việc 3 tháng không đóng bảo hiểm'. Khám sức khỏe định kỳ 6 tháng/lần và bảo hiểm tai nạn 24/7 là quyền lợi tiêu chuẩn.",
            },
            {
                type: "paragraph",
                text: "Phụ cấp đặc biệt cho ca đêm (25 – 35%), ca lễ Tết (200 – 300%) và làm thêm giờ tính theo luật. Mọi khoản đều có công thức rõ ràng — nhân viên có thể tự tính kiểm tra. Đây là cách xây dựng niềm tin lâu dài.",
            },
            {
                type: "quote",
                text: "Tỷ lệ nghỉ việc thấp không đến từ việc 'giữ chân' nhân viên — mà đến từ việc đối xử với họ một cách tử tế và chuyên nghiệp ngay từ đầu.",
            },
            {
                type: "heading",
                text: "Lộ trình phát triển nghề nghiệp",
            },
            {
                type: "paragraph",
                text: "Một trong những lý do nhân viên nghỉ là cảm giác 'kẹt' — làm 3 năm vẫn cùng vị trí, cùng mức lương. Bảo vệ Thế An có lộ trình rõ ràng: Bảo vệ → Đội phó → Đội trưởng → Giám sát ca → Chỉ huy vùng. Mỗi cấp có tiêu chí đánh giá và mức lương tương ứng.",
            },
            {
                type: "paragraph",
                text: "Đánh giá thăng tiến diễn ra mỗi 6 tháng. Tiêu chí gồm: hiệu suất ca trực (dữ liệu khách quan từ hệ thống), đánh giá từ đồng nghiệp và khách hàng, kết quả các khóa đào tạo nâng cao. Đây là quy trình minh bạch — không phụ thuộc vào 'quan hệ'.",
            },
            {
                type: "paragraph",
                text: "Nhân viên xuất sắc còn có cơ hội chuyển sang các vai trò chuyên môn: huấn luyện viên đào tạo, chuyên viên giám sát SOC, chuyên viên khảo sát khách hàng. Đây là những vai trò tăng giá trị nghề nghiệp và mở rộng kỹ năng — phù hợp với những ai muốn xây dựng sự nghiệp dài hạn trong ngành.",
            },
            {
                type: "heading",
                text: "Đào tạo liên tục và phát triển kỹ năng",
            },
            {
                type: "paragraph",
                text: "Ngoài khóa đào tạo nhập cuộc 120 giờ, mọi nhân viên đều tham gia khóa cập nhật hàng quý — PCCC, sơ cấp cứu, xử lý tình huống, ngoại ngữ giao tiếp cơ bản (cho ai làm tại tòa nhà có khách quốc tế). Đào tạo có lương — không phải tự bỏ tiền hoặc bỏ giờ.",
            },
            {
                type: "paragraph",
                text: "Khóa đào tạo nâng cao — quản lý ca, lập kế hoạch an ninh, kỹ năng giao tiếp — dành cho nhân viên có triển vọng thăng tiến. Khóa này thường kéo dài 40 – 80 giờ, kết thúc bằng dự án thực tế tại địa điểm khách hàng.",
            },
            {
                type: "heading",
                text: "Văn hóa và phúc lợi mềm",
            },
            {
                type: "paragraph",
                text: "Bên cạnh lương thưởng, văn hóa công ty cũng giữ chân nhân viên. Các hoạt động thường niên: tiệc cuối năm, du lịch hè cho đội xuất sắc, sinh nhật nhân viên, thưởng con đỗ đại học. Những điều nhỏ nhưng tạo cảm giác được coi trọng.",
            },
            {
                type: "paragraph",
                text: "Đội trưởng ca và đội phó được đào tạo về kỹ năng quản lý người — không phải chỉ về nghiệp vụ bảo vệ. Một đội trưởng tốt biết lắng nghe, xử lý xung đột nhỏ và động viên đồng nghiệp. Điều này tạo nên môi trường làm việc tích cực — yếu tố giữ chân nhân viên mạnh hơn cả lương thưởng trong nhiều trường hợp.",
            },
            {
                type: "heading",
                text: "Đo lường và cải tiến liên tục",
            },
            {
                type: "paragraph",
                text: "Bảo vệ Thế An đo lường tỷ lệ nghỉ việc theo địa điểm, theo cấp bậc và theo thời gian gắn bó. Phỏng vấn nghỉ việc (exit interview) là quy trình bắt buộc — để hiểu lý do thực sự và cải tiến cho tương lai.",
            },
            {
                type: "paragraph",
                text: "Dữ liệu cho thấy 70% nhân viên nghỉ trong 6 tháng đầu liên quan đến không phù hợp với công việc; 20% liên quan đến cá nhân (gia đình, sức khỏe); 10% liên quan đến vấn đề trong công ty. Mỗi nhóm có giải pháp riêng — tuyển sàng lọc kỹ hơn, hỗ trợ cá nhân, hoặc cải tiến quy trình nội bộ.",
            },
            {
                type: "paragraph",
                text: "Giữ chân nhân sự trong ngành bảo vệ không phải là kỹ thuật — đó là cam kết dài hạn của tổ chức với con người. Khi nhân viên cảm thấy được tôn trọng, được trả lương xứng đáng và có lộ trình rõ ràng, tỷ lệ nghỉ việc tự động giảm. Đây là nền tảng cho chất lượng dịch vụ ổn định và mối quan hệ dài hạn với khách hàng.",
            },
        ],
        tags: [
            "Tuyển dụng",
            "Nhân sự",
            "Đãi ngộ",
            "Lộ trình thăng tiến",
            "Giữ chân nhân viên",
            "Văn hóa doanh nghiệp",
        ],
        heroLabel: "HERO · 12",
        heroCaption: "Văn phòng tuyển dụng — TP.HCM",
        imageLabel: "ART · 11",
        author: "Phòng Nhân sự — Bảo vệ Thế An",
        authorRole: "Bộ phận tuyển dụng và đào tạo",
        authorBio:
            "Phòng Nhân sự phụ trách tuyển dụng, đào tạo và chính sách đãi ngộ — nguồn dữ liệu của các bài viết về quản trị nhân sự ngành dịch vụ bảo vệ.",
        authorInitials: "NS",
        readTime: 11,
    },
];
