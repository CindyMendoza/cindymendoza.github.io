import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Type from "./Type";
import "./home.scss";
import myImage from "../../assets/images/home-1.jpeg";
import NavBarF from "../Navbar";
function Home() {
  return (
    <section id="home">
      <div className="home-section">
        <div className="home-navbar">
          <Container>
            <NavBarF />
          </Container>
        </div>
      </div>
      <Container className="home-presentation">
        <Row>
          <Col>
            <h1>Hello, I'm Cindy Mendoza!</h1>
            <small>
              <Type></Type>
            </small>
            <p>
              I’m a passionate about Software Engineer and solving complex
              problems through code. With experience in creating innovative
              solutions, front-end interfaces or back-end architecture, I love
              turning ideas into functional and efficient products.
            </p>

            <p>
              Explore my projects to see what I’ve been working on, or reach out
              if you want to collaborate!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
