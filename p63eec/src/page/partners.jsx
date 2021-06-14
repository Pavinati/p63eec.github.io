import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function immagine(data) {
  return (
    <Col>
    <img
      className=" w-100"
      src={process.env.PUBLIC_URL + data.url}
      alt={data.name}
    />
    </Col>
  );
}

function Partners() {
  const partnersImg = [
    {
      name: "Fashion and more logo",
      url: "/assets/partners/fashionandmore.jpg",
    },
    {
      name: "Research for Life logo",
      url: "/assets/partners/r4l.png",
    },
    {
      name: "Mioni Royal san logo",
      url: "/assets/partners/mioni_royal_san.jpg",
    },
    {
      name: "Jonny Gallo logo",
      url: "/assets/partners/johnny_gallo.png",
    },
    {
      name: "Asi logo",
      url: "/assets/partners/asi.png",
    },
  ];

  return (
    <>
      <h3>Partners</h3>
      <Container>
        <Row>{partnersImg.map(immagine)}</Row>
      </Container>
    </>
  );
}

export default Partners;
