import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./project.scss";
import MainCarousel from "./SliderJobExperience";
function Projects() {
  return (
    <section className="projects" id="project">
      <Container>
        <h1>Projects</h1>
        <MainCarousel />

        {/* 2. Mini Site for Educational Institution
    Client: Newton College
    Role: Front-End Developer
    Technologies: Angular, TypeScript
    Description: Developed an informational mini site to improve the school’s online presence. The project included optimizing the site for performance, ensuring fast loading times, and providing a seamless user experience across all devices.

    Key Achievements:
    Improved site performance by 20% using lazy loading and code splitting.
    Ensured cross-browser compatibility and mobile responsiveness.
    View Repository | Live Demo */}
      </Container>
    </section>
  );
}

export default Projects;
