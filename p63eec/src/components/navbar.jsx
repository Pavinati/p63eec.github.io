import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from "react-router-dom";



function Navba() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        {/* Dropdown Lingua*/}
          <NavDropdown title="Lingua" id="collasible-nav-dropdown">
          <LinkContainer to="#">
            <NavDropdown.Item>English</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="#">
            <NavDropdown.Item>Italiano</NavDropdown.Item>
          </LinkContainer>
          </NavDropdown>
          {/* temp Home*/}
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          {/*Paypal*/}
          <LinkContainer to="#">
            <Nav.Link className="paypal" style={{color:"white"}}>Paypal</Nav.Link>
          </LinkContainer>
          {/*Dropdown Chi siamo*/}
          <NavDropdown title="Chi siamo" id="collasible-nav-dropdown">
          <LinkContainer to="/about-us/us">
            <NavDropdown.Item>Noi</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/about-us/contacts">
            <NavDropdown.Item>Servizi</NavDropdown.Item>
          </LinkContainer>
          </NavDropdown>
          {/* Giulia*/}
          <LinkContainer to="/giulia">
            <Nav.Link >Giulia</Nav.Link>
          </LinkContainer>
          { /* Dropdown Sindrome EEC*/}
          <NavDropdown title="Sindrome EEC" id="collasible-nav-dropdown">
          <LinkContainer to="/what">
            <NavDropdown.Item>Cos'è</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="#">
            <NavDropdown.Item>
              Ricerca Scientifica
            </NavDropdown.Item>
          </LinkContainer>
            <LinkContainer to="#">
              <NavDropdown.Item>
                Ricerca Clinica
              </NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          {/*Eventi*/}
          <NavDropdown title="Eventi" id="collasible-nav-dropdown">
            <LinkContainer to="#">
              <NavDropdown.Item>Galleria</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="#">
              <NavDropdown.Item>Agenda</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="#">
              <NavDropdown.Item>Stampa</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="#">
              <NavDropdown.Item>TV</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          {/*Partners*/}
          <LinkContainer to="#">
            <Nav.Link>Partners</Nav.Link>
          </LinkContainer>
          {/*Sostienici*/}
          <LinkContainer to="#">
            <Nav.Link>Sostienici</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}



export default Navba;
