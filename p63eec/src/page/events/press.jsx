import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function section(data) {
  return (
    <Row>
      <Col xs={3}>
        <b>{data.evento}</b>
        {data.date}
      </Col>
      <Col xs={9}>{data.link}</Col>
    </Row>
  );
}


function Press() {
  const pressEv = [
    {
      evento: "Milano, research 4 life",
      link: (
        <p>
          <a href="#">link all'articolo</a>
        </p>
      ),
    },
    {
      evento: "Provincia di Padova",
      link: (
        <p>
          <a href="#">
            "Fashion Day and MORE.." conclude l' "Estate sotto le stelle" a
            Selvazzano
          </a>
          , scarica il <a href="#">volantino</a>.
        </p>
      ),
    },
    {
      evento: "IL REFERENDUM",
      date: " (21/09/2014)",
      link: (
        <a href="#">
          Giulia Volpato: Miss Italia come sfida al concetto di normalità.
        </a>
      ),
    },
    {
      evento: "PADOVAOGGI",
      date: " (08/08/2014)",
      link:  (
        <a href="#">
          Giulia Volpato, dottoressa con l'Eec "Mi hanno fatto un papiro nero".
        </a>
      ),
    },
  ];
  return (
    <Container>
      <Row>
        <h3>Stampa</h3>
      </Row>
      {pressEv.map(section)}
    </Container>
  );
}

export default Press;
