import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sticky from "../../Assets/Projects/sticky-notes.png";
import weather from "../../Assets/Projects/weather.png";
import ecommerce from "../../Assets/Projects/commerce.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sticky}
              isBlog={false}
              title="Sticky-Notes"
              description="Developed a web-based Sticky Notes application using React, allowing users to create, edit, and organize digital sticky notes.Implemented features for creating and deleting notes, customizable colors, and draggable functionality for an intuitive user experience."
              ghLink="https://github.com/vijay5599/sticky-notes.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Designed and developed a user-friendly weather application to provide real-time weather information. Integrated a third-party weather API to fetch and display accurate weather data."
              ghLink="https://github.com/vijay5599/Weather-App.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce Website"
              description="Designed and developed a full-fledged E-commerce website utilizing the MERN (MongoDB, Express.js, React, Node.js) stack, ensuring seamless end-to-end functionality. Developed an admin panel to manage product listings, orders, and user accounts, enhancing the site's administrative capabilities"
              ghLink="https://github.com/vijay5599/MERN-ecommerce-Frontend.git"
              // ghLink="https://github.com/vijay5599/MERN-ecommerce-backend.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
