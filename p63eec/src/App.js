import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/header";
import Navba from "./components/navbar";
import Footer from "./components/footer";
import Homepage from "./page/homepage";

function App() {
  return (
    <>
      <Container className="App">
        <Header />
        <Navba />
        <Homepage />
        <Footer />
      </Container>
    </>
  );
}

export default App;
