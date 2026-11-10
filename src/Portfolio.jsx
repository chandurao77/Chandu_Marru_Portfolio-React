import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';

/* ------------------------------------------------------------------ */
/* Content. Edit the data below to update the site.                    */
/* ------------------------------------------------------------------ */

const EMAIL = 'Chandum9642@gmail.com';
const PHONE = '609-701-1377';
const PHONE_HREF = 'tel:+16097011377';
const LINKEDIN_URL = 'https://www.linkedin.com/in/chandumarru964232/';
const GITHUB_URL = 'https://github.com/chandurao77';

// Replace with the latest resume link, or put a PDF in /public and use '/Chandu_Marru_Resume.pdf'.
const RESUME_URL =
  'https://docs.google.com/document/d/1cLF2Qxks5TQnYk-thQ2ps13JI6YBsiu1/edit?usp=sharing&ouid=115833640431706346767&rtpof=true&sd=true';

// To show a photo, put the image in /public (for example public/profile.jpg) and set this to '/profile.jpg'.
// While it is empty the hero shows the initials instead.
const PHOTO_URL = '';

const stats = [
  { number: '9+', label: 'Years Experience' },
  { number: '5', label: 'Major Companies' },
  { number: '4', label: 'Industries' },
  { number: '2', label: 'AI Systems in Production' }
];

const systems = [
  {
    title: 'Enterprise Knowledge Assistant (RAG)',
    status: 'In production',
    description:
      'A question-answering system over internal engineering documentation. Engineers ask in plain English and get an answer with the source pages and a confidence level.',
    pipeline: [
      ['Question', 'plain English'],
      ['Hybrid retrieval', 'BM25 + vector search'],
      ['Second hop', 'when the first pass is weak'],
      ['Rerank', 'keyword, vector, page signals'],
      ['Answer', 'sources + confidence']
    ],
    numbers: [
      ['92%', 'correct on a 50-question internal benchmark'],
      ['4,800+', 'document chunks indexed'],
      ['560', 'automated tests passing'],
      ['<$0.001', 'model cost per query']
    ],
    techStack: ['Python', 'FastAPI', 'Azure OpenAI', 'PostgreSQL + pgvector', 'Elasticsearch', 'GraphRAG', 'Redis']
  },
  {
    title: 'AI Log Investigation Platform',
    status: 'In production, active development',
    description:
      'Takes a question about a failing account or service, pulls the relevant logs, and writes up the likely root cause.',
    pipeline: [
      ['Question', 'account or error'],
      ['Intent routing', 'which domain, which flow'],
      ['Log search', 'Elasticsearch'],
      ['Event scoring', 'severity, rarity, timing'],
      ['Root cause', 'grounded in runbooks']
    ],
    points: [
      'Replaced positional slicing with scored event selection, so the analysis reads the events that matter.',
      'Rebuilt intent classification, which had relied on substring matching.',
      'Fixed reliability failures in the conversational flow: report polling, JSON parsing, domain routing and result ordering.'
    ],
    techStack: ['Python', 'LLM agents', 'Elasticsearch', 'AWS Lambda', 'Step Functions']
  },
  {
    title: 'Cloud Delivery for AI Services',
    status: 'Current work',
    statusAlt: true,
    description:
      'The infrastructure that carries agent services from a commit to live traffic on AWS, with a controlled shift at the end.',
    pipeline: [
      ['Terraform', 'VPC, ALB, IAM'],
      ['Image', 'Docker to ECR'],
      ['Pipeline', 'Concourse, GitHub Actions'],
      ['ECS Fargate', 'service behind the ALB'],
      ['Route 53', 'weighted shift, canary']
    ],
    techStack: ['Terraform', 'Docker', 'ECR', 'ECS Fargate', 'Concourse', 'Route 53', 'CloudWatch']
  }
];

