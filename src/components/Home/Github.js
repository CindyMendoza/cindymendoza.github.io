import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row,Col } from "react-bootstrap";

function Github() {
  return (
    <Row>
      <Col>
        <h1 className="project-heading">
          Days I <strong className="purple">Code</strong> in Github
        </h1>
        <GitHubCalendar
          username="CindyMendoza"
          blockSize={15}
          blockMargin={5}
          color="#c084f5"
          fontSize={16}
        />
      </Col>
    </Row>
  );
}

export default Github;
