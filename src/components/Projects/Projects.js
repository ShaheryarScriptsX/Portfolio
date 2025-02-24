import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Sample images (replace these with actual images)
import eqwell from "../../Assets/Projects/eqwell-ss.png";
import outpostSentinel from "../../Assets/Projects/outpostsentinel-ss.png";
import tou from "../../Assets/Projects/thinkofus-ss.png";
import chatGptClone from "../../Assets/Projects/chatgptclone-ss.png";
import andaInmov from "../../Assets/Projects/anda-ss.png";
import nameGlo from "../../Assets/Projects/nameglo-ss.png";
import ahhaa from "../../Assets/Projects/ahhaa-ss.png";
import quibbit from "../../Assets/Projects/quibbit-ss.png";
import starkCarz from "../../Assets/Projects/stark-ss.png";
import sendBlueAI from "../../Assets/Projects/sendblue-ss.png";
import sisCRM from "../../Assets/Projects/siscrm-ss.png";
import woooo from "../../Assets/Projects/woooo-ss.png";
import facultyDirectory from "../../Assets/Projects/faculty-ss.png";
import howManyExtension from "../../Assets/Projects/hme-ss.png";
import nextjsBoilerplate from "../../Assets/Projects/nextjs15-ss.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eqwell}
              isBlog={false}
              title="EQWELL"
              description="Corporate productivity platform with health reports, coach-guided workouts, payments, and real-time features. Built front-end with React.js, integrated Socket.io, and implemented Stripe payments."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nextjsBoilerplate}
              isBlog={false}
              title="Boilerplate (Next.js 15 with Clerk)"
              description="Created a Next.js 15 boilerplate application, incorporating Clerk for secure and efficient authentication. This template simplifies the development process by providing a pre-configured environment for authentication and Next.js best practices.
Both versions highlight your skills in setting up a foundational project with modern technologies."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={outpostSentinel}
              isBlog={false}
              title="Outpost Sentinel"
              description="Developed user authentication, dashboard, organization module, Alarms & Update Manager, and settings module. Built using React.js, MUI, Tailwind CSS, and JWT."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tou}
              isBlog={false}
              title="Think of Us (TOU)"
              description="Worked on the Virtual Support Client, improving UI and integrating new features for better foster care system support."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatGptClone}
              isBlog={false}
              title="Chat GPT Clone"
              description="React-based app leveraging Chat GPT APIs for interactive conversations, text-to-speech with multiple voices, and AI image generation."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={andaInmov}
              isBlog={false}
              title="ANDA INMOV"
              description="GenAI-powered chatbot for file-based data extraction and AI text analysis. Built an interactive React.js front end and integrated APIs."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nameGlo}
              isBlog={false}
              title="NAME GLO"
              description="Developed the front-end for an artist-led neon design studio, ensuring a visually engaging, responsive, and user-friendly experience."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ahhaa}
              isBlog={false}
              title="AHHAA App"
              description="Built the admin panel for a mindfulness and emotional well-being platform, enabling subscription management, analytics, and content updates."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quibbit}
              isBlog={false}
              title="Quibbit"
              description="Debugged and enhanced functionality for a vehicle maintenance scheduling app, improving user experience and reliability."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={starkCarz}
              isBlog={false}
              title="Stark Carz"
              description="Built the backend for an eCommerce platform for cars using MongoDB, Express.js, and Node.js. Integrated secure payments with Stripe."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sendBlueAI}
              isBlog={false}
              title="SendBlue_ai"
              description="Developed an AI chatbot with text-to-speech, multiple voice options, and image generation powered by Chat GPT APIs."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sisCRM}
              isBlog={false}
              title="SIS CRM"
              description="Developed UI for a customer relationship management platform focused on contract management and secure payment processing."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={woooo}
              isBlog={false}
              title="WOOOO App"
              description="Built real-time chat, translation, and audio/video calling features for a communication app. Integrated speech-to-text and text-to-speech functionalities."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facultyDirectory}
              isBlog={false}
              title="Faculty Directory"
              description="Created a web app for academic networking, enabling faculty searches across universities using Firebase for real-time data."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={howManyExtension}
              isBlog={false}
              title="HowManyExtension"
              description="Built the frontend for a Chrome extension, focusing on responsive design and an intuitive UI for seamless user interaction."
              ghLink="#"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
