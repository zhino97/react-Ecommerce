import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";

export default function TheNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="wight" variant="light">
      <Container>
        <Navbar.Brand style={{ color: "#ffa69ee8;" }} as={Link} to="/home">
          Perfume
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/women">
              Women's
            </Nav.Link>
            <Nav.Link as={Link} to="/men">
              Men's
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Brand's
            </Nav.Link>
          </Nav>

          <Nav className="navs">
            <Nav.Link as={Link} to="/cart">
              <FaOpencart />
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
