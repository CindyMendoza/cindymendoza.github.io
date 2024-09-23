import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slideMain = [
  { id: 1, title: "Slide 1" },
  { id: 2, title: "Slide 2" },
  { id: 3, title: "Slide 3" },
];
const slideNav = [
  { id: 1, title: "Slide 1" },
  { id: 2, title: "Slide 2" },
  { id: 3, title: "Slide 3" },
];
const MainCarousel = () => {
  const mainSettings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const navSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".main-carousel",
    focusOnSelect: false,
  };

  return (
    <div>
      {/* Carrusel Principal */}
      <Slider {...mainSettings} className="main-carousel">
        {slideMain.map((slide) => (
          <div key={slide.id}>
            <h3>{slide.title}</h3>
          </div>
        ))}
      </Slider>

      {/* Navegación */}
      <Slider {...navSettings} className="nav-carousel">
        {slideNav.map((slide) => (
          <div key={slide.id}>
            <h3>{slide.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainCarousel;
