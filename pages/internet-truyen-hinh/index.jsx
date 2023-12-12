import Layout from "@/layouts/Layout";
import React from "react";
import Internet from "@/utils/internet";
import Link from "next/link";
import LinkZalo from "@/utils/zalo";
function index() {
  const link = LinkZalo();

  return (
    <div>
      <Layout>
        <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
          <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className="border-b-2 inline-block pb-2 md:pb-4 lg:pb-6 border-main sm:pr-2 md:pr-4 lg:pr-6">
              Internet & Truyền hình
            </span>
          </h2>
          <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
            <h2 className="text-sm md:text-lg lg:text-xl ">
              <ul className=" py-2 md:py-4 md:p-4 border-main font-family:Arial gap-2 text-justify">
                <li>
                  &emsp; MyTV là dịch vụ truyền hình của chúng tôi, cung cấp hơn
                  180 kênh giải trí, tin tức, thể thao, phim ảnh và nhiều nội
                  dung đa dạng. Người dùng có thể xem trực tiếp, truy cập nội
                  dung theo yêu cầu và sử dụng các tính năng tiện ích như ghi
                  lại, dừng lại, tua nhanh. Với chất lượng hình ảnh và âm thanh
                  cao cấp, MyTV mang đến trải nghiệm giải trí tuyệt vời cho
                  người dùng.Chính sách giá dịch vụ internet của Thành phố Hồ
                  Chí Minh được phân chia theo 2 khu vực: Nội thành (Quận 1, 3,
                  4, 7, 10, 11,Tân Bình, Tân Phú, Bình Thạnh, Phú Nhuận) & Ngoại
                  thành (Quận 2, 5, 6, 8, 9, 12,Bình Tân, Gò Vấp,Thủ Đức, Hóc
                  Môn, Củ Chi, Bình Chánh, Nhà Bè, Cần Giờ). Dưới đây là bảng
                  giá mới nhất:
                </li>
              </ul>
            </h2>
          </div>
          <div className="rounded-xl p-0 md:p-0 lg:pb-6">
            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block pb-2 md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
                bảng giá internet và truyền hình
              </span>
            </h2>
            <>
              <p>
                {" "}
                <img
                  src="/gc-inmytv.png"
                  alt="Dịch vụ viễn thông"
                  width={932}
                  height={1920}
                  className="w-full"
                ></img>
              </p>
            </>

            <div className="grid  md:grid-cols-3 grid-cols-2 mb-8 gap-2 md:gap-4 lg:gap-10"></div>
            <div className="grid  md:grid-cols-3 grid-cols-3 mb-8 gap-1 md:gap-1 lg:gap-1 justify-center">
              <Link href={link} target="_blank" className=""></Link>
              <Link
                href={link}
                target="_blank"
                className="bg-main hover:bg-[#DC2323] hover:text-white text-center transition-all py-2 px-4 rounded-3xl text-white uppercase bg-[#1E73BE] text-xs md:text-sm lg:text-lg"
              >
                Liên hệ ngay
              </Link>
              <Link href={link} target="_blank" className=""></Link>
            </div>
          </div>

          <div className="rounded-xl p-0 md:p-0 lg:pb-6">
            <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
              <span className=" inline-block pb-2 md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
                bảng giá internet và truyền hình + mesh
              </span>
            </h2>
            <>
              <p>
                {" "}
                <img
                  src="/gc-mytvmesh.png"
                  alt="Dịch vụ viễn thông"
                  width={932}
                  height={1920}
                  className="w-full"
                ></img>
              </p>
            </>

            <div className="grid  md:grid-cols-3 grid-cols-2 mb-8 gap-2 md:gap-4 lg:gap-10"></div>
            <div className="grid  md:grid-cols-3 grid-cols-3 mb-8 gap-1 md:gap-1 lg:gap-1 justify-center">
              <Link href={link} target="_blank" className=""></Link>
              <Link
                href={link}
                target="_blank"
                className="bg-main hover:bg-[#DC2323] hover:text-white text-center transition-all py-2 px-4 rounded-3xl text-white uppercase bg-[#1E73BE] text-xs md:text-sm lg:text-lg"
              >
                Liên hệ ngay
              </Link>
              <Link href={link} target="_blank" className=""></Link>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default index;
