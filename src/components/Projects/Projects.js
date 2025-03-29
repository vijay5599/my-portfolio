import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/commerce.png";
import saas from "../../Assets/Projects/saas.png";
import zoom from "../../Assets/Projects/zoom.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={saas}
              isBlog={false}
              title="AI-Powered Image SaaS Platform"
              description="Developed a full-stack AI-powered image processing platform using Next.js, MongoDB, and Cloudinary. Implemented authentication, payment integration, and secure APIs."
              ghLink="https://github.com/vijay5599/imaginify.git"
              demoLink="https://imaginify-swart.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zoom}
              isBlog={false}
              title="Real-Time Video Conferencing App"
              description="Built a Zoom-like video conferencing platform using Next.js, TypeScript, and getStream. Features include authentication (Clerk), real-time meetings, scheduling, recording, and screen sharing."
              ghLink="https://github.com/vijay5599/zoom"
              demoLink="https://zoom-liard-gamma.vercel.app/"
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
              // demoLink=""
            />
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whac}
              isBlog={false}
              title="Whac-A-Mole Game"
              description="Designed and implemented a Whac-a-Mole game as part of a programming project, showcasing proficiency in game development, user interface design, and problem-solving."
              ghLink="https://github.com/vijay5599/whac-a-mole.git"
            />
          </Col> */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Game"
              description="Developed and implemented a Memory Game as a standalone project, showcasing expertise in game design.  Implemented core game mechanics, including card flipping, matching logic, and scoring systems"
            />
          </Col> */}
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sticky}
              isBlog={false}
              title="Sticky-Notes"
              description="Developed a web-based Sticky Notes application using React, allowing users to create, edit, and organize digital sticky notes.Implemented features for creating and deleting notes, customizable colors, and draggable functionality for an intuitive user experience."
              ghLink="https://github.com/vijay5599/sticky-notes.git"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Designed and developed a user-friendly weather application to provide real-time weather information. Integrated a third-party weather API to fetch and display accurate weather data."
              ghLink="https://github.com/vijay5599/Weather-App.git"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linkedin}
              isBlog={false}
              title="LinkedIn clone"
              description="Designed and implemented a LinkedIn clone UI project, demonstrating proficiency in front-end development and user interface design. Created a visually appealing user interface, closely mimicking the key features and aesthetics of the LinkedIn platform."
              ghLink="https://github.com/vijay5599/linkedin-clone.git"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