const skills = [
  {
    title: 'Backend Development',
    tags: ['Java 8/11', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'Kotlin', 'Microservices', 'REST APIs', 'GraphQL', 'OAuth2 / JWT', 'Python 3', 'FastAPI']
  },
  {
    title: 'AI Engineering',
    tags: ['RAG', 'Hybrid Search', 'Reranking', 'GraphRAG', 'Multi-hop Retrieval', 'LangGraph', 'LangChain', 'MCP', 'Agent Orchestration', 'Evaluation', 'Guardrails', 'Azure OpenAI', 'Claude API']
  },
  {
    title: 'Frontend Development',
    tags: ['React', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'Redux', 'Tailwind', 'Material UI', 'HTML5', 'CSS3']
  },
  {
    title: 'Cloud & Infrastructure',
    tags: ['AWS', 'ECS Fargate', 'Lambda', 'Step Functions', 'API Gateway', 'S3', 'RDS', 'Route 53', 'CloudWatch', 'Azure', 'Terraform']
  },
  {
    title: 'Databases & Search',
    tags: ['PostgreSQL', 'pgvector', 'Elasticsearch', 'MySQL', 'Oracle', 'MongoDB', 'DynamoDB', 'Cosmos DB', 'Redis']
  },
  {
    title: 'Messaging & Streaming',
    tags: ['Apache Kafka', 'RabbitMQ', 'AWS SQS / SNS', 'AWS Kinesis', 'Azure Service Bus', 'Event-Driven Architecture']
  },
  {
    title: 'DevOps & CI/CD',
    tags: ['Docker', 'Kubernetes', 'OpenShift', 'Jenkins', 'GitHub Actions', 'Concourse', 'Azure DevOps', 'Maven', 'Gradle']
  },
  {
    title: 'Testing & Observability',
    tags: ['JUnit', 'Mockito', 'Jest', 'TDD', 'ELK Stack', 'CloudWatch', 'Swagger / OpenAPI']
  }
];

const experiences = [
  {
    title: 'Senior Java Full Stack Developer / AI Engineer',
    company: 'Comcast',
    location: 'Philadelphia, PA',
    date: 'Oct 2025 - Present',
    highlights: [
      'Build and run two production AI systems used by engineering teams: a RAG knowledge assistant and an AI log investigation platform.',
      'Write Java 11 and Spring Boot services alongside Python and FastAPI services on AWS: ECS Fargate, Lambda, Step Functions, DynamoDB, SQS and API Gateway.',
      'Own deployment and traffic management with Terraform, Docker, Concourse and GitHub Actions, including Route 53 traffic shifting and canary releases.',
      'Trace production issues to root cause across distributed services using centralized logging and CloudWatch.',
      'Work spec-first with AI coding tools: proposal, design and task specs before code.'
    ],
    techStack: ['Java 11', 'Spring Boot', 'Python 3', 'FastAPI', 'AWS', 'Terraform', 'Docker', 'RAG', 'AI Agents']
  },
  {
    title: 'Senior Java Full Stack Developer',
    company: 'TD Bank',
    location: 'Mount Laurel, NJ',
    date: 'Sep 2024 - Sep 2025',
    highlights: [
      'Built Java and Kotlin Spring Boot microservices with JPA, Hibernate and Spring Security on a platform handling about 2M transactions a day.',
      'Used Apache Kafka for asynchronous messaging between services.',
      'Delivered React and Redux front ends, GraphQL APIs and Node.js backend-for-frontend services.'
    ],
    techStack: ['Java', 'Kotlin', 'Spring Boot', 'Kafka', 'React', 'Redux', 'GraphQL', 'Node.js', 'AWS']
  },
  {
    title: 'Java Full Stack Developer',
    company: 'Win Supply',
    location: 'Dayton, OH',
    date: 'Jul 2023 - Aug 2024',
    highlights: [
      'Built Angular and TypeScript interfaces on Java and Kotlin Spring Boot services with PostgreSQL.',
      'Implemented Kafka event streaming and OAuth 2.0 secured APIs.',
      'Containerized services with Docker on Kubernetes, with Jenkins and Gradle pipelines and Terraform for infrastructure.'
    ],
    techStack: ['Angular', 'TypeScript', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    title: 'Java / J2EE Developer',
    company: 'AIG',
    location: 'Farmington, CT',
    date: 'Apr 2022 - Feb 2023',
    highlights: [
      'Built Spring Boot REST services for third-party integrations, secured with JWT and OAuth.',
      'Automated workflows on Azure with Functions, Logic Apps, Service Bus and Event Grid, with Data Factory pipelines and Cosmos DB.',
      'Deployed to OpenShift through Azure DevOps.'
    ],
    techStack: ['Spring Boot', 'Azure Functions', 'Logic Apps', 'Cosmos DB', 'Data Factory', 'OpenShift']
  },
  {
    title: 'Java Developer',
    company: 'Ewall Solution',
    location: 'Hyderabad, India',
    date: 'Jan 2017 - Nov 2021',
    highlights: [
      'Built Java applications with Spring, exposing REST and SOAP services on JBoss.',
      'Used AWS Lambda, EC2 and S3, with RabbitMQ for messaging.',
      'Set up Maven, Jenkins and GitHub Actions pipelines, with JUnit and Mockito tests.'
    ],
    techStack: ['Java', 'Spring', 'REST / SOAP', 'AWS Lambda', 'RabbitMQ', 'JBoss']
  }
];

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

const getInitialTheme = () => {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  } catch (e) {
    return 'dark';
  }
};

