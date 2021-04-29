import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Contacts() {
  return (
    <Container>
      <h3>I Nostri Servizi</h3>
      <Row>
        <Col md="7">
          <div>
            I nostri servizi sono <b>aperti al pubblico mercoledì-venerdì</b>, dalle
            ore 10.30/13, Centro Civico Baracca Tencarola di Selvazzano Padova,
            gradita la prenotazione: tel: +393333063353, e.mail:
            segreteria-international@sindrome-eec.it. Autobus n°12.
            <br />
            Da maggio 2017 sede Montegrotto Terme- Padova, Via Scavi, palazzo
            Biblioteca. Stazione ferroviaria Montegrotto Terme, Autobus A-M.
            <br /> I nostri sportelli e servizi sono aperti on-line al pubblico
            tutte le mattine dalle ore 10 ore 13. tel: +393333063353, e.mail:
            segreteria-international@sindrome-eec.it
          </div>
        </Col>
        <Col>
        <img className="w-100 h-auto"
          src={process.env.PUBLIC_URL + "/assets/about-us/segreteria.png"}
        />

        </Col>
      </Row>
    </Container>
  );
}

export default Contacts;
