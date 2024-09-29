import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './contact.scss'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineMessage,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <h1>Contact</h1>
        <p>
          I’d love to hear from you! Whether you have a question about my work,
          want to discuss a potential collaboration, or just want to connect,
          feel free to reach out.
        </p>
        <h4>Contact Information</h4>

        <ul>
          <li>
            <AiOutlineMail />
            Email:{" "}
            <a
              href="mailto:mendoza.ibarra.cindy@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              mendoza.ibarra.cindy@gmail.com
            </a>
          </li>
          <li>
            <AiFillLinkedin />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mendozacindy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/mendozacindy/
            </a>
          </li>
          <li>
            <AiFillGithub />
            GitHub:{" "}
            <a
              href="https://github.com/CindyMendoza"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/CindyMendoza
            </a>
          </li>
          <li>
            <AiOutlineWhatsApp />
            WhatsApp:{" "}
            <a
              href="https://wa.me/+51956911137"
              target="_blank"
              rel="noopener noreferrer"
            >
              +51956911137
            </a>
          </li>
        </ul>
        <p>
          Let’s Collaborate! If you're interested in working together on
          exciting projects or have any inquiries, don't hesitate to send me a
          message. I’ll get back to you as soon as possible.
        </p>
       
      </Container>
    </section>
  );
}

export default Contact;
