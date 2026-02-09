import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorFollowerPosition, setCursorFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setCursorFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bgGrid = document.querySelector('.bg-grid');
      if (bgGrid) {
        bgGrid.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.timeline-item, .skill-category, .stat-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const skills = [
    {
      title: 'Backend Development',
      tags: ['Java', 'Spring Boot', 'Spring Framework', 'Hibernate', 'Spring Data JPA', 'Spring Security', 'Spring Batch', 'Microservices', 'RESTful APIs', 'GraphQL', 'Node.js']
    },
    {
      title: 'Frontend Development',
      tags: ['React.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'Redux', 'Material UI', 'HTML5', 'CSS3', 'React Router']
    },
    {
      title: 'Cloud & Infrastructure',
      tags: ['AWS', 'EC2', 'Lambda', 'S3', 'RDS', 'Azure', 'Docker', 'Kubernetes', 'OpenShift', 'Terraform']
    },
    {
      title: 'Databases',
      tags: ['MySQL', 'PostgreSQL', 'MongoDB', 'DynamoDB', 'CosmosDB', 'SQL', 'NoSQL']
    },
    {
      title: 'Messaging & Streaming',
      tags: ['Apache Kafka', 'RabbitMQ', 'AWS Kinesis', 'JMS', 'Event-Driven Architecture']
    },
    {
      title: 'DevOps & CI/CD',
      tags: ['Jenkins', 'GitHub Actions', 'Maven', 'Gradle', 'Git', 'Azure DevOps', 'Ansible', 'CloudFormation']
    },
    {
      title: 'Testing & Quality',
      tags: ['JUnit', 'Mockito', 'Cucumber', 'Jest', 'TDD', 'BDD', 'SonarQube']
    },
    {
      title: 'Monitoring & Observability',
      tags: ['ELK Stack', 'CloudWatch', 'Log4J', 'Swagger', 'Postman']
    }
  ];

  const experiences = [
    {
      title: 'Senior Java Full Stack Developer',
      company: 'Comcast',
      location: 'Philadelphia, PA',
      date: 'Oct 2025 - Present',
      highlights: [
        'Architected cloud-native applications using Java 11 and Python 3 in distributed AWS environment, improving system scalability by 40%',
        'Engineered AWS Step Functions workflows orchestrating Lambda functions and containerized services, reducing processing time by 35%',
        'Implemented centralized logging framework with ELK stack and MDC, reducing MTTR by 50% for production issues',
        'Built serverless Lambda functions integrated with DynamoDB and S3, processing 1M+ daily requests',
        'Automated CI/CD pipelines with Concourse and GitHub Actions, achieving 99.9% deployment success rate',
        'Mentored 5 junior engineers on AWS best practices and microservices architecture'
      ],
      techStack: ['Java 11', 'Python 3', 'Spring Boot', 'AWS Lambda', 'DynamoDB', 'Step Functions', 'ELK Stack', 'Docker', 'GitHub Actions']
    },
    {
      title: 'Senior Java Full Stack Developer',
      company: 'TD Bank',
      location: 'Mt. Laurel, NJ',
      date: 'Sep 2024 - Sep 2025',
      highlights: [
        'Designed microservices architecture using Spring Boot, improving system modularity and reducing deployment time by 60%',
        'Built real-time event processing pipeline with AWS Kinesis, handling 500K+ events per day',
        'Developed React.js frontend applications with Redux state management, enhancing user experience across 50+ components',
        'Created GraphQL APIs reducing data over-fetching by 70% and improving frontend performance',
        'Implemented Apache Kafka for asynchronous messaging, improving system responsiveness by 45%',
        'Optimized Hibernate ORM configurations, reducing query latency by 30%',
        'Built Node.js BFF services supporting API aggregation and service coordination'
      ],
      techStack: ['Spring Boot', 'React.js', 'GraphQL', 'AWS Kinesis', 'Kafka', 'Node.js', 'MySQL', 'MongoDB', 'Jenkins']
    },
    {
      title: 'Java Full Stack Developer',
      company: 'Win Supply',
      location: 'Dayton, OH',
      date: 'Jul 2023 - Aug 2024',
      highlights: [
        'Developed Angular-based responsive UIs with TypeScript and Material UI, serving 100K+ users',
        'Implemented Kafka event-driven architecture for large-scale data streaming, processing 2M+ events daily',
        'Secured APIs with OAuth 2.0 authentication, ensuring compliance with security standards',
        'Containerized microservices with Docker and orchestrated deployments on Kubernetes',
        'Built CI/CD pipelines with Jenkins and Gradle, reducing deployment time from hours to minutes',
        'Integrated Terraform for infrastructure as code, ensuring consistent environment provisioning'
      ],
      techStack: ['Angular', 'TypeScript', 'Spring Boot', 'Kafka', 'Docker', 'Kubernetes', 'OAuth 2.0', 'PostgreSQL']
    },
    {
      title: 'J2EE Developer',
      company: 'AIG',
      location: 'Farmington, CT',
      date: 'Apr 2022 - Feb 2023',
      highlights: [
        'Built RESTful web services for seamless integration with third-party platforms',
        'Designed Azure Data Factory ETL pipelines processing TB-scale data for analytics',
        'Implemented Azure Logic Apps for workflow automation, reducing manual processing by 80%',
        'Developed serverless Azure Functions for event-driven backend automation',
        'Integrated CosmosDB for globally distributed, low-latency data access',
        'Applied AOP for centralized logging and transaction management across microservices'
      ],
      techStack: ['Spring Boot', 'Azure', 'CosmosDB', 'Azure Functions', 'ADF', 'OpenShift', 'JUnit']
    },
    {
      title: 'Java Developer',
      company: 'Ewall Solution',
      location: 'Hyderabad, India',
      date: 'Jan 2017 - Nov 2021',
      highlights: [
        'Developed scalable Java applications using Spring Framework and MVC architecture',
        'Built AWS Lambda serverless components reducing infrastructure costs by 40%',
        'Implemented RabbitMQ for reliable asynchronous messaging in microservices',
        'Created responsive frontends using HTML5, CSS3, JavaScript, and jQuery',
        'Established CI/CD pipelines with GitHub Actions and Maven for automated deployments',
        'Practiced TDD with JUnit and Mockito, achieving 85%+ code coverage'
      ],
      techStack: ['Java', 'Spring Framework', 'AWS Lambda', 'RabbitMQ', 'SOAP', 'JavaScript', 'JBoss']
    }
  ];

  const stats = [
    { number: '8+', label: 'Years Experience' },
    { number: '50+', label: 'Technologies Mastered' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '5', label: 'Major Companies' }
  ];

  return (
    <div style={{ fontFamily: "'Space Mono', monospace", background: '#0a0a0a', color: '#ffffff', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;600;700;800&display=swap');

        :root {
            --primary: #00ff88;
            --secondary: #0066ff;
            --dark: #0a0a0a;
            --gray: #1a1a1a;
            --light-gray: #2a2a2a;
            --text: #ffffff;
            --text-dim: #a0a0a0;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Space Mono', monospace;
            background: var(--dark);
            color: var(--text);
            overflow-x: hidden;
            line-height: 1.6;
        }

        .bg-grid {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(var(--gray) 1px, transparent 1px),
                linear-gradient(90deg, var(--gray) 1px, transparent 1px);
            background-size: 50px 50px;
            opacity: 0.3;
            z-index: 0;
            animation: gridPulse 4s ease-in-out infinite;
        }

        @keyframes gridPulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.5; }
        }

        .container {
            position: relative;
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 40px;
            z-index: 1;
        }

        header {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
        }

        .hero-content {
            animation: slideUp 1s ease-out;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .label {
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            color: var(--primary);
            margin-bottom: 20px;
            display: inline-block;
            animation: fadeIn 1s ease-out 0.3s both;
        }

        h1 {
            font-family: 'Syne', sans-serif;
            font-size: clamp(3rem, 8vw, 7rem);
            font-weight: 800;
            line-height: 0.95;
            margin-bottom: 30px;
            animation: fadeIn 1s ease-out 0.5s both;
        }

        .gradient-text {
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .tagline {
            font-size: clamp(1.2rem, 2.5vw, 1.8rem);
            color: var(--text-dim);
            max-width: 800px;
            margin-bottom: 40px;
            animation: fadeIn 1s ease-out 0.7s both;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .contact-info {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
            margin-bottom: 50px;
            animation: fadeIn 1s ease-out 0.9s both;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--text-dim);
            text-decoration: none;
            transition: all 0.3s ease;
            border-bottom: 2px solid transparent;
        }

        .contact-item:hover {
            color: var(--primary);
            border-bottom-color: var(--primary);
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            animation: fadeIn 1s ease-out 1.1s both;
        }

        .btn {
            padding: 18px 40px;
            font-family: 'Space Mono', monospace;
            font-size: 1rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border: 2px solid var(--primary);
            background: transparent;
            color: var(--primary);
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            position: relative;
            overflow: hidden;
        }

        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--primary);
            transition: left 0.3s ease;
            z-index: -1;
        }

        .btn:hover::before {
            left: 0;
        }

        .btn:hover {
            color: var(--dark);
        }

        .btn.secondary {
            border-color: var(--secondary);
            color: var(--secondary);
        }

        .btn.secondary::before {
            background: var(--secondary);
        }

        section {
            padding: 120px 0;
            position: relative;
        }

        .section-header {
            margin-bottom: 80px;
        }

        .section-number {
            font-size: 1rem;
            color: var(--primary);
            letter-spacing: 2px;
            margin-bottom: 10px;
        }

        h2 {
            font-family: 'Syne', sans-serif;
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 700;
            margin-bottom: 20px;
        }

        .section-subtitle {
            font-size: 1.2rem;
            color: var(--text-dim);
            max-width: 700px;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }

        .skill-category {
            background: var(--gray);
            padding: 40px;
            border-left: 4px solid var(--primary);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .skill-category::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.1), transparent);
            transition: left 0.6s ease;
        }

        .skill-category:hover::before {
            left: 100%;
        }

        .skill-category:hover {
            background: var(--light-gray);
            transform: translateX(10px);
        }

        .skill-category h3 {
            font-family: 'Syne', sans-serif;
            font-size: 1.5rem;
            margin-bottom: 20px;
            color: var(--primary);
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .skill-tag {
            padding: 8px 16px;
            background: rgba(0, 255, 136, 0.1);
            border: 1px solid rgba(0, 255, 136, 0.3);
            font-size: 0.9rem;
            color: var(--text);
            transition: all 0.3s ease;
        }

        .skill-tag:hover {
            background: var(--primary);
            color: var(--dark);
            transform: translateY(-2px);
        }

        .timeline {
            position: relative;
            padding-left: 50px;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 2px;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
        }

        .timeline-item {
            margin-bottom: 80px;
            position: relative;
            animation: slideUp 0.8s ease-out both;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            left: -56px;
            top: 0;
            width: 14px;
            height: 14px;
            background: var(--primary);
            border: 3px solid var(--dark);
            border-radius: 50%;
            box-shadow: 0 0 20px var(--primary);
        }

        .timeline-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 20px;
            flex-wrap: wrap;
            gap: 20px;
        }

        .timeline-title {
            flex: 1;
        }

        .timeline-title h3 {
            font-family: 'Syne', sans-serif;
            font-size: 1.8rem;
            margin-bottom: 5px;
        }

        .company {
            color: var(--primary);
            font-size: 1.2rem;
            margin-bottom: 5px;
        }

        .location {
            color: var(--text-dim);
            font-size: 0.95rem;
        }

        .timeline-date {
            font-size: 0.9rem;
            color: var(--secondary);
            padding: 10px 20px;
            background: rgba(0, 102, 255, 0.1);
            border: 1px solid rgba(0, 102, 255, 0.3);
            white-space: nowrap;
        }

        .timeline-content ul {
            list-style: none;
            margin-top: 20px;
        }

        .timeline-content li {
            padding-left: 30px;
            margin-bottom: 15px;
            position: relative;
            color: var(--text-dim);
            line-height: 1.8;
        }

        .timeline-content li::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--primary);
            font-size: 1.2rem;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 25px;
            padding-top: 25px;
            border-top: 1px solid var(--light-gray);
        }

        .tech-badge {
            padding: 6px 14px;
            background: var(--light-gray);
            color: var(--text);
            font-size: 0.85rem;
            border: 1px solid var(--gray);
            transition: all 0.3s ease;
        }

        .tech-badge:hover {
            background: rgba(0, 255, 136, 0.1);
            border-color: var(--primary);
            transform: translateY(-2px);
        }

        .stats {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            margin: 80px 0;
        }

        .stat-card {
            text-align: center;
            padding: 50px 30px;
            background: var(--gray);
            border-top: 4px solid var(--primary);
            transition: all 0.4s ease;
        }

        .stat-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 255, 136, 0.2);
        }

        .stat-number {
            font-family: 'Syne', sans-serif;
            font-size: 4rem;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 10px;
        }

        .stat-label {
            font-size: 1.1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--text-dim);
        }

        footer {
            padding: 80px 0 40px;
            border-top: 1px solid var(--light-gray);
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 30px;
            margin-bottom: 40px;
        }

        .footer-text h3 {
            font-family: 'Syne', sans-serif;
            font-size: 2rem;
            margin-bottom: 10px;
        }

        .footer-links {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
        }

        .footer-link {
            color: var(--text-dim);
            text-decoration: none;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            position: relative;
        }

        .footer-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--primary);
            transition: width 0.3s ease;
        }

        .footer-link:hover {
            color: var(--primary);
        }

        .footer-link:hover::after {
            width: 100%;
        }

        .copyright {
            text-align: center;
            color: var(--text-dim);
            font-size: 0.9rem;
            padding-top: 30px;
            border-top: 1px solid var(--light-gray);
        }

        .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(10px); }
        }

        .scroll-indicator span {
            display: block;
            width: 30px;
            height: 50px;
            border: 2px solid var(--primary);
            border-radius: 25px;
            position: relative;
        }

        .scroll-indicator span::before {
            content: '';
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            width: 6px;
            height: 6px;
            background: var(--primary);
            border-radius: 50%;
            animation: scrollDot 2s infinite;
        }

        @keyframes scrollDot {
            0% { opacity: 1; top: 10px; }
            100% { opacity: 0; top: 30px; }
        }

        @media (max-width: 768px) {
            .container {
                padding: 0 20px;
            }

            h1 {
                font-size: 3rem;
            }

            .contact-info {
                flex-direction: column;
                gap: 15px;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .btn {
                width: 100%;
                text-align: center;
            }

            section {
                padding: 60px 0;
            }

            .timeline {
                padding-left: 30px;
            }

            .timeline-item::before {
                left: -36px;
            }

            .timeline-header {
                flex-direction: column;
            }

            .stat-number {
                font-size: 3rem;
            }

            .footer-content {
                flex-direction: column;
                text-align: center;
            }

            .footer-links {
                justify-content: center;
            }
        }

        .cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.15s ease;
            mix-blend-mode: difference;
        }

        .cursor-follower {
            position: fixed;
            width: 8px;
            height: 8px;
            background: var(--primary);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: all 0.05s ease;
        }
      `}</style>

      <div className="bg-grid"></div>
      <div className="cursor" style={{ left: cursorPosition.x, top: cursorPosition.y }}></div>
      <div className="cursor-follower" style={{ left: cursorFollowerPosition.x, top: cursorFollowerPosition.y }}></div>

      {/* Hero Section */}
      <header>
        <div className="container">
          <div className="hero-content">
            <div className="label">Senior Full Stack Developer</div>
            <h1>Chandu <span className="gradient-text">Marru</span></h1>
            <p className="tagline">
              Architecting scalable cloud-native applications with 8+ years of expertise in Java, Spring Boot, AWS, and modern frontend frameworks. Transforming complex business requirements into elegant, high-performance solutions.
            </p>
            
            <div className="contact-info">
              <a href="mailto:Chandum9642@gmail.com" className="contact-item">
                <span>📧</span>
                <span>Chandum9642@gmail.com</span>
              </a>
              <a href="tel:609-701-1377" className="contact-item">
                <span>📱</span>
                <span>609-701-1377</span>
              </a>
              <a href="https://www.linkedin.com/in/chandumarru964232/" target="_blank" rel="noopener noreferrer" className="contact-item">
                <span>💼</span>
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <div className="cta-buttons">
              <a href="#experience" onClick={(e) => handleSmoothScroll(e, '#experience')} className="btn">View Experience</a>
              <a href="#skills" onClick={(e) => handleSmoothScroll(e, '#skills')} className="btn secondary">Technical Skills</a>
              <a href="https://docs.google.com/document/d/1cLF2Qxks5TQnYk-thQ2ps13JI6YBsiu1/edit?usp=sharing&ouid=115833640431706346767&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="btn" style={{ borderColor: '#fff', color: '#fff' }}>
                <span style={{ marginRight: '8px' }}>📥</span> Download Resume
              </a>
              <a href="https://github.com/chandurao77" target="_blank" rel="noopener noreferrer" className="btn" style={{ borderColor: '#4285f4', color: '#4285f4' }}>
                <span style={{ marginRight: '8px' }}>💻</span> View Projects
              </a>
            </div>
          </div>
          <div className="scroll-indicator">
            <span></span>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section>
        <div className="container">
          <div className="stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="container">
          <div className="section-header">
            <div className="section-number">01 / EXPERTISE</div>
            <h2>Technical Arsenal</h2>
            <p className="section-subtitle">
              A comprehensive toolkit spanning backend development, cloud architecture, frontend engineering, and DevOps practices.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((category, index) => (
              <div key={index} className="skill-category">
                <h3>{category.title}</h3>
                <div className="skill-tags">
                  {category.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <div className="section-header">
            <div className="section-number">02 / CAREER JOURNEY</div>
            <h2>Professional Experience</h2>
            <p className="section-subtitle">
              Building enterprise-grade solutions across finance, telecommunications, insurance, and e-commerce sectors.
            </p>
          </div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
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
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    {exp.techStack.map((tech, tIndex) => (
                      <span key={tIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-text">
              <h3>Let's Build Something Great</h3>
              <p style={{ color: 'var(--text-dim)', marginTop: '10px' }}>Open to exciting opportunities and collaborations</p>
            </div>
            <div className="footer-links">
              <a href="mailto:Chandum9642@gmail.com" className="footer-link">Email</a>
              <a href="https://www.linkedin.com/in/chandumarru964232/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://github.com/chandurao77" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="tel:609-701-1377" className="footer-link">Call</a>
              <a href="https://docs.google.com/document/d/1cLF2Qxks5TQnYk-thQ2ps13JI6YBsiu1/edit?usp=sharing&ouid=115833640431706346767&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ color: 'var(--primary)' }}>
                📥 Download Resume
              </a>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2026 Chandu Marru. Crafted with precision and passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;