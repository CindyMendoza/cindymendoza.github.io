import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row style={{ alignItems: "end" }}>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi there!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <div></div>
            </Col>
            <Col md={5}></Col>
          </Row>

          <Row style={{ marginTop: "30px", marginBottom: "60px" }}>
            <Col md={7}>
              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                      I'm passionate about creating, developing, maintaining,
                      and testing software.
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row style={{ paddingTop: "60px", paddingBottom: "60px" }}>
            <Col>
              <h1 className="project-heading">
                Languages and technologies used
              </h1>
              <div className="languagesandtech"></div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
