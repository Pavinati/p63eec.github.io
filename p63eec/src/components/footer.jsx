import React from "react";
import { Nav, Container, Col, Row } from "react-bootstrap";

function socialColumn(icon) {
  return (
    <Col className="text-center">
      <a href={icon.link_url}>
        <img
          className="social-icon"
          src={process.env.PUBLIC_URL + icon.img_url}
          alt={icon.name}
        />
      </a>
    </Col>
  );
}
function Footer() {
  const socialIcons = [
    {
      name: "Facebook logo",
      img_url: "/assets/facebook_logo.png",
      link_url:
        "https://www.facebook.com/groups/161644340551699/966364693412989/?notif_t=group_activity",
    },
    {
      name: "Twitter logo",
      img_url: "/assets/twitter_logo.png",
      link_url: "#",
    },
    {
      name: "Youtube logo",
      img_url: "/assets/youtube_logo.png",
      link_url: "https://www.youtube.com/user/p63sindromeeec",
    },
  ];

  return (
    <Container className="footer">
      <Nav xs={12}>
        <Container>
          <Row className="justify-content-center">
            © Sindrome EEC International 2020
          </Row>
          <Row className="justify-content-center">
            Webmaster: <a href={"/some/valid/uri"}>Mattia Pavinati</a>
          </Row>
          <Row className="justify-content-center">
            {socialIcons.map(socialColumn)}
          </Row>
          <Row className="justify-content-center">
            <p>.</p>
          </Row>
          <Row className="justify-content-center">
            <a href={"/some/valid/uri"}>Web Counter</a>
          </Row>
        </Container>
      </Nav>
    </Container>
  );
}

export default Footer;
