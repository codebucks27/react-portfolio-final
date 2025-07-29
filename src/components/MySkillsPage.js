import React, { useState } from "react";
import styled, { ThemeProvider} from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 3rem;
  width: 80vw;
  height: 70vh;
  z-index: 3;
`;

const SkillCard = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }
`;

const CardTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1.2em + 0.5vw);
  margin-bottom: 1.5rem;

  ${SkillCard}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const CardContent = styled.div`
  text-align: center;
  
  .skills {
    font-size: calc(0.9em + 0.2vw);
    font-weight: bold;
    margin-bottom: 1rem;
    line-height: 1.4;
  }
  
  .impact {
    font-size: calc(0.7em + 0.2vw);
    opacity: 0.8;
    font-style: italic;
    line-height: 1.3;
  }

  ${SkillCard}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 3rem;
  border-radius: 15px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  border: 3px solid ${(props) => props.theme.text};
  font-family: "Ubuntu Mono", monospace;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu Mono", monospace;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const ModalTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1.5em + 0.5vw);
  margin-bottom: 2rem;
  top:0;
  & > *:first-child {
    margin-right: 1rem;
  }
`;

const ModalSection = styled.div`
  margin-bottom: 2rem;
  
  h3 {
    font-size: calc(1em + 0.2vw);
    margin-bottom: 1rem;
    text-transform: uppercase;
    border-bottom: 1px solid ${(props) => props.theme.text}33;
    padding-bottom: 0.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      padding: 0.3rem 0;
      padding-left: 1rem;
      position: relative;
      
      &:before {
        content: "▶";
        position: absolute;
        left: 0;
        color: ${(props) => props.theme.text};
        font-size: 0.8em;
      }
    }
  }
  
  p {
    line-height: 1.5;
    margin: 0.5rem 0;
  }
`;

const MySkillsPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const skillsData = [
    {
      id: "fullstack",
      title: "Full Stack Developer",
      icon: <Develope width={40} height={40} />,
      skills: "React.js • Next.js • Node.js",
      impact: "Built 5+ production apps • 60% faster workflows",
      details: {
        description: "I build scalable, production-grade web applications that solve real-world problems. Passionate about creating efficient, user-centric solutions with modern technologies.",
        sections: [
          {
            title: "Frontend Technologies",
            items: [
              "React.js, Next.js, Vue.js",
              "TypeScript, JavaScript (ES6+)",
              "Tailwind CSS, Bootstrap, Shadcn",
              "Redux Toolkit, State Management"
            ]
          },
          {
            title: "Backend & APIs",
            items: [
              "Node.js, Express.js",
              "REST APIs, GraphQL",
              "JWT Authentication, OAuth",
              "Server-side rendering"
            ]
          },
          {
            title: "Tools & Deployment",
            items: [
              "Git, GitHub, VSCode",
              "Vercel, Firebase, Docker",
              "Performance Optimization",
              "Responsive Design"
            ]
          }
        ]
      }
    },
    {
      id: "backend",
      title: "Backend & Database",
      icon: <Develope width={40} height={40} />,
      skills: "Python • PostgreSQL • Docker",
      impact: "35% faster APIs • High-traffic systems",
      details: {
        description: "I architect robust server-side solutions with optimized database designs, delivering APIs that are 35% faster and handle high-traffic loads efficiently.",
        sections: [
          {
            title: "Backend Technologies",
            items: [
              "Node.js, Express.js",
              "Flask, FastAPI, Laravel",
              "Microservices Architecture",
              "API Design & Documentation"
            ]
          },
          {
            title: "Databases & Storage",
            items: [
              "MongoDB, PostgreSQL, MySQL",
              "Redis, ChromaDB",
              "Database Optimization",
              "Data Migration & Backup"
            ]
          },
          {
            title: "Infrastructure & DevOps",
            items: [
              "Docker, Kubernetes",
              "CI/CD Pipelines",
              "Firebase, Vercel",
              "Performance Monitoring"
            ]
          }
        ]
      }
    },
    {
      id: "aiml",
      title: "AI/ML Engineer",
      icon: <Design width={40} height={40} />,
      skills: "LangChain • OpenAI • TensorFlow",
      impact: "28% improved accuracy • 99.47% precision",
      details: {
        description: "I integrate cutting-edge AI capabilities into web applications, creating intelligent systems with 28% improved accuracy and enhanced user experiences.",
        sections: [
          {
            title: "AI/ML Frameworks",
            items: [
              "LangChain, Hugging Face",
              "OpenAI APIs, Gemma",
              "TensorFlow, Scikit-learn",
              "RAG Systems, LLM Fine-tuning"
            ]
          },
          {
            title: "Data & Computer Vision",
            items: [
              "Computer Vision, OpenCV",
              "Data Mining, Pandas, NumPy",
              "Vector Databases (ChromaDB)",
              "ML Model Deployment"
            ]
          },
          {
            title: "Specialized Applications",
            items: [
              "Chatbots & Virtual Assistants",
              "Real-time AI Integration",
              "Anomaly Detection Systems",
              "Automated Workflow Solutions"
            ]
          }
        ]
      }
    },
    {
      id: "realtime",
      title: "Real-time & DevOps",
      icon: <Develope width={40} height={40} />,
      skills: "WebRTC • Socket.io • CI/CD",
      impact: "Real-time systems • Scalable deployment",
      details: {
        description: "I build real-time communication systems and maintain efficient development workflows with modern tools and automated deployment pipelines.",
        sections: [
          {
            title: "Real-time Technologies",
            items: [
              "Socket.io, WebRTC",
              "Live Streaming, ZegoCloud",
              "Real-time Chat, Video Calls",
              "WebSockets, Event-driven Architecture"
            ]
          },
          {
            title: "DevOps & Automation",
            items: [
              "Git, GitHub Actions",
              "Docker, CI/CD Pipelines",
              "Testing & Quality Assurance",
              "Performance Monitoring"
            ]
          },
          {
            title: "Development Tools",
            items: [
              "Selenium, Automated Testing",
              "Code Quality & Reviews",
              "Deployment Strategies",
              "System Monitoring & Alerts"
            ]
          }
        ]
      }
    }
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />

        <GridContainer>
          {skillsData.map((skill) => (
            <SkillCard key={skill.id} onClick={() => handleCardClick(skill)}>
              <CardTitle>
                {skill.icon} {skill.title}
              </CardTitle>
              <CardContent>
                <div className="skills">{skill.skills}</div>
                <div className="impact">{skill.impact}</div>
              </CardContent>
            </SkillCard>
          ))}
        </GridContainer>

        <Modal isOpen={!!selectedCard} onClick={handleModalClick}>
          {selectedCard && (
            <ModalContent>
              <CloseButton onClick={handleCloseModal}>×</CloseButton>
              <ModalTitle>
                {selectedCard.icon} {selectedCard.title}
              </ModalTitle>
              <ModalSection>
                <p>{selectedCard.details.description}</p>
              </ModalSection>
              {selectedCard.details.sections.map((section, index) => (
                <ModalSection key={index}>
                  <h3>{section.title}</h3>
                  <ul>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </ModalSection>
              ))}
            </ModalContent>
          )}
        </Modal>

        <BigTitle text="SKILLS" top="80%" right="50%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;