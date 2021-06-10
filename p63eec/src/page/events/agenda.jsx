import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Apr20_17() {
  return (
    <p>
      <b>Corri per mano</b>, evento h. 15/18 meeting c/o Sala Anziani Comune di
      Padova, titolo: Lo sport aggregazione e abbattimento dell’isolamento
      relatori Esperti e Atleti del settore,
      <br /> Ulss 16, CSV.
      <br /> h. 18.30 aperitivo,
      <br />
      h.19 trasferta Prato della Valle,
      <br /> h.19/20 Corri per Mano, in collaborazione con Corri per Padova.
      <br /> acquisto t-shirt e iscrizione euro 12.00.
    </p>
  );
}

function Feb24_17() {
  return (
    <p>
      <b>Open day Osservatorio E.E.C International</b> presso Azienda
      Ospedaliera di Padova, relatori direttori dipartimenti medici clinici e
      famiglie, ore 9/16. Chairman e Direttore Scientifico prof. Franco Bassetto
      Cena di Gala presso Hotel Mioni Royal San Montegrotto Terme.
      <a href="#">Scarica Locandina (Ossevatorio).</a>
      <a href="#">Scarica Locandina (Gran Gala).</a>
      <br /> Programma:
      <br /> h. 18.30 sfilata di bambini in maschera,
      <br /> h 19.00 Saluti del Direttivo Onlus e Autorità e aperisnack,
      <br /> h. 19.30/20.30 sfilata di moda in collaborazione con eccellenze del
      territorio.
    </p>
  );
}

function eventlist(event) {
  return (
    <Row>
      <Col xs={4}>
        <p>
          <strong>{event.date}</strong>
        </p>
      </Col>
      <Col xs={8}>{event.content}</Col>
    </Row>
  );
}

