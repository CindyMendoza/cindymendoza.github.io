import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormContact from "./form";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
function Contact() {
  return (
    <Container fluid className="home-section" id="contact">
      <Container className="home-content">
        <Row>
          <Col>
            <h1
              className="project-heading"
              style={{ paddingBottom: "20px", textAlign: "center" }}
            >
              Let us keeping in touch through
            </h1>
            <h4 className="pink fw-600 mb-4">a message form</h4>
            <FormContact></FormContact>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <h4 className="pink fw-600 mb-4">a WhatsApp message</h4>
            <a
              href="https://wa.me/+51956911137?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="contact_link mb-4"
            >
              <AiOutlineWhatsApp />
            </a>
          </Col>
          <Col md={6}>
            <h4 className="pink fw-600 mb-4">
              or schedule a meeting in Calendly
            </h4>
            <a
              href="https://calendly.com/mendozaic"
              target="_blank"
              rel="noopener noreferrer"
              className="contact_link mb-4"
            >
              <BsCalendar3 />
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
