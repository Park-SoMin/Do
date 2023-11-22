// Header의 카테고리

import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

// 메뉴 카테고리별 내용 표시
const MenuItem = ({ children, to, isActive }) => (
  <Link to={to} className={`H_menu-item ${isActive ? "active" : ""}`}>
    {children}
  </Link>
);

const Head = () => {
  const location = useLocation();

  return (
    <body className="H_body">
      <form className="H_Form">
        <span className="H_Left">
          {/* ■ */}
          <span className="H_Sqare">■</span>
          &nbsp;
          {/* Walid Jahin / Artist */}
          <span className="H_Name">Walid Jahin</span>
          <span className="H_Job">/&nbsp; Artist</span>
        </span>
        <span className="H_Right">
          {/* 메뉴 카테고리 */}
          <span className="H_Menu">
            <MenuItem to={"/"} isActive={location.pathname === "/"}>
              Home
            </MenuItem>
            <span className="H_Bar"> | </span>
            <MenuItem to={"/artist"} isActive={location.pathname === "/artist"}>
              Artist
            </MenuItem>
            <span className="H_Bar"> | </span>
            <MenuItem
              to={"/artwork"}
              isActive={location.pathname === "/artwork"}
            >
              Art Work
            </MenuItem>
            <span className="H_Bar"> | </span>
            <MenuItem to={"/mypage"} isActive={location.pathname === "/mypage"}>
              Mypage
            </MenuItem>
          </span>
          {/* 언어 변경 */}
          <span className="H_Lan">
            <span className="H_Eng">Eng</span>
            <span className="H_Arab">Arab</span>
          </span>
        </span>
      </form>
    </body>
  );
};

export default Head;
