import { useEffect, useState } from "react";
export default function LinkZalo() {
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
  return link;
}
