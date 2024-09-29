import { Container, Row, Col } from "react-bootstrap";
import "./about.scss";
const MainFunction = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <Col>
            <h1>About Me</h1>
            <p>
              I have experience working as a Front-End Developer and Full-Stack
              Developer on various types of projects. My journey in tech has
              enabled me to develop adaptable, creative, and efficient
              solutions. I take pride in my versatility, creativity, and
              perseverance.
            </p>
            <h4>My Approach</h4>
            <p>
              As a developer, I embrace challenges and continually strive to
              improve my skills. I am passionate about exploring new
              technologies and finding innovative ways to solve problems. I
              thrive on bringing ideas to life through code, always with a focus
              on creating user-friendly and high-performance applications.
            </p>
            <h4>Beyond Code</h4>
            <p>
              Outside of development, I'm an animal lover and an explorer of new
              places. Traveling and discovering new destinations inspire me to
              think differently and approach challenges with a fresh
              perspective.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MainFunction;
