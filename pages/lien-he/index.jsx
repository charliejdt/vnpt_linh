import Layout from "@/layouts/Layout";
import React from "react";

function LienHe() {
  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <h2 className="text-2xl uppercase text-text font-semibold text-gray-900">
            Liên hệ
          </h2>

          <div className="flex flex-col gap-5 pt-10">
            <div>
              <span className="block text-lg font-bold">
                Website bán hàng của NVKD:{" "}
              </span>
              <span className="text-text">Phạm Quang Linh</span>
            </div>
            <div>
              <span className="block text-lg font-bold">Phòng bán hàng:</span>
              <span className="text-text">Khu vực Sài Gòn</span>
            </div>
            <div>
              <span className="block text-lg font-bold">Địa chỉ:</span>
              <span className="text-text">
                121 Pasteur, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh
              </span>
            </div>
            <div>
              <span className="block text-lg font-bold">Liên hệ: </span>
              <span className="text-text">
                Hotline: 0815117116 <br /> Gmail: linhpq.hcm@vnpt.com
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.5768509429413!2d106.69466134106841!3d10.781115741759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f12d09ee48d%3A0xf3243bfbfe32bca4!2svnpt%20tphcm!5e0!3m2!1svi!2s!4v1699847114427!5m2!1svi!2ss"
              width="full"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default LienHe;
