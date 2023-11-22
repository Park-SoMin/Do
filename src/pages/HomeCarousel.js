import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./HomeCarousel.css";

const HomeCarousel = ({ imageData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div className="HC_body">
      <Carousel
        showArrows={false}
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        style={{ border: "10px solid blue", height: "100%" }} // height 값을 100%로 변경
      >
        {/* imageData 배열 내 각 이미지에 대해 반복 수행 */}
        {imageData.map((image) => (
          <div key={image.alt} className="HC_container">
            <img src={image.src} alt={image.alt} className="HC_img" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
