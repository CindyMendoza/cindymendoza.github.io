import React, { useState, useEffect } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.scss";
function NavBarF() {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          // if (rect.top <= 50 && rect.bottom >= 50) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${id}`);
      // setActiveSection(id);
      setTimeout(() => {
        setActiveSection(id);
      }, 300);
    }
  };

  return (
    <Navbar expand="sm" className="bg-body-tertiary">
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
              onClick={() => scrollToSection("about")}
              className={activeSection === "about" ? "active" : ""}
            >
              About me
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              onClick={() => scrollToSection("project")}
              className={activeSection === "project" ? "active" : ""}
            >
              Projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              onClick={() => scrollToSection("contact")}
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact me
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarF;
