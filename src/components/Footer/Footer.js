import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar fixed="bottom">
      <Container>
        <Nav className="m-auto">
          <Nav.Link className="text-white" href="/privacy">
            Privacy Policy
          </Nav.Link>
          <Nav.Link className="text-white" href="/tac">
            Terms & Conditions
          </Nav.Link>
          <Nav.Link className="text-white" href="/privacy">
            Privacy Policy
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footer;
