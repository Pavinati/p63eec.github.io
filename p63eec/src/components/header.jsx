import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  return (
    <Container  >
      <Row className="header">
        <Col md={3} >
        <img className="w-100" src={`${process.env.PUBLIC_URL}/assets/Logo.png`} />
        </Col>
        <Col md={9}>
        <img className="w-100" src={`${process.env.PUBLIC_URL}/assets/P63_title.png`} />
        </Col>
      </Row>
    </Container>
  );
}
export default Header;
