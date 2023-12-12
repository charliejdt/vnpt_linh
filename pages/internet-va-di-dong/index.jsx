import Layout from "@/layouts/Layout";
import InternetDiDong from "@/utils/indidong";
import InternetDiDong1 from "@/utils/indidong copy";
import InternetDiDong2 from "@/utils/indidong_2";
import Link from "next/link";
import React from "react";
import LinkZalo from "@/utils/zalo";

function Internet() {
  const link = LinkZalo();
  return (
    <Layout>
      <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
        <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
          <span className="border-b-2 inline-block pb-2 md:pb-4 lg:pb-6 border-main sm:pr-2 md:pr-4 lg:pr-6">
            Internet Combo
          </span>
        </h2>
        <div className="rounded-xl text-right p-0 md:p-0 lg:p-0">
          <h2 className="text-sm md:text-lg lg:text-xl ">
            <ul className=" py-2 md:py-4 md:p-4 border-main font-family:Arial gap-2 text-justify">
              <li>
                &emsp; Home Sành là gói cước internet và điện thoại của chúng
                tôi, không bao gồm dịch vụ truyền hình. Gói này cung cấp tốc độ
                internet cao và dịch vụ điện thoại đáng tin cậy để đáp ứng nhu
                cầu liên lạc và truy cập 4G của gia đình.
              </li>
            </ul>
          </h2>
        </div>
        <div className="rounded-xl p-0 md:p-0 lg:pb-6">
          <h2 className="uppercase mb-1 font-bold text-center text-sm md:text-xl lg:text-2xl text-gray-900">
            <span className=" inline-block pb-2 md:pb-2 lg:pb-2 border-main sm:pr-2 md:pr-4 lg:pr-6">
              Bảng giá internet Combo (Di động trả sau)
            </span>
          </h2>
          <>
            <p>
              {" "}
              <img
                src="/gc-sanh.png"
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
              bảng giá internet combo (di động trả trước)
            </span>
          </h2>
          <>
            <p>
              {" "}
              <img
                src="/gc-cb.png"
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
  );
}

export default Internet;
