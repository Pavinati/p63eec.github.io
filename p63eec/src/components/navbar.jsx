import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Navba() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Lingua" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Italiano</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="paypal" href="#" style={{color:"white"}}>Paypal</Nav.Link>
          <NavDropdown title="Chi siamo" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Noi</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Servizi</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#giulia">Giulia</Nav.Link>
          <NavDropdown title="Sindrome EEC" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cos'è</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Ricerca Scientifica
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Ricerca Clinica
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Sindrome EEC" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Cos'è</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Ricerca Scientifica
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Ricerca Clinica
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Eventi" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Galleria</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Agenda</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Stampa</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">TV</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Partners</Nav.Link>
          <Nav.Link href="#">Sostienici</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navba;
