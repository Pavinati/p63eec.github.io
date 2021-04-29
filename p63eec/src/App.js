import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./page/homepage";
import Giulia from "./page/giulia";
import History from "./page/history";
import Navba from "./components/navbar";


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
            <Route path="/what" component={History}/>
          </Switch>
        </Router>
        <Footer />
      </Container>
    </>
  );
}

export default App;
