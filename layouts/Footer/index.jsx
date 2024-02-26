import LinkZalo from "@/utils/zalo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Footer() {
  const link = LinkZalo();

  return (
    <div className="bg-main p-0 md:p-2 text-white bg-[#1E73BE]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-col-2 grid-cols-1 pr-6">
          <div>
            <h3 className="uppercase text-lg md:text-2xl mb-1 font-bold">
              Thông tin liên hệ
            </h3>
            <ul className="flex flex-col gap-2 text-sm md:text-lg ">
              <li>Website do nhân viên phụ trách:</li>
              <li>Website bán hàng của NVKD: Phạm Quang Linh</li>
              <li>Phòng bán hàng: Khu vực Sài Gòn</li>
              <li>
                Địa chỉ: 69 Ngô Tất Tố, Phường 21, Quận Bình Thạnh, Thành phố Hồ
                Chí Minh
              </li>
              <li>Điện thoại liên hệ: 0815117116</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="uppercase text-lg md:text-2xl mb-1 font-bold">
              Sản phẩm - Dịch vụ
            </h3>
            <ul className="flex flex-col gap-2 text-sm md:text-lg ">
              <li className="hover:translate-x-3 transition-all">
                <Link href="/internet-ca-nhan">Internet Cá Nhân</Link>
              </li>
              <li className="hover:translate-x-3 transition-all">
                <Link href="/internet-truyen-hinh">Internet & Truyền Hình</Link>
              </li>

              <li className="hover:translate-x-3 transition-all">
                <Link href="/internet-va-di-dong">Internet Combo</Link>
              </li>
              <li className="hover:translate-x-3 transition-all">
                <Link href="/internet-doanh-nghiep">Internet Doanh Nghiệp</Link>
              </li>
              {/* <li className="hover:translate-x-3 transition-all">
                <Link href="/sim-vinaphone">Sim Vinaphone</Link>
              </li> */}
            </ul>
          </div>
          {/* <div>
            <h3 className="uppercase text-lg md:text-2xl mb-1 font-bold">
              Về chúng tôi
            </h3>
            <ul className="flex flex-col gap-2 text-sm md:text-lg ">
              <li>Chi Nhánh Tổng Công Ty Dịch Vụ Viễn Thông</li>
              <li>
                Giấy phép kinh doanh số: 0106869738-005 do Sở KHĐT cấp ngày
                21/07/2015
              </li>
              <li>
                Địa chỉ: 121 Pasteur, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ
                Chí Minh
              </li>
              <li className="hover:translate-x-3 transition-all">
                <Link href="/chinhsachbaomat">Chính sách bảo mật</Link>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <Image
              src="/logo-vnpt.jpg"
              alt="logo"
              width={130}
              height={33}
              className="w-auto mt-[15px]"
            />
          </div> */}
        </div>
      </div>

      <div className="fixed bottom-12 right-10 z-50">
        <Link href={link} className="">
          <Image
            className="animate-bounce hover:opacity-70 transtion-all mb-4"
            src="/zl.png"
            width={44}
            height={44}
            alt=""
          />
        </Link>
        <Link href="tel:0815117116" className="">
          <Image
            className="hover:opacity-70 transtion-all"
            src="/telephone.png"
            width={44}
            height={44}
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
