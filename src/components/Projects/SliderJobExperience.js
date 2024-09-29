import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const slideMain = [
  {
    id: 1,
    title: "Mini Site for Educational Institution",
    technologies:
      "Angular, TypeScript, jQuery, Bootstrap, Tailwind CSS, Slick Carousel",
    description:
      "This interactive web platform is a dedicated space to promote school events, providing detailed and up-to-date information.",
    repository: "https://github.com/CindyMendoza/newton-mun",
    demoLink: "https://cindymendoza.github.io/newton-mun/",
  },
  {
    id: 2,
    title: "Informative Portfolio of a Visual Creator",
    technologies: "React, React Bootstrap, Font Awesome, Vite",
    description:
      "This project is a visual creator portfolio showcasing her work, including photos, videos, and animations.",
    repository: "https://github.com/CindyMendoza/ntamariz.com",
    demoLink: "https://cindymendoza.github.io/ntamariz.com/",
  },
];

const MainCarousel = () => {
  const mainSettings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 425,
      //   settings: {
      //     slidesToShow: 1,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //   },
      // },
    ],
  };

  return (
    <div>
      {/* Carrusel Principal */}
      <Slider {...mainSettings} className="main-carousel">
        {slideMain.map((slide) => (
          <div key={slide.id}>
            <h4>{slide.title}</h4>
            <p>
              <b>Technologies:</b> {slide.technologies}
            </p>
            <p>
              <b>Description:</b> {slide.description}
            </p>
            <a
              href={slide.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
            |
            <a href={slide.demoLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainCarousel;
