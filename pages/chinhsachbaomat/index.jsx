import Layout from "@/layouts/Layout";
import TruyenHinhDiDong from "@/utils/truyenhinh";
import Link from "next/link";
import React from "react";

function DiDong() {
  const data = TruyenHinhDiDong;
  return (
    <Layout>
      <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
        <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
          <span className="border-b-2 inline-block pb-0 md:pb-1 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
            CHÍNH SÁCH BẢO MẬT
          </span>
        </h2>
        <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
          <h2 className="text-sm md:text-lg lg:text-xl ">
            <ul className=" py-2 md:py-4 md:p-4 border-main font-family:Arial gap-2 text-justify">
              <li>
                Tại<strong> wifi-vnpt.com.vn</strong> Chúng tôi cam kết bảo vệ
                thông tin cá nhân của khách hàng và đối tác, nhằm đảm bảo rằng
                mọi trải nghiệm giao dịch trên trang web wifi-vnpt.com.vn là an
                toàn và bảo mật. Mục tiêu chính của chính sách bảo mật này là
                xác định và mô tả cách chúng tôi thu thập, lưu trữ, sử dụng và
                bảo vệ thông tin cá nhân.
              </li>
              <li>
                <strong>&emsp;1. Mục đích và phạm vi thu thập thông tin</strong>
              </li>
              <li>
                Thuật ngữ "Thông tin cá nhân" trong Chính Sách này nghĩa là
                thông tin nhận diện hoặc có khả năng nhận diện danh tính cá nhân
                của khách hàng và cộng tác viên. Những loại thông tin cá nhân mà
                chúng tôi xử lý (có thể khác nhau theo phạm vi quyền hạn dựa
                trên luật pháp hiện hành) bao gồm:Tên, địa chỉ, số điện thoại,
                email…Chúng tôi luôn thông báo cho khách hàng/cộng tác viên biết
                về mục đích cụ thể nếu cần thu thập những thông tin cá nhân của
                khách hàng trên trang web: https://wifi-vnpt.com.vn và mọi thông
                tin đều phải được khách hàng/cộng tác viên tự nguyện cung cấp
              </li>
              <li>
                <strong>&emsp;2. Bảo mật thông tin </strong>{" "}
              </li>
              <li>
                Trang web của chúng tôi coi trọng việc bảo mật thông tin và sử
                dụng các biện pháp tốt nhất bảo vệ thông tin và việc thanh toán
                của quý khách. Thông tin của quý khách trong quá trình thanh
                toán sẽ được mã hóa để đảm bảo an toàn. Quý khách không được sử
                dụng bất kỳ chương trình, công cụ hay hình thức nào khác để can
                thiệp vào hệ thống hay làm thay đổi cấu trúc dữ liệu. Trang web
                cũng nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ
                hoạt động nào nhằm can thiệp, phá hoại hay xâm nhập vào dữ liệu
                của hệ thống. Cá nhân hay tổ chức vi phạm sẽ bị tước bỏ mọi
                quyền lợi cũng như sẽ bị truy tố trước pháp luật nếu cần thiết.
                Mọi thông tin giao dịch sẽ được bảo mật nhưng trong trường hợp
                cơ quan pháp luật yêu cầu, chúng tôi sẽ buộc phải cung cấp những
                thông tin này cho các cơ quan pháp luật.
              </li>
              <li>
                <strong>&emsp;3. Sử dụng thông tin </strong>{" "}
              </li>
              <li>
                Thông tin cá nhân của Cộng tác viên thu thập được sẽ chỉ được sử
                dụng trong nội bộ Tổng Công ty với mục đích hỗ trợ, đào tạo,
                thông báo các chính sách thù lao mới, các chiến dịch bán hàng và
                gửi email, tin nhắn hay liên hệ trực tiếp để thông báo các nội
                dung có liên quan. Khi cần thiết, chúng tôi có thể sử dụng những
                thông tin này để liên hệ trực tiếp với khách hàng dưới các hình
                thức như: xác nhận thông tin đơn hàng, xác nhận chuyển sản phẩm
                cho khách hàng, xác nhận thời gian giao nhận sản phẩm theo thông
                tin khách hàng, xác nhận địa điểm giao nhận sản phẩm.
              </li>
              <li>
                <strong>
                  &emsp;4. Cam kết bảo mật thông tin cá nhân khách hàng{" "}
                </strong>{" "}
              </li>
              <li>
                Tổng Công ty sẽ không chia sẻ thông tin của quý khách cho bất kỳ
                một công ty nào khác ngoại trừ các đại lý, các bộ phận tiếp nhận
                đơn hàng và chuyển đơn hàng đến khách hàng theo thông tin đơn
                hàng. Trong một vài trường hợp đặc biệt, Tổng Công ty có thể bị
                yêu cầu phải tiết lộ thông tin cá nhân, ví dụ như khi có căn cứ
                cho việc tiết lộ thông tin là cần thiết để ngăn chặn các mối đe
                dọa về tính mạng và sức khỏe, hay cho mục đích thực thi pháp
                luật. công ty cam kết tuân thủ cá quy tắc bảo mật thông tin cho
                khách hàng và các Nguyên tắc Bảo mật Quốc gia.
              </li>
              <li>
                <strong>&emsp;5. Liên Hệ </strong>{" "}
              </li>
              <li>
                Đối với mọi thắc mắc hoặc yêu cầu liên quan đến chính sách bảo
                mật, vui lòng liên hệ với chúng tôi qua số điện thoại 0815117116
                hoặc linhpq.hcm@vnpt.vn
                <li>
                  Chúng tôi cam kết duy trì và cập nhật chính sách này để đảm
                  bảo rằng thông tin cá nhân của bạn được bảo vệ một cách tốt
                  nhất. Đồng hành cùng chúng tôi, bạn có thể yên tâm về sự an
                  toàn của thông tin cá nhân khi sử dụng dịch vụ của
                  wifi-vnpt.com.vn
                </li>
              </li>
            </ul>
          </h2>
        </div>
      </div>
    </Layout>
  );
}

export default DiDong;
