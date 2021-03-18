import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container className="carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="carouselImg"
            src={process.env.PUBLIC_URL + "/assets/carousel/1.jpeg"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src={process.env.PUBLIC_URL + "/assets/carousel/2.jpeg"}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src={process.env.PUBLIC_URL + "/assets/carousel/3.jpeg"}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src={process.env.PUBLIC_URL + "/assets/carousel/4.jpeg"}
            alt="Forth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src={process.env.PUBLIC_URL + "/assets/carousel/5.jpeg"}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carouselImg"
            src={process.env.PUBLIC_URL + "/assets/carousel/6.jpeg"}
            alt="Sixth slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="carouselImg"
            src={process.env.PUBLIC_URL + "/assets/carousel/7.jpeg"}
            alt="Eighth slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ControlledCarousel;