function Agenda() {
  const year2020 = [
    {
      date: "15 Febbraio",
      content:
        "Presentazione incontro gruppo auto mutuo aiuto per famiglie e pazienti con malattie rare.",
    },
    {
      date: "28 Febbraio ",
      content:
        "Malattie rare: L'informazione comincia da noi - Bassano in forma.",
    },
    {
      date: "29 Febbraio ",
      content: "Rare diseases day 2020: Meet and greet.",
    },
    {
      date: "14 Marzo ",
      content: "Avvio gruppo auto mutuo aiuto.",
    },
    {
      date: "19 Aprile ",
      content: "Padova Marathon: Corri per mano, corri con noi!",
    },
    {
      date: "10 Settembre ",
      content: (
        <p>
          <a href="#">corri per mano</a>: L'abbraccio più grande del mondo.
        </p>
      ),
    },
    {
      date: "11 Settembre ",
      content: "Ricerca e confronti: international meeting",
    },
    {
      date: "12 Settembre ",
      content: (
        <p>
          <a href="#">6X3</a>: Sport è inclusione.
        </p>
      ),
    },
  ];
  const year2018 = [
    {
      date: "Febbraio ",
      content:
        "Rareducando docu-film Bruxelles- c/o Ambasciata di Malta-in collaborazione con M.me Michele Muscat Presidente ass.malattie rare Malta Italia -Piemonte, Lombardia, Sicilia, Trentino.",
    },
    {
      date: "Dal 9 gennaio al 12 giugno",
      content:
        "corso Mira qué Ritmo. Integrazione sociale per persone ipovedenti/non vedenti, tramite il ballo latino americano. Padova.",
    },
  ];
  const year2017 = [
    {
      date: "22 dicembre",
      content:
        "Gran Gala' Mira Que' Ritmo - in collaborazione con Selena Danza Padova h. 18.30-24.00",
    },
    {
      date: "30 Novembre - 1 Dicembre",
      content: (
        <p>
          ore 17.00, Hotel Excelsior al Lido di Venezia, (Scarica la{" "}
          <a href="#">locandina</a>).
        </p>
      ),
    },
    {
      date: "1 Ottobre",
      content:
        "Il nostro programma prevede : percorsi Slow Bike con partenza da Villa Draghi (Montegrotto Terme), degustazioni prodotti tipici Euganei,area bimbi al punto ristoro.",
    },
    {
      date: "31 Agosto",
      content: (
        <p>
          ore 17.00, Hotel Excelsior al Lido di Venezia,&nbsp; (Scarica la{" "}
          <a href="#">locandina</a>).
        </p>
      ),
    },
    {
      date: "3 Giugno",
      content: (
        <p>
          <b>giornata finale RAREDUCANDO</b> evento organizzato con le scuole di
          Padova in collaborazione con Assessorato Istruzione Regione Veneto. h.
          9/12.30 festa di incontro e confronto, presentazione video e pillole
          cinematografiche e teatrali per le scuole. Aperisnack analcolico e
          saluti. Interverranno funzionari e dirigenti dell'Assessorato
          Istruzione e formazione. Settembre Fashion day and more (in
          organizzazione)
        </p>
      ),
    },
    {
      date: "Maggio",
      content: (
        <p>
          Festa della mamma <b>Concerto</b> teatro (in organizzazione) costo
          biglietto solidale euro 10,00.
        </p>
      ),
    },
    {
      date: "Maggio",
      content: (
        <p>
          <b>apertura sportello Malattie Rare Montegrotto Terme</b> , Via Scavi
          (stabile Biblioteca).
        </p>
      ),
    },
    {
      date: "23 Aprile",
      content: (
        <p>
          <b>Maratona di Padova</b>, charity partner #RAREDUCANDO il nostro
          progetto #nobullismo no #cyberbullismo nelle scuole. iscrizione e
          t.shirt euro 20. Tutti i nostri partner potranno accedere alla
          stracittadina a costo agevolato, si potranno attuare format di gruppo
          runner aziendale ecc, a supporto della mission, euro 20 totale. Tutti
          i nostri partner potranno fare capo al nostro gazebo per esporre
          materiale informativo, su supporto economico concordato.
        </p>
      ),
    },
    {
      date: "20 Aprile",
      content: <Apr20_17 />,
    },
    {
      date: "28 Febbraio",
      content: (
        <p>
          <b>Cerimonia al Quirinale</b> -Roma- al cospetto del Presidente Sergio
          Mattarella.
        </p>
      ),
    },
    {
      date: "24 Febbraio",
      content: <Feb24_17 />,
    },
  ];

  const year2016 = [
    {
      date: "17 Aprile",
      content: (
        <p>
          <b>MARATONA di PADOVA</b>: chrity partner. Corri con Noi e invita a
          DONARE.
        </p>
      ),
    },
    {
      date: "14 Aprile",
      content: (
        <p>
          <b>CORRI X MANO</b>: Prato della Valle Padova ore 18/21.{" "}
        </p>
      ),
    },
    {
      date: "10 Aprile",
      content: (
        <p>
          <b>FASHION RARE sfilata di moda</b>: ore 18/21 “quando la moda parla
          p63 eec syndrome “. c/0 Crawn Plaza info e donazioni
          :morbinantonella@gmail.com.
        </p>
      ),
    },
    {
      date: "9 Marzo",
      content: (
        <p>
          <b>RAREDUCANDO</b>: aula Ramazzini, via Giustiniani 2 Padova dalle ore
          15.30 alle 18.30. Clicca qui per iscriverti!
        </p>
      ),
    },
  ];
  const year2014 = [
    {
      date: "15 Maggio",
      content: (
        <p>
          WILD – OLTRENATURA - <a href="#">(Guarda il video)</a>{" "}
        </p>
      ),
    },
    {
      date: "23-24-25 Maggio",
      content: "Bibione, Ve.-Beach Volley Marathon",
    },
    {
      date: "27 Maggio",
      content: "RAI 1 - Uno mattina storie vere (ore 10.00-10.30)",
    },
    {
      date: "15-19 Settembre",
      content: "Roma- Summer School",
    },
    {
      date: "26-28 Settembre",
      content: (
        <p>
          Abano Terme- <a href="#">Abano le Terme dell'Arte</a>.<br />{" "}
          <a href="#">(Locandina)</a>
        </p>
      ),
    },
    {
      date: "28 Settembre",
      content: (
        <p>
          Padova: festa delle Associazioni in piazza,
          <a href="#">http://www.csvpadova.org/</a>
        </p>
      ),
    },
    {
      date: "08 Dicembre",
      content: (
        <p>
          Abano Terme: Gran Galà della Famiglia
          <a href="#">http://www.moviechorus.it/</a> locandina e programma da
          confermare).
        </p>
      ),
    },
    {
      date: "02 Dicembre",
      content:
        "PAdova: festa dei giovani al teatro Verdi, ospiti di Klinefelter Club",
    },
  ];
  return (
    <>
      <Container>
        <h3>Agenda Eventi 2020</h3>
        {year2020.map(eventlist)}
      </Container>
      <Container>
        <h3>Agenda Eventi 2018</h3>
        {year2018.map(eventlist)}
      </Container>
      <Container>
        <h3>Agenda Eventi 2017</h3>
        {year2017.map(eventlist)}
      </Container>
      <Container>
        <h3>Agenda Eventi 2016</h3>
        {year2016.map(eventlist)}
      </Container>
      <Container>
        <h3>Agenda Eventi 2014</h3>
        {year2014.map(eventlist)}
      </Container>
    </>
  );
}

export default Agenda;