const CopyButton = ({ value }) => {
  const [label, setLabel] = useState('Copy');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setLabel('Copied');
    } catch (e) {
      setLabel('Copy failed');
    }
    setTimeout(() => setLabel('Copy'), 1600);
  };

  return (
    <button className="copy" type="button" onClick={handleCopy}>
      {label}
    </button>
  );
};

const Pipeline = ({ steps }) => (
  <div className="pipe-box">
    <ol className="pipe" style={{ '--n': steps.length }}>
      {steps.map(([name, detail], index) => (
        <li key={name} style={{ '--i': index }}>
          <b>{name}</b>
          <span>{detail}</span>
        </li>
      ))}
    </ol>
  </div>
);

const TechStack = ({ items }) => (
  <div className="tech-stack">
    {items.map((tech) => (
      <span key={tech} className="tech-badge">{tech}</span>
    ))}
  </div>
);

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const Portfolio = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  // Light / dark mode: dark is the default, the visitor's choice is remembered.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      /* storage unavailable: the toggle still works for this visit */
    }
  }, [theme]);

  // Custom cursor: the ring follows the pointer, the dot trails it. Mouse only.
  useEffect(() => {
    const ring = cursorRef.current;
    const dot = followerRef.current;
    let x = 0;
    let y = 0;
    let dx = 0;
    let dy = 0;
    let frame = null;

    const tick = () => {
      dx += (x - dx) * 0.2;
      dy += (y - dy) * 0.2;
      dot.style.transform = `translate(${dx}px, ${dy}px)`;
      if (Math.abs(x - dx) > 0.3 || Math.abs(y - dy) > 0.3) {
        frame = requestAnimationFrame(tick);
      } else {
        frame = null;
      }
    };

    const handleMouseMove = (e) => {
      document.documentElement.classList.add('has-cursor');
      x = e.clientX;
      y = e.clientY;
      ring.style.transform = `translate(${x}px, ${y}px)`;
      if (frame === null) frame = requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const toggleTheme = () => setTheme((current) => (current === 'light' ? 'dark' : 'light'));

  return (
    <>
      <div className="bg-grid"></div>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-follower" ref={followerRef}></div>

      {/* Navigation */}
      <header className="nav">
        <div className="container">
          <a className="nav-brand" href="#top">Chandu <span>Marru</span></a>
          <nav className="nav-links" aria-label="Sections">
            <a href="#ai">AI Systems</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
            <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label="Switch color mode">
              <i></i>
              <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
            </button>
            <a className="nav-cta" href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <div className="label">Senior Java Full Stack Developer / AI Engineer</div>
              <h1>Chandu <span className="gradient-text">Marru</span></h1>
              <p className="tagline">
                <strong>9+ years</strong> building cloud-native applications with Java, Spring Boot, AWS and modern
                frontend frameworks. Today I build <strong>production RAG and AI agent systems</strong>, and the
                backend services and infrastructure that run them.
              </p>

              <div className="contact-info">
                <a href={`mailto:${EMAIL}`} className="contact-item"><b>&gt;</b>{EMAIL}</a>
                <a href={PHONE_HREF} className="contact-item"><b>&gt;</b>{PHONE}</a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact-item"><b>&gt;</b>LinkedIn</a>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact-item"><b>&gt;</b>GitHub</a>
              </div>

              <div className="cta-buttons">
                <a href="#ai" className="btn">AI Systems</a>
                <a href="#experience" className="btn secondary">View Experience</a>
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="btn plain">Download Resume</a>
              </div>
            </div>

            <div className="avatar">
              <div className="avatar-inner">
                {PHOTO_URL ? (
                  <img src={PHOTO_URL} alt="Chandu Marru" />
                ) : (
                  <span className="gradient-text">CM</span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="container">
          <div className="stats">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Systems */}
        <section className="section" id="ai">
          <div className="container">
            <div className="section-header">
              <div className="section-number">01 / AI ENGINEERING</div>
              <h2>AI Systems</h2>
              <p className="section-subtitle">
                What I am building now. Each diagram follows one request from the moment it arrives to the moment it
                is answered or deployed.
              </p>
            </div>

            <div className="systems">
              {systems.map((system) => (
                <article key={system.title} className="system">
                  <div className="system-head">
                    <h3>{system.title}</h3>
                    <span className={system.statusAlt ? 'status alt' : 'status'}>{system.status}</span>
                  </div>
                  <p className="system-what">{system.description}</p>
                  <Pipeline steps={system.pipeline} />
                  {system.numbers && (
                    <div className="nums">
                      {system.numbers.map(([value, caption]) => (
                        <div key={caption}>
                          <b>{value}</b>
                          <span>{caption}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {system.points && (
                    <ul className="points">
                      {system.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                  <TechStack items={system.techStack} />
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section" id="skills">
          <div className="container">
            <div className="section-header">
              <div className="section-number">02 / EXPERTISE</div>
              <h2>Technical Arsenal</h2>
              <p className="section-subtitle">
                A toolkit spanning backend development, AI engineering, cloud architecture, frontend and DevOps.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((category) => (
                <div key={category.title} className="skill-category">
                  <h3>{category.title}</h3>
                  <div className="skill-tags">
                    {category.tags.map((tag) => (
                      <span key={tag} className="skill-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="section" id="experience">
          <div className="container">
            <div className="section-header">
              <div className="section-number">03 / CAREER JOURNEY</div>
              <h2>Professional Experience</h2>
              <p className="section-subtitle">
                Enterprise systems across telecommunications, banking, distribution and insurance.
              </p>
            </div>

            <div className="timeline">
              {experiences.map((exp) => (
                <div key={exp.company} className="timeline-item">
                  <div className="timeline-header">
                    <div className="timeline-title">
                      <h3>{exp.title}</h3>
                      <div className="company">{exp.company}</div>
                      <div className="location">{exp.location}</div>
                    </div>
                    <div className="timeline-date">{exp.date}</div>
                  </div>
                  <div className="timeline-content">
                    <ul>
                      {exp.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    <TechStack items={exp.techStack} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Contact */}
      <footer className="contact" id="contact">
        <div className="container">
          <h2>Let's Build <span className="gradient-text">Something Great</span></h2>
          <p className="contact-sub">Open to exciting opportunities and collaborations.</p>
          <ul className="reach">
            <li>
              <div>
                <small>Email</small>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>
              <CopyButton value={EMAIL} />
            </li>
            <li>
              <div>
                <small>Phone</small>
                <a href={PHONE_HREF}>{PHONE}</a>
              </div>
              <CopyButton value={PHONE} />
            </li>
            <li>
              <div>
                <small>LinkedIn</small>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">linkedin.com/in/chandumarru964232</a>
              </div>
            </li>
            <li>
              <div>
                <small>GitHub</small>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">github.com/chandurao77</a>
              </div>
            </li>
          </ul>
          <div className="copyright">&copy; {new Date().getFullYear()} Chandu Marru. Crafted with precision and passion.</div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
