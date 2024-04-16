import ListData from "@/utils/data";
import Layout from "@/layouts/Layout";
import Link from "next/link";
import React from "react";
import LinkZalo from "@/utils/zalo";

function index() {
  // const link1 = LinkZalo();

  return (
    <div>
      <Layout>
        <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
          <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className="border-b-2 inline-block pb-2 md:pb-4 lg:pb-6 border-main sm:pr-2 md:pr-4 lg:pr-6">
              internet cá nhân
            </span>
          </h2>
          <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
            <h2 className="text-sm md:text-lg lg:text-xl ">
              <ul className=" py-2 md:py-4 md:p-4 border-main font-family:Arial gap-2 text-justify">
                <li>
                  &emsp; Năm 2024 chúng tôi tiếp tục đẩy mạnh và phát triển mang
                  đến cho bạn các gói cước Internet tốc độ cao với giá ưu đãi
                  nhất. Với tốc độ truy cập nhanh chóng, ổn định và tính năng
                  tiện ích, các gói cước Internet chúng tôi năm 2024 hứa hẹn
                  mang lại sự thuận tiện và hài lòng cho khách hàng. Chính sách
                  giá dịch vụ internet của Thành phố Hồ Chí Minh được phân chia
                  theo 2 khu vực: Nội thành & Ngoại thành. Dưới đây là bảng giá
                  mới nhất:
                </li>
              </ul>
            </h2>
          </div>
          <div className="rounded-xl p-0 md:p-0 lg:pb-6">
            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
                bảng giá internet - ngoại thành
              </span>
            </h2>
            <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
              <h2 className="text-sm md:text-lg lg:text-xl ">
                <ul className=" md:p-4 border-main font-family:Arial gap-2 text-justify">
                  <li>
                    &emsp; Ngoại thành bao gồm các quận (2, 5, 6, 8, 9, 12, Bình
                    Tân, Gò Vấp,Thủ Đức, Hóc Môn, Củ Chi, Bình Chánh, Nhà Bè,
                    Cần Giờ).
                  </li>
                </ul>
              </h2>
            </div>
            <>
              <p>
                {" "}
                <img
                  src="/2024_in.png"
                  alt="Dịch vụ viễn thông"
                  width={932}
                  height={1920}
                  className="w-full"
                ></img>
              </p>
            </>

            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6 sm:pt-2 md:pt-4 lg:pt-6">
                bảng giá internet - nội thành
              </span>
            </h2>
            <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
              <h2 className="text-sm md:text-lg lg:text-xl ">
                <ul className="md:p-4 border-main font-family:Arial gap-2 text-justify">
                  <li>
                    &emsp; Nội thành bao gồm các quận (1, 3, 4, 7, 10, 11,Tân
                    Bình, Tân Phú, Bình Thạnh, Phú Nhuận).
                  </li>
                </ul>
              </h2>
            </div>
            <>
              <p>
                {" "}
                <img
                  src="/2024_in_noi.png"
                  alt="Dịch vụ viễn thông"
                  width={932}
                  height={1920}
                  className="w-full"
                ></img>
              </p>
            </>

            <div className="grid  md:grid-cols-3 grid-cols-2 mb-8 gap-2 md:gap-4 lg:gap-10"></div>
            <div className="grid  md:grid-cols-3 grid-cols-3 mb-8 gap-1 md:gap-1 lg:gap-1 justify-center">
              <Link href="tel:0815117116" className=""></Link>
              <Link
                href="tel:0815117116"
                className="bg-main hover:bg-[#DC2323] hover:text-white text-center transition-all py-2 px-4 rounded-3xl text-white uppercase bg-[#1E73BE] text-xs md:text-sm lg:text-lg"
              >
                Liên hệ ngay - 0815117116
              </Link>
              <Link href="tel:0815117116" className=""></Link>
            </div>
          </div>

          <div className="rounded-xl p-0 md:p-0 lg:pb-6">
            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6 ">
                bảng giá internet có thiết bị mesh - ngoại thành
              </span>
            </h2>
            <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
              <h2 className="text-sm md:text-lg lg:text-xl ">
                <ul className="md:p-4 border-main font-family:Arial gap-2 text-justify">
                  <li>
                    &emsp; Ngoại thành bao gồm các quận (2, 5, 6, 8, 9, 12, Bình
                    Tân, Gò Vấp,Thủ Đức, Hóc Môn, Củ Chi, Bình Chánh, Nhà Bè,
                    Cần Giờ).
                  </li>
                </ul>
              </h2>
            </div>
            <>
              <p>
                {" "}
                <img
                  src="/2024_mesh_ngoai.png"
                  alt="Dịch vụ viễn thông"
                  width={932}
                  height={1920}
                  className="w-full"
                ></img>
              </p>
            </>

            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6 sm:pt-2 md:pt-4 lg:pt-6">
                bảng giá internet có thiết bị mesh - nội thành
              </span>
            </h2>
            <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
              <h2 className="text-sm md:text-lg lg:text-xl ">
                <ul className="md:p-4 border-main font-family:Arial gap-2 text-justify">
                  <li>
                    &emsp; Nội thành bao gồm các quận (1, 3, 4, 7, 10, 11,Tân
                    Bình, Tân Phú, Bình Thạnh, Phú Nhuận).
                  </li>
                </ul>
              </h2>
            </div>
            <>
              <p>
                {" "}
                <img
                  src="/2024_mesh.png"
                  alt="Dịch vụ viễn thông"
                  width={932}
                  height={1920}
                  className="w-full"
                ></img>
              </p>
            </>

            <div className="grid  md:grid-cols-3 grid-cols-2 mb-8 gap-2 md:gap-4 lg:gap-10"></div>
            <div className="grid  md:grid-cols-3 grid-cols-3 mb-8 gap-1 md:gap-1 lg:gap-1 justify-center">
              <Link href="tel:0815117116" className=""></Link>
              <Link
                href="tel:0815117116"
                className="bg-main hover:bg-[#DC2323] hover:text-white text-center transition-all py-2 px-4 rounded-3xl text-white uppercase bg-[#1E73BE] text-xs md:text-sm lg:text-lg"
              >
                Liên hệ ngay - 0815117116
              </Link>
              <Link href="tel:0815117116" className=""></Link>
            </div>
            <h2 className="uppercase mb-1 font-bold text-left text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
                Thủ tục đăng ký internet VNPT Tp. Hồ Chí Minh
              </span>
            </h2>
            <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
              <h2 className="text-sm md:text-lg lg:text-xl ">
                <ul className=" md:p-4 border-main font-family:Arial gap-2 text-justify">
                  <li>- Bản sao Căn Cước Công Dân 2 mặt</li>
                  <li>- Trả trước 6 tháng</li>
                </ul>
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default index;
