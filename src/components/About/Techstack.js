import React from "react";
import { Col, Row } from "react-bootstrap";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiTailwindcss, SiBootstrap, SiMui } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <ImHtmlFive />
        <p style={{fontSize: "24px"}}>HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt />
        <p style={{fontSize: "24px"}}>CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p style={{fontSize: "24px"}}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p style={{fontSize: "24px"}}>React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p style={{fontSize: "24px"}}>Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <p style={{fontSize: "24px"}}>Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p style={{fontSize: "24px"}}>MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <p style={{fontSize: "24px"}}>Github</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p style={{fontSize: "24px"}}>Firebase</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p style={{fontSize: "24px"}}>Tailwindcss</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p style={{fontSize: "24px"}}>Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMui />
        <p style={{fontSize: "24px"}}>MaterialUI</p>
      </Col>
    </Row>
  );
}

export default Techstack;
