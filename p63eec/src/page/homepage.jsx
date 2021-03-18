import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import ControlledCarousel from "../components/carousel";

const EVENTS = {
  IMAGE_AND_TEXT: "row with an image and a text",
  TEXT_AND_IMAGE: "row with a text and an image",
  TEXT_AND_CAROUSEL: "row with text and carousel",
};

function RicercaScientifica() {
  return (
    <>
      <a href="#">
        <p>
          <b>
            Aiutaci a sostenere la ricerca scientifica a favore dei bambini con
            sindrome E.E.C. e con una malattia rara genetica.
          </b>
        </p>
        <p> Puoi farlo anche con il tuo 5xmille</p>
      </a>
      <img
        className="dona"
        src={process.env.PUBLIC_URL + "/assets/dona.png"}
        alt="dona"
      />
    </>
  );
}

function CinqueXMille() {
  return (
    <>
      <h3>
        <b>5 x 1000</b>
        <br /> CF 92219930283
      </h3>
      <br /> <p>La tua firma può cambiare la vita a molti bambini!</p>{" "}
      <p>
        {" "}
        <b>AIUTACI ANCHE TU.</b> <br />
        Dona il tuo 5 x 1000. <br />
        Grazie.
      </p>
      <img
        className="dona"
        src={process.env.PUBLIC_URL + "/assets/dona.png"}
        alt="dona"
      />
    </>
  );
}

function Agenda() {
  return (
    <>
      <h3>Agenda</h3>
      <p>
        "per info: "<a href="#">segreteria-international@sindrome-eec.it</a>
        Tel:+393333063353 <br /> <b>26 Novembre 2020</b> Ricerca e confronti
        Webinar (link per iscrizione a breve)
        <br /> <b>Aprile 2021</b> Meeting internazionale Ricerca e Confronti
        (dettagli a breve) <br />
        <a href="#">Tutti gli eventi Passati</a>
      </p>
      <img
        className="CSMR"
        src={process.env.PUBLIC_URL + "/assets/CSMR.jpeg"}
        alt="CSMR"
      />
    </>
  );
}

function AltriEventi() {
  return (
    <Col>
      <h3> Altri Eventi</h3>
      <p>
        <b>Mira que ritmo e l'orchestrina</b> , "Universo della comunicazione
        musicale accessibile e sostenibile, format innovativo di riferimento
        nella fragilità sociale". Info a{" "}
        <a href="#">https://www.facebook.com/miraqueritmo</a>
        <br></br>
        <b>Terzo tempo in azione</b> è il progetto dedicato alle persone over 65
        della provincia di Padova e Rovigo, Progetto sostenuto dal bando
        "invecchiamento attivo" fondaziona Cariparo 2018, Info a <br />
        <a href="#">
          https://www.facebook.com/Terzo-Tempo-in-Azione-257911325117561
        </a>
      </p>
    </Col>
  );
}

function Sostienici() {
  return (
    <Row>
      <Col md={4}>
        <img
          className="giulia_bw"
          src={process.env.PUBLIC_URL + "/assets/giulia_bw.jpg"}
          alt="giulia_bw"
        />
      </Col>
      <Col md={8}>
        <h3>Sostienici, 5 x mille</h3>
        <p>
          Puoi inserire il <b>CF 92219930283</b> e la tua firma nella
          dichiarazione dei redditi.
          <br /> Alternativamente puoi fare un bonifico sul nostro conto. <br />{" "}
          <b>IT 11Z 08590 62890 000081022765</b> <br /> Banca Del Centroveneto
          Credito Cooperativo S.C. - Longare, agenzia Caselle di Selvazzano
        </p>
        <img
          className="dona"
          src={process.env.PUBLIC_URL + "/assets/dona.png"}
          alt="dona"
        />
      </Col>
    </Row>
  );
}

function sectionRow(data) {
  const { contentTipe, immagine, contenuto } = data;
  switch (contentTipe) {
    case EVENTS.IMAGE_AND_TEXT:
      return (
        <Row className="row">
          <Col md={6}>
            <img
              className="homeImg"
              src={process.env.PUBLIC_URL + immagine.url}
              alt={immagine.nome}
            />
          </Col>
          <Col md={6} className={contenuto.class_nome}>
            {contenuto.sezione}
          </Col>
        </Row>
      );

    case EVENTS.TEXT_AND_IMAGE:
      return (
        <Row className="row">
          <Col md={6} className={contenuto.class_nome}>
            {contenuto.sezione}
          </Col>
          <Col md={6}>
            <img
              className="homeImg"
              src={process.env.PUBLIC_URL + immagine.url}
              alt={immagine.nome}
            />
          </Col>
        </Row>
      );
    case EVENTS.TEXT_AND_CAROUSEL:
      return (
        <Row className="row">
          <Col md={6} className={contenuto.class_nome}>
            {contenuto.sezione}
          </Col>
          <Col md={6}>
            <ControlledCarousel />
          </Col>
        </Row>
      );

    default:
      return null;
  }
}

function Homepage() {
  const section = [
    {
      immagine: {
        nome: "ricerca e confronti 2020",
        url: "assets/RC2020.jpeg",
      },
      contenuto: {
        class_nome: "ricercaScientifica",
        sezione: <RicercaScientifica />,
      },
      contentTipe: EVENTS.IMAGE_AND_TEXT,
    },

    {
      immagine: {
        nome: "marathon 2020",
        url: "assets/marathon-2020.png",
      },
      contenuto: {
        class_nome: "cinqueXMille",
        sezione: <CinqueXMille />,
      },
      contentTipe: EVENTS.TEXT_AND_IMAGE,
    },
    {
      immagine: {
        nome: "ricerca e confronti 2021",
        url: "assets/RC2021.jpeg",
      },
      contenuto: {
        class_nome: "agenda",
        sezione: <Agenda />,
      },
      contentTipe: EVENTS.TEXT_AND_IMAGE,
    },

    {
      immagine: {
        nome: "azione",
        url: "assets/azione.jpeg",
      },
      contenuto: {
        class_nome: "altriEventi",
        sezione: <AltriEventi />,
      },
      contentTipe: EVENTS.TEXT_AND_IMAGE,
    },
    {
      immagine: {
        nome: "ricerca e confronti 2020",
        url: "assets/RC2020.jpeg",
      },
      contenuto: {
        class_nome: "sostienici",
        sezione: <Sostienici />,
      },
      contentTipe: EVENTS.TEXT_AND_CAROUSEL,
    },
  ];

  return (
    <Container>
      {section.map(sectionRow)}
      <Row className="row">
        <h3>Dicono di noi</h3>
        <Row>
          <Col>
            <img
              className="diconoDiNoiImg"
              src={process.env.PUBLIC_URL + "assets/wild.jpeg"}
              alt="wild"
            />
          </Col>
          <Col>
            <img
              className="diconoDiNoiImg"
              src={process.env.PUBLIC_URL + "assets/r4l.png"}
              alt="r4l"
            />
          </Col>
          <Col>
            <img
              className="diconoDiNoiImg"
              src={process.env.PUBLIC_URL + "assets/rareducando2.jpeg"}
              alt="rareducando2.jpeg"
            />
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Homepage;
