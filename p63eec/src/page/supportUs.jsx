import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function ThisChristmas() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Questo Natale</h3>
          <p>
            aiutaci a sostenere le cure e l'inclusione dei bambini con una
            malattia rara.
          </p>
          <a href="#">
            <img
              className="p-2 mb-2 dona "
              src={process.env.PUBLIC_URL + "/assets/dona.png"}
              alt="dona"
            />
          </a>
          <p>
            Supportaci acquistando i prodotti sotto elencati scrivendo una email
            a <a href="#">segreteria-international@sindrome-eec.it</a>.
          </p>
          <Row>
            <Col>
              <img
                className=" w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/support_us_page/Oregon.jpg"
                }
                alt="Oregon"
              />
            </Col>
            <Col>
              <img
                className=" w-100"
                src={
                  process.env.PUBLIC_URL + "/assets/support_us_page/Niuko.jpg"
                }
                alt="Niuko"
              />
            </Col>
          </Row>
        </Col>
        <Col>
          <img
            className=" w-100"
            src={
              process.env.PUBLIC_URL + "/assets/support_us_page/Natale_2018.jpg"
            }
            alt="Natale 2018"
          />
        </Col>
      </Row>
    </Container>
  );
}

function SupportTheReserch() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Sostieni anche tu la ricerca!</h3>
          <a href="#">
            <img
              className="p-2 mb-2 dona "
              src={process.env.PUBLIC_URL + "/assets/dona.png"}
              alt="dona"
            />
          </a>
          <p>
            Cliccando su "Donazione" contribuirai a supportare i nostri servizi
            medico-assistenziali per il miglioramento della vita di molte
            persone.
          </p>
          <p>
            L'incasso verrà completamente devoluto ai progetti #RAREDUCANDO
            (contro il bullismo nelle scuole) e "STAMMI VICINO" (per il supporto
            medico ai pazienti con malattia rara).
          </p>
          <p>
            <a href="#">Clicca qui per leggere di più</a>, oppure{" "}
            <a href="#">Guarda il video della conferenza</a>
          </p>
        </Col>
        <Col>
          <img
            className=" w-100"
            src={
              process.env.PUBLIC_URL + "/assets/support_us_page/sostienici1.jpg"
            }
            alt="sostienici1"
          />
        </Col>
      </Row>
    </Container>
  );
}

function HowDonate() {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Come posso donare?</h3>
          <p>Si può donare nei seguenti modi:</p>
          <ul>
            <li>
              <b>Con il tuo 5xmille</b> : inserisci il <b>CF 92219930283</b> e
              la tua firma nella dichiarazione dei redditi.
            </li>
            <li>
              <b>Tramite bonifico bancario</b> con i seguenti dettagli
              <b>IBAN : IT 11Z 08590 62890 000081022765</b> Banca Del
              Centroveneto Credito Cooperativo S.C. - Longare, agenzia Caselle
              di Selvazzano.
            </li>
            <li>
              <b>Tramite carta di credito</b> : Qui sotto trovi un link per
              pagare con la tua carta in modo sicuro.
            </li>
          </ul>
          <a href="#">
            <img
              className="p-2 mb-2 dona "
              src={process.env.PUBLIC_URL + "/assets/dona.png"}
              alt="dona"
            />
          </a>
        </Col>
        <Col>
          <img
            className=" w-100"
            src={
              process.env.PUBLIC_URL + "/assets/support_us_page/sostienici2.jpg"
            }
            alt="sostienici2"
          />
        </Col>
      </Row>
    </Container>
  );
}

function SupportUs() {
  return (
    <Container>
      <ThisChristmas />
      <SupportTheReserch />
      <HowDonate />
    </Container>
  );
}

export default SupportUs;
