// HomePage

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imageData from "./Data";
import "./Test.css";
import Header from "./components/Header";
import HomeCarousel from "./HomeCarousel";
import Nav from "./components/Nav";
import Top from "./components/Top";
import News from "./News";
import Footer from "./components/Footer";

const Test = () => {
  return (
    <div>
      <div className="T_header">
        <Header />
      </div>
      {/* 이미지 슬라이드 */}
      <div className="T_carousel">
        <HomeCarousel imageData={imageData} />
      </div>
      <div className="T_news">
        <News />
      </div>
      <Nav />
      <Top />
      <div className="T_footer">
        <Footer />
      </div>
    </div>
  );
};

export default Test;
