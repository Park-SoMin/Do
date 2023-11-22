// 페이스북 & 인스타그램 아이콘

import React from "react";
import "./Nav.css";
import Facebook from "./img/Facebook.png";
import Instagram from "./img/Instagram.png";

const Nav = () => {
  return (
    <form className="N_Form">
      {/* 페이스북 아이콘 */}
      <div>
        <img
          src={Facebook}
          alt="Icon"
          onClick={() =>
            window.open("https://www.facebook.com/walid.jahin?mibextid=ZbWKwL")
          }
          className="N_Faceicon"
        />
      </div>
      {/* 인스타그램 아이콘 */}
      <div>
        <img
          src={Instagram}
          alt="Icon"
          onClick={() => window.open("https://www.instagram.com/walidjahin/")}
          className="N_Istaicon"
        />
      </div>
    </form>
  );
};

export default Nav;
