import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Footerzeo from "./Footerzeo";

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <Footerzeo />
    </div>
  );
}

export default Layout;
