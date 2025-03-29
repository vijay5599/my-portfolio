import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate <b className="purple">Full Stack Developer</b>{" "}
              with expertise in
              <i>
                <b className="purple"> React.js, Node.js, FastAPI,</b>
              </i>
              &nbsp; and cloud platforms like
              <i>
                <b className="purple"> Azure.</b>
              </i>
              <br />
              <br />I love working on{" "}
              <b className="purple">scalable web applications</b> and optimizing
              APIs for performance. Currently, at{" "}
              <b className="purple">GrapheneAI</b>, I develop
              <b className="purple"> AI-driven web solutions</b>, cloud
              deployments, and
              <b className="purple"> microservices architecture</b>.
              <br />
              <br />
              My field of interest includes building &nbsp;
              <i>
                <b className="purple">
                  modern web technologies and AI-powered products.
                </b>
              </i>
              <br />
              <br />
              One of my key projects was an &nbsp;
              <b className="purple">AI-powered Image SaaS platform</b>, which
              leveraged
              <i>
                <b className="purple"> Next.js, MongoDB, Cloudinary</b>
              </i>
              &nbsp; and integrated
              <i>
                <b className="purple">
                  {" "}
                  secure authentication & payment systems.
                </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vijay5599"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vijay-v-benal-184926169/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
