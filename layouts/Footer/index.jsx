import Image from "next/image";
import Link from "next/link";

function Footer() {
  // 1
  <script>
   var zalo_acc = {
    "0815117116" : "9cre2ojhk1b2",
};
    function devvnCheckLinkAvailability(link, successCallback, errorCallback) {
        var hiddenIframe = document.querySelector("#hiddenIframe");
        if (!hiddenIframe) {
            hiddenIframe = document.createElement("iframe");
            hiddenIframe.id = "hiddenIframe";
            hiddenIframe.style.display = "none";
            document.body.appendChild(hiddenIframe);
        }
        var timeout = setTimeout(function () {
            errorCallback("Link is not supported.");
            window.removeEventListener("blur", handleBlur);
        }, 2500);
        var result = {};
        function handleMouseMove(event) {
            if (!result.x) {
                result = {
                    x: event.clientX,
                    y: event.clientY,
                };
            }
        }
        function handleBlur() {
            clearTimeout(timeout);
            window.addEventListener("mousemove", handleMouseMove);
        }
        window.addEventListener("blur", handleBlur);
        window.addEventListener(
            "focus",
            function onFocus() {
                setTimeout(function () {
                    if (document.hasFocus()) {
                        successCallback(function (pos) {
                            if (!pos.x) {
                                return true;
                            }
                            var screenWidth =
                                window.innerWidth ||
                                document.documentElement.clientWidth ||
                                document.body.clientWidth;
                            var alertWidth = 300;
                            var alertHeight = 100;
                            var isXInRange =
                                pos.x - 100 < 0.5 * (screenWidth + alertWidth) &&
                                pos.x + 100 > 0.5 * (screenWidth + alertWidth);
                            var isYInRange =
                                pos.y - 40 < alertHeight && pos.y + 40 > alertHeight;
                            return isXInRange && isYInRange
                                ? "Link can be opened."
                                : "Link is not supported.";
                        }(result));
                    } else {
                        successCallback("Link can be opened.");
                    }
                    window.removeEventListener("focus", onFocus);
                    window.removeEventListener("blur", handleBlur);
                    window.removeEventListener("mousemove", handleMouseMove);
                }, 500);
            },
            { once: true }
        );
        hiddenIframe.contentWindow.location.href = link;
    }
    Object.keys(zalo_acc).map(function(sdt, index) {
        let qrcode = zalo_acc[sdt];
        const zaloLinks = document.querySelectorAll('a[href*="zalo.me/'+sdt+'"]');
        zaloLinks.forEach((zalo) => {
            zalo.addEventListener("click", (event) => {
                event.preventDefault();
                const userAgent = navigator.userAgent.toLowerCase();
                const isIOS = /iphone|ipad|ipod/.test(userAgent);
                const isAndroid = /android/.test(userAgent);
                let redirectURL = null;
                if (isIOS) {
                    redirectURL = 'zalo://qr/p/'+qrcode;
                    window.location.href = redirectURL;
                } else if (isAndroid) {
                    redirectURL = 'zalo://zaloapp.com/qr/p/'+qrcode;
                    window.location.href = redirectURL;
                } else {
                    redirectURL = 'zalo://conversation?phone='+sdt;
                    zalo.classList.add("zalo_loading");
                    devvnCheckLinkAvailability(
                        redirectURL,
                        function (result) {
                            zalo.classList.remove("zalo_loading");
                        },
                        function (error) {
                            zalo.classList.remove("zalo_loading");
                            redirectURL = 'https://chat.zalo.me/?phone='+sdt;
                            window.location.href = redirectURL;
                        }
                    );
                }
            });
        });
    });
    //Thêm css vào site để lúc ấn trên pc trong lúc chờ check chuyển hướng sẽ không ấn vào thẻ a đó được nữa
    var styleElement = document.createElement("style");
    var cssCode = ".zalo_loading { pointer-events: none; }";
    styleElement.innerHTML = cssCode;
    document.head.appendChild(styleElement);
</script>
// 1
  
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
        <Link href="https://zalo.me/0815117116" className="">
          <Image
            className="animate-bounce hover:opacity-70 transtion-all mb-4"
            src="/fb2.png"
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
