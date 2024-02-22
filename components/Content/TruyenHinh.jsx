import Link from "next/link";
import React from "react";

function TruyenHinh() {
  return (
    <div className="container mx-auto pt-4 sm:text-sm md:text-lg ">
      <h2 className="uppercase border-b-2 mb-1 font-bold text-sm md:text-xl lg:text-2xl text-gray-900">
        <span className="border-b-2 inline-block pb-2 md:pb-4 lg:pb-6 border-main sm:pr-2 md:pr-4 lg:pr-6">
          internet truyền hình
        </span>
      </h2>
      <div className="rounded-xl md:shadow-xl text-right p-0 md:p-4 lg:p-10">
        <div className="rounded-xl text-right px-0 md:px-2 lg:px-6">
          <div className="rounded-xl p-0 md:p-0 lg:p-0">
            <>
              <p>
                {" "}
                <img
                  src="/2024_mytv_ngoai.png"
                  alt="Dịch vụ viễn thông"
                  width={932}
                  height={1920}
                  className="w-full"
                ></img>
              </p>
            </>
          </div>
          <div className="pt-2 md:pt-4">
            <Link
              className="d-block px-4 py-2 rounded-lg mt-12 bg-black text-xs md:text-lg text-white hover:bg-[#DC2323] hover:text-white font-style: italic text-decoration-line: underline"
              href="/internet-truyen-hinh"
            >
              Xem thêm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TruyenHinh;
