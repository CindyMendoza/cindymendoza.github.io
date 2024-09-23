import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.scss";
function NavBarF() {
  const [expand, updateExpanded] = useState(false);
  return (
    <Container>
      <Navbar expand="sm" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">
            <header>
              <div className="rebote">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h1>Cindy Mendoza</h1>
              <h4>Software Solutions</h4>
            </header>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="idNav">
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="idNav">
            <Nav>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={() => updateExpanded(false)}
                >
                  About me
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                >
                  Contact me
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default NavBarF;
