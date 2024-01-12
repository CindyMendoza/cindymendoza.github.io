import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        {/* <h1 className="project-heading">
          A few projects <strong className="purple">I've worked</strong> 
        </h1> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col  className="project-card">
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
