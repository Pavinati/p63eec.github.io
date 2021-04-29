import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function History() {
  return (
    <Container>
      <h3>Sindrome EEC - Storia</h3>
      <div className="historyParagraph">
        <b>Definizione</b>
        <br />
        <p>
          La sindrome Ectrodattilia-displasia Ectodermica-palatoschisi (EEC) è
          una rara patologia malformativa congenita caratterizzata
          dall’associazione di ectrodattilia (un'anomalia degli arti in cui
          alcuni raggi centrali delle mani sono mancanti con aspetto di “mano a
          pinza” o "mano a chela di granchio"), anomalie del palato ed anomalie
          dei tessuti di derivazione ectodermica. L’ectoderma è il foglietto
          embrionale più esterno da cui prendono origine il tessuto nervoso ed i
          tessuti epiteliali di rivestimento (epidermide, epitelio corneale
          ecc.) ed annessi (capelli, peli, unghie ecc.).
          <br />
        </p>
        <b>Segni e Sintomi</b>
        <br />
        <p>
          Frequenti sono le anomalie del dotto naso-lacrimale, del sistema
          genito-urinario ed importanti anomalie delle estremità,
          dall'ectrodattilia alla sindattilia (fusione delle dita della mano e
          del piede).
          <br />
          A carico del viso possono essere presenti palatoschisi e
          labiopalatoschisi. La parte ectodermica di questa sindrome coinvolge i
          capelli, i denti e le unghie. L’ipoidrosi è variabile, sebbene spesso
          la cute sia secca e possa essere presente ipercheratosi del palmo
          delle mani e dei piedi. I capelli sono radi, chiari e secchi e ciglia
          e sopracciglia sono spesso assenti. I denti sono piccoli e possono
          essere formati parzialmente; ci può essere ipodonzia ed edentia. Le
          unghie sono sottili, fragili e segnate; frequentemente si riscontrano
          anomalie del dotto lacrimale. Nardi e colleghi hanno riscontrato
          anomalie urogenitali in 13 casi su 25. Tali anomalie includevano:
          megauretere, reflusso vescicoureterico, idronefrosi e ipospadia.
          Generalmente lo sviluppo mentale è normale; la schisi, nella maggior
          parte dei casi nella forma di schisi del labbro e del palato, è
          frequente, ma non è parte essenziale della sindrome. Tutte le
          caratteristiche sono assai variabili e deve essere posta estrema
          attenzione nell’esaminare e nel consigliare i genitori del paziente,
          che può apparire come caso isolato. Van Maldergem, Kuna e colleghi
          hanno rivelato una anomalia della funzione ipotalamica-pituitaria.
          (R.M. Winter, M. Baraitser, London Dysmorphology Database, Oxford
          Medical Databases, 2000). Le manifestazioni oculari sono una
          componente riscontrata frequentemente nella sindrome EEC. (Ireland et
          al. Ophthalmic manifestations of ectrodactyly-ectodermal
          dysplasia-clefting syndrome. Ophthalmic-plast-reconstr-surg. 1998;
          14/4 (295-297) e (Colin Willoughby, dati non ancora pubblicati).
          <br />
        </p>
        <b>Eziologia</b>
        <br />
        <p>
          La malattia è legata a mutazioni del gene p63, deputato alla
          produzione di una proteina essenziale sia (i) durante l’ embriogenesi
          per il normale sviluppo dell'ectoderma, sia (ii) nell’ adulto per la
          maturazione e differenziazione delle cellule staminali dei diversi
          tessuti epiteliali compreso quello della cornea, ove l’ espressione di
          p63 è ristretta a livello dello strato basale del limbus, la nicchia
          delle cellule staminali corneali e nelle cellule staminali allorchè
          coltivate in laboratorio <b>(Figg. 8a, 8b)</b>. La maggior parte dei
          casi sono sporadici, legati a mutazioni de novo, che tipicamente
          insorgono durante lo sviluppo dell’ embrione. I casi familiari
          mostrano una ereditarietà di tipo autosomico dominante a penetranza
          variabile. L'incidenza e la prevalenza della malattia nella
          popolazione italiana non sono note. Maschi e femmine sono ugualmente
          colpiti.
        </p>
      </div>
      <div className="historyParagraph">
        <h4>
          <b>fig. 8a</b>
        </h4>
        <img src={process.env.PUBLIC_URL + "assets/what-is/fig8a.gif"} />
      </div>
      <div className="historyParagraph">
        <h4>
          <b>fig. 8b</b>
        </h4>
        <img src={process.env.PUBLIC_URL + "assets/what-is/fig8b.gif"} />
      </div>
      <div className="historyParagraph">
        <b>Problemi Oculari</b>
        <br />
        <p>
          Durante l’infanzia le principali caratteristiche che mettono in
          condizione di svantaggio il paziente affetto dalla sindrome EEC sono
          la palatoschisi e le deformità della mano con le relative correzioni
          operatorie. Durante la giovane età adulta comunque, i problemi oculari
          diventano gli aspetti di handicap predominanti: i pazienti spesso
          mostrano alterazioni della superficie oculare (blefariti e
          congiuntiviti), disfunzione dell’ epitelio corneale e una scarsa
          riepitelizzazione in seguito a traumi e a cheratoplastica perforante
          (Fig.9).
        </p>
      </div>
      <div className="historyParagraph">
        <h4>
          <b>fig. 9</b>
        </h4>
        <img src={process.env.PUBLIC_URL + "assets/what-is/fig9.gif"} />
      </div>
      <div className="historyParagraph">
        Tali pazienti presentano un pannus corneale vascolarizzato che porta ad
        una progressiva diminuizione della capacità visiva fino alla completa
        perdita della vista (Figg.10a, 10b).
      </div>
      <Container>
        <Row>
          <Col>
            <Row><h4><b>fig. 10a</b></h4></Row>
            <Row><img src={process.env.PUBLIC_URL + "assets/what-is/fig10a.jpg"} /></Row>

          </Col>
          <Col>
            <Row><h4><b>fig. 10b</b></h4></Row>
            <Row><img src={process.env.PUBLIC_URL + "assets/what-is/fig10b.jpg"} /></Row>

          </Col>
          <Col>
            <Row><h4><b>fig. 11</b></h4></Row>
            <Row><img src={process.env.PUBLIC_URL + "assets/what-is/fig11.jpg"} /></Row>

          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default History;
