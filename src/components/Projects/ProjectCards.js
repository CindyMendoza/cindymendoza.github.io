import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" className="btn-project">
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>
        <Button variant="primary" href={props.demoLink} target="_blank" className="btn-project">
          <CgWebsite /> &nbsp;
          {"Demo"}
        </Button>
        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
