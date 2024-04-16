import LinkZalo from "@/utils/zalo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Footer() {
  // const link = LinkZalo();

  return (
    <div>
      <div className="bg-gray-500 p-0 md:p-1 text-white bg-[#0165b3]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-col-3 grid-cols-1">
            <div>
              <ul className="flex flex-col gap-2 text-sm md:text-lg ">
                <li>
                  Copyright © 2024 <strong>VNPT TP HỒ CHÍ MINH</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
