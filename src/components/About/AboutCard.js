import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h2 className="purple">Hey There! 👋 I'm Vijay Benal</h2>
          <p style={{ textAlign: "justify" }}>
            A passionate <b className="purple">Full Stack Developer</b> from
            <span className="purple"> Bagalkot, India</span>, with a love for
            building seamless and impactful web applications.
          </p>

          <p style={{ textAlign: "justify" }}>
            I specialize in developing{" "}
            <b className="purple">scalable web solutions</b>
            using <b className="purple">React.js, Node.js, FastAPI</b>, and
            cloud platforms like <b className="purple">Azure.</b>
            Currently, I work at <b className="purple">Graphene AI</b>, where I
            focus on integrating AI with web technologies, optimizing APIs, and
            streamlining deployments with DevOps tools.
          </p>

          <h3 className="purple">What Drives Me? 🚀</h3>
          <p style={{ textAlign: "justify" }}>
            I thrive on solving real-world challenges through technology.
            Whether it's designing <b className="purple">AI-powered chatbots</b>
            , optimizing
            <b className="purple"> microservices</b>, or automating workflows, I
            love crafting solutions that make a difference.
          </p>

          <h3 className="purple">Beyond Code 💡</h3>
          <p>When I’m not coding, you’ll find me:</p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies & AI advancements
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing competitive video games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Hitting the roads on my bike 🏍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & capturing new experiences 📸
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code is more than syntax—it's the art of creating solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Vijay Benal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
