import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function immagine(data) {
  return (
    <img  className="p-2 w-50"
      src={process.env.PUBLIC_URL + data.url}
      alt={data.name}
    />
  );
}

function Gallery() {
  const imageBanca7maggio = [
    {
      name: "banca_7_maggio_immagine_1",
      url: "/assets/eventsImg/1_bank.jpg",
    },
    {
      name: "banca_7_maggio_immagine_2",
      url: "/assets/eventsImg/2_bank.jpg",
    },
    {
      name: "banca_7_maggio_immagine_3",
      url: "/assets/eventsImg/3_bank.jpg",
    },
    {
      name: "banca_7_maggio_immagine_4",
      url: "/assets/eventsImg/4_bank.jpg",
    },
    {
      name: "banca_7_maggio_immagine_5",
      url: "/assets/eventsImg/5_bank.jpg",
    },
  ];
  return (
    <Container>
      <h3>7 maggio, fondazione banca degli occhi</h3>
      <p>
        Dott Ponzin, Prof Rama, Prof Galan, Dott Di Iorio e Staff. Nasce la
        collaborzione tra i grandi e p63 EEC Sindrome, le nuove frontiere!
      </p>
      <Row>{imageBanca7maggio.map(immagine)}</Row>
    </Container>
  );
}

export default Gallery;
