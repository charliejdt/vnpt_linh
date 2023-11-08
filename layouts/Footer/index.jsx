import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Footer() {
  const [link, setLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userAgent = window.navigator.userAgent;

      if (userAgent.includes("Android")) {
        setLink("https://zaloapp.com/qr/p/9cre2ojhk1b2");
      } else if (
        userAgent.includes("iPhone") ||
        userAgent.includes("iPad") ||
        userAgent.includes("iPod")
      ) {
        setLink("zalo://qr/p/9cre2ojhk1b2");
      } else {
        setLink("zalo://conversation?phone=0815117116");
      }
    }
  }, [link]);

  return (
    <div className="bg-main p-0 md:p-6 text-white bg-[#1E73BE]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 md:grid-col-2 grid-cols-1">
          <div>
            <h3 className="uppercase text-lg md:text-2xl mb-1 font-bold">
              Thông tin liên hệ
            </h3>
            <ul className="flex flex-col gap-2 text-sm md:text-lg ">
              <li>Website bán hàng của NVKD: Phạm Quang Linh</li>
              <li>Phòng bán hàng: Khu vực Sài Gòn</li>
              <li>Địa chỉ 69 Ngô Tất Tố, phường 21, quận Bình Thạnh</li>
              <li>Điện thoại liên hệ: 0815117116</li>
              <li>Email: linhpq.hcm@vnpt.com</li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h3 className="uppercase mb-1 font-bold text-lg md:text-2xl">
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
              <li className="hover:translate-x-3 transition-all">
                <Link href="/sim-vinaphone">Sim Vinaphone</Link>
              </li>
            </ul>
          </div>

          <div>
            <Image
              src="/logo-vnpt.jpg"
              alt="logo"
              width={130}
              height={33}
              className="w-auto mt-[15px]"
            />
          </div>
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
