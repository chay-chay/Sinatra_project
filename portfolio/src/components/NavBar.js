import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./navbar.css"
import logo from "../images/chay-logo3.png"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-head sticky-top">
      <Container>
        <Navbar.Brand className="navbar" href="/">
          <img width="auto" height="50px" className="img-responsive" src={logo}  alt="logo" />
          </Navbar.Brand>
        <Navbar.Toggle  area-controls="responsive-navbar-nav" /> 
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                <i className="fas fa-home"></i> Home
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link as={Link} to="/project">
                <i className="fab fa-codepen"></i> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                <i className="far fa-user"></i> About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
