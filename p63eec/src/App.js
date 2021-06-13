import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Homepage from "./page/homepage";
import Giulia from "./page/giulia";
import History from "./page/history";
import Navba from "./components/navbar";
import Us from "./page/us";
import Contacts from "./page/contacts";
import Gallery from "./page/events/gallery.jsx"
import Agenda from "./page/events/agenda.jsx"
import Press from "./page/events/press.jsx"
import Tv from "./page/events/tv.jsx"
import Partners from "./page/partners.jsx"
import SupportUs from "./page/supportUs.jsx"

function App() {
  return (
    <>
      <Container className="App">
        <Header />
        <Router>
          <Navba />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/giulia" component={Giulia} />
            <Route path="/about-us/us" component={Us} />
            <Route path="/about-us/contacts" component={Contacts} />
            <Route path="/what" component={History}/>
            <Route path="/events/gallery" component={Gallery}/>
            <Route path="/events/agenda" component={Agenda}/>
            <Route path="/events/press" component={Press}/>
            <Route path="/events/tv" component={Tv}/>
            <Route path="/partners" component={Partners}/>
            <Route path="/support-us" component={SupportUs}/>
          </Switch>
        </Router>
        <Footer />
      </Container>
    </>
  );
}

export default App;
