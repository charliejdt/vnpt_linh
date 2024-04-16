import Layout from "@/layouts/Layout";
import TruyenHinhDiDong from "@/utils/truyenhinh";
import Link from "next/link";
import React from "react";
import LinkZalo from "@/utils/zalo";

function DiDong() {
  // const linkDn = LinkZalo();
  return (
    <Layout>
      <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
        <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
          <span className="border-b-2 inline-block pb-2 md:pb-4 lg:pb-6 border-main sm:pr-2 md:pr-4 lg:pr-6">
            Internet Doanh Nghiệp
          </span>
        </h2>
        <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
          <h2 className="text-sm md:text-lg lg:text-xl ">
            <ul className=" py-2 md:py-4 md:p-4 border-main font-family:Arial gap-2 text-justify">
              <li>
                &emsp; Năm 2024 chúng tôi tiếp tục đẩy mạnh và phát triển mang
                đến cho bạn các gói cước Internet tốc độ cao với giá ưu đãi
                nhất. Với tốc độ truy cập nhanh chóng, ổn định và tính năng tiện
                ích, các gói cước Internet chúng tôi năm 2024 hứa hẹn mang lại
                sự thuận tiện và hài lòng cho khách hàng. Dưới đây là bảng giá
                mới nhất:
              </li>
            </ul>
          </h2>
        </div>

        <div className="rounded-xl p-0 md:p-0 lg:pb-6">
          <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className=" inline-block pb-2 md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
              Bảng giá internet FiberS, Fiber Wifi
            </span>
          </h2>
          <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
            <h2 className="text-sm md:text-lg lg:text-xl ">
              <ul className="  border-main font-family:Arial gap-2 text-justify">
                <li>
                  &emsp; Gói cước sử dụng dịch vụ để truy cập Internet (cung cấp
                  wifi tại các khu vực công cộng,...) hoặc triển khai các ứng
                  dụng chỉ sử dụng IP động.
                </li>
              </ul>
            </h2>
          </div>
          <>
            <p>
              {" "}
              <img
                src="/2024_fibers.png"
                alt="Dịch vụ viễn thông"
                width={932}
                height={1920}
                className="w-full"
              ></img>
            </p>
          </>

          <div className="grid  md:grid-cols-3 grid-cols-2 mb-8 gap-2 md:gap-4 lg:gap-10"></div>
          <div className="grid  md:grid-cols-3 grid-cols-3 mb-8 gap-1 md:gap-1 lg:gap-1 justify-center">
            {/* <Link href="tel:0815117116" className=""></Link> */}
            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6 sm:pt-2 md:pt-4 lg:pt-6"></span>
            </h2>
            <Link
              href="tel:0815117116"
              className="bg-main hover:bg-[#DC2323] hover:text-white text-center transition-all py-2 px-4 rounded-3xl text-white uppercase bg-[#1E73BE] text-xs md:text-sm lg:text-lg"
            >
              Liên hệ ngay
            </Link>
            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6 sm:pt-2 md:pt-4 lg:pt-6"></span>
            </h2>
            {/* <Link href="tel:0815117116" className=""></Link> */}
          </div>
        </div>

        <div className="rounded-xl p-0 md:p-0 lg:pb-6">
          <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className=" inline-block pb-2 md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
              Bảng giá internet doanh nghiệp vừa và nhỏ
            </span>
          </h2>

          <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
            <h2 className="text-sm md:text-lg lg:text-xl ">
              <ul className="  border-main font-family:Arial gap-2 text-justify">
                <li>
                  &emsp; Gói cước hàng yêu cầu chất lượng dịch vụ cao, cam kết
                  tốc độ quốc tế cao. Đáp ứng nhu cầu sử dụng dịch vụ để truy
                  cập, cũng như triển khai các ứng trên nền Internet với chất
                  lượng cao.
                </li>
              </ul>
            </h2>
          </div>
          <>
            <p>
              {" "}
              <img
                src="/2024_dn_vua.png"
                alt="Dịch vụ viễn thông"
                width={932}
                height={1920}
                className="w-full"
              ></img>
            </p>
          </>

          <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className=" inline-block pb-2 md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6 sm:pt-2 md:pt-4 lg:pt-6">
              Bảng giá internet doanh nghiệp lớn
            </span>
          </h2>

          <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
            <h2 className="text-sm md:text-lg lg:text-xl ">
              <ul className="  border-main font-family:Arial gap-2 text-justify">
                <li>
                  &emsp; Gói cước hàng yêu cầu chất lượng dịch vụ cao, cam kết
                  tốc độ quốc tế cao. Đáp ứng nhu cầu sử dụng dịch vụ để truy
                  cập, cũng như triển khai các ứng trên nền Internet với chất
                  lượng cao.
                </li>
              </ul>
            </h2>
          </div>
          <>
            <p>
              {" "}
              <img
                src="/2024_dn_lon.png"
                alt="Dịch vụ viễn thông"
                width={932}
                height={1920}
                className="w-full"
              ></img>
            </p>
          </>

          <div className="grid  md:grid-cols-3 grid-cols-2 mb-8 gap-2 md:gap-4 lg:gap-10"></div>
          <div className="grid  md:grid-cols-3 grid-cols-3 mb-8 gap-1 md:gap-1 lg:gap-1 justify-center">
            {/* <Link href="tel:0815117116" className=""></Link> */}
            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6 sm:pt-2 md:pt-4 lg:pt-6"></span>
            </h2>
            <Link
              href="tel:0815117116"
              className="bg-main hover:bg-[#DC2323] hover:text-white text-center transition-all py-2 px-4 rounded-3xl text-white uppercase bg-[#1E73BE] text-xs md:text-sm lg:text-lg"
            >
              Liên hệ ngay
            </Link>
            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6 sm:pt-2 md:pt-4 lg:pt-6"></span>
            </h2>
            {/* <Link href="tel:0815117116" className=""></Link> */}
          </div>
          <h2 className="uppercase mb-1 font-bold text-left text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
              Thủ tục đăng ký internet VNPT Tp. Hồ Chí Minh
            </span>
          </h2>
          <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
            <h2 className="text-sm md:text-lg lg:text-xl ">
              <ul className=" md:p-4 border-main font-family:Arial gap-2 text-justify">
                <li>- Giấy phép đăng ký kinh doanh</li>
                <li>
                  - Bản sao Căn Cước Công Dân 2 mặt người đại diện pháp luật
                </li>
              </ul>
            </h2>
          </div>
          <h2 className="uppercase mb-1 font-bold text-left text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
              Liên hệ tư vấn và đăng ký lắp mạng VNPT
            </span>
          </h2>
          <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
            <h2 className="text-sm md:text-lg lg:text-xl ">
              <ul className=" md:p-4 border-main font-family:Arial gap-2 text-justify">
                <li>- Liên hệ qua số điện thoại: 0815117116</li>
                <li>- Đăng ký qua zalo: 0815117116</li>
                <li>- Hotline hỗ trợ báo hỏng internet: 18001166</li>
              </ul>
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DiDong;
