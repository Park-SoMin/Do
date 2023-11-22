// 문의 정보

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <body className="F_body">
      <form className="F_Form">
        <div className="F_Title">Context Us</div>
        <div className="F_Content">
          <span>Name)</span>
          <span>Walid Jahin</span>
          <span>Tel)</span>
          <span>010-0000-0000</span>
          <span>E-mail)</span>
          <span>010-0000-0000</span>
        </div>
        <p className="F_Text">
          The copyright of the artworks and contents on this site belongs to the
          artists and is protected under copyright law.
          <br />
          Reproduction, modification, or copying of any part or the whole
          without the artist's permission is strictly prohibited.
          <br />
          This includes sharing the artwork on personal websites, blogs, or any
          other platforms, not just for commercial purposes.
        </p>
      </form>
    </body>
  );
};

export default Footer;
