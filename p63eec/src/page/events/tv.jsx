import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function Tv() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Video Gallery</h3>
          <p>
            Nel canale di Giulia è possibile reperire testimonianze importanti,
            compreso il servizio di WILD OLTRENATURA e parecchi video-blog.
          </p>
        </Col>
        <Col>
          <a href="#">
            <Image src={process.env.PUBLIC_URL + "/assets/wild.jpeg"} fluid />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Tv;
