import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function nominativi(member) {
  return (
    <Row className="border-bottom">
      <Col xs={5} className="text-right small">
        {member.title}
      </Col>
      <Col className="font-weight-bold">{member.completeName}</Col>
    </Row>
  );
}

function Us() {
  const direttivo = [
    {
      title: "Presidente",
      completeName: "Cristina Bolzonella",
    },
    {
      title: "Presidente Onoraria",
      completeName: "Giulia Volpato",
    },
    {
      title: "Segreteria Generale",
      completeName: "Roberta Bresciani",
    },
    {
      title: "Consigliere",
      completeName: "Rachele Volpato",
    },
    {
      title: "Consigliere",
      completeName: "Antonella Morbin",
    },
    {
      title: "Consigliere",
      completeName: "Carla Zancanella",
    },
    {
      title: "Tesoriere",
      completeName: "Claudia Caprioli",
    },
  ];

  const direttivoScientifico = [
    {
      title: "dott.",
      completeName: "Vincenzo Di Iorio",
    },
    {
      title: "prof.",
      completeName: "Paolo Rama",
    },
    {
      title: "prof.",
      completeName: "Antonio Gracco",
    },
    {
      title: "prof.ssa",
      completeName: "Anna Belloni",
    },
    {
      title: "prof.",
      completeName: "Franco Bassetto",
    },
    {
      title: "dott.ssa",
      completeName: "Licia Turolla",
    },
  ];
  const comitatoEtico = [
    {
      title: "dott.ssa",
      completeName: "Giulia Volpato",
    },

    {
      title: "avv.",
      completeName: "Marcello Mugnone",
    },
  ];
  const volontari = [
    {
      title: "responsabile",
      completeName: "dott. Alessandro D’Angelo",
    },
    {
      title: "",
      completeName: "Giovanni Paccagnella",
    },
    {
      title: "",
      completeName: "Ida Serra",
    },
    {
      title: "",
      completeName: "Clara Belpoliti",
    },
    {
      title: "",
      completeName: "Benedetta Alberton",
    },
    {
      title: "",
      completeName: "Chiara Terrentin",
    },
  ];
  const consulenti = [
    {
      title: "avv.",
      completeName: "Federico D’Amelio",
    },
    {
      title: "dott.",
      completeName: "Fabio Fenato",
    },
    {
      title: "dott.",
      completeName: "Michele Tricarico",
    },
  ];
  const direttivoSedeItalia = [
    {
      title: "sede Sicilia",
      completeName: "dott.ssa Paola Cristalli",
    },
    {
      title: "sede Lazio",
      completeName: "dott.ssa Claudia Morelli",
    },
    {
      title: "sede Trentino",
      completeName: "dott.ssa Carla Zancanella",
    },
  ];

  return (
    <Container>
      <Row>
        <h3>Chi Siamo</h3>
      </Row>
      <Row className="mb-3">
        <a href="#">Scarica lo statuto</a>
      </Row>
      <Row className="mb-3">
        <a href="#">Scarica pieghevole</a>
      </Row>
      <Row className="mb-3">
        <a href="#">Come faccio ad accedere ai vostri servizi?</a>
      </Row>

      <Container className="my-5">
        <Row>
          <Col xs={5} className="text-right border-bottom">
            <h4>Direttivo</h4>
          </Col>
          <Col className="border-bottom"></Col>
        </Row>
        {direttivo.map(nominativi)}
        <Row>
          <Col xs={5} className="text-right border-bottom">
            <h4>Direttivo Scientifico</h4>
          </Col>
          <Col className="border-bottom"></Col>
        </Row>
        {direttivoScientifico.map(nominativi)}
        <Row>
          <Col xs={5} className="text-right border-bottom">
            <h4>Comitato Etico</h4>
          </Col>
          <Col className="border-bottom"></Col>
        </Row>
        {comitatoEtico.map(nominativi)}
        <Row>
          <Col xs={5} className="text-right border-bottom">
            <h4>Volontari</h4>
          </Col>
          <Col className="border-bottom"></Col>
        </Row>
        {volontari.map(nominativi)}
        <Row>
          <Col xs={5} className="text-right border-bottom">
            <h4>Consulenti</h4>
          </Col>
          <Col className="border-bottom"></Col>
        </Row>
        {consulenti.map(nominativi)}
        <Row>
          <Col xs={5} className="text-right border-bottom">
            <h4>Direttivo Sede Italia</h4>
          </Col>
          <Col className="border-bottom"></Col>
        </Row>
        {direttivoSedeItalia.map(nominativi)}
      </Container>
    </Container>
  );
}

export default Us;
