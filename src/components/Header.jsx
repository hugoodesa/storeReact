import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

const Header = () => (
  <Navbar bg="dark" variant="dark" style={{ fontFamily: "Pushster , cursive" }}>
    <Container>
      <Navbar.Brand href="#home">
        <Logo />
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
