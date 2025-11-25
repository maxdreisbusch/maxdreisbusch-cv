import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Max Dreisbusch",
  initials: "MD",
  location: "Aschaffenburg, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Aschaffenburg",
  about: "Architecting scalable systems and modernizing complex legacy environments is at the core of my work. I combine deep technical expertise with a pragmatic, product-driven mindset to help teams ship high-quality software.",
  summary: (
    <>
    I am a Senior Software Engineer with deep expertise in system architecture, scalable infrastructure, and DevOps automation. Over the years, I have led initiatives to modernize complex legacy environments, transform outdated delivery pipelines into cloud-native CI/CD systems, and introduce engineering practices that significantly improve team productivity and long-term maintainability. My work spans the full technology stack — from designing robust backend services and secure API architectures to building modern, modular frontend applications with React, micro frontends, and shared design systems.<br />
    Beyond hands-on engineering, I am passionate about enabling teams. I regularly drive cross-functional collaboration, provide technical details in decision-making processes, and represent engineering interests to stakeholders when needed. I enjoy creating clarity in complex systems, simplifying workflows through automation, and fostering a culture of quality, security, and ownership.<br />
    With experience ranging from enterprise-scale software modernization to building and launching my own mobile product as CEO/CTO, I combine strong technical depth with an entrepreneurial mindset. I value clean architecture, thoughtful abstractions, and solutions that balance innovation with reliability. Ultimately, I am motivated by building systems — technical and organizational — that empower teams to ship great products efficiently and sustainably.
  </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/18073989?v=4",
  personalWebsiteUrl: "https://max-dreisbusch.de",
  contact: {
    email: "ax.dreisbusch@gmx.de",
    tel: "+49 151 12010355",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/maxdreisbusch",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/max-dreisbusch-67788281/",
        icon: "linkedin",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/max.dreisbusch",
        icon: "globe",
      },
    ],
  },
  education: [
    {
      school: "Wilhelm Büchner Hochschule - Distributed & Mobile Systems",
      degree: "Master of science",
      thesisTitle: "Prototypical implementation of an AI-based system to automatically generate a book draft using a large language model",
      thesisTags: ["AI", "React", "Typescript", "Node.js", "LLM", "API"],
      start: "2020",
      end: "2024",
    },
    {
      school: "DHBW Mannheim - Business informatics Sales & Consulting",
      degree: "Bachelor of science",
      thesisTitle: "Azure Service Fabric as an alternative infrastructure for reducing costs in the operation of windows-based cloud applications",
      thesisTags: ["K8s", "Docker", ".Net", "C#", "Azure Service Fabric", "Azure", "AWS"],
      start: "2016",
      end: "2019",
    },
    {
      school: "Friedrich Dessauer Gymnasium Aschaffenburg - MINT",
      degree: "Abitur",
      thesisTitle: "Design and Implementation of a Tennis Court Booking System with Online Payments, Lighting, and Heating Control",
      thesisTags: ["✍️ German", "✍️ Math", "✍️ Informatics", "Business & Law" ,"English"],
      start: "2007",
      end: "2016",
    },
  ],
  work: [
    {
      company: "Sage GmbH",
      link: "https://sage.com",
      badges: ["C# .NET", "Azure DevOps", "GitHub", "GitHub Workflows", "GitHub Actions", "cloudsmith", "MSBuild", "MSAccess", "typescript"],
      title: "Senior Software Engineer",
      start: "December 2023",
      end: null,
      description: (
        <>
          Leading the modernization of legacy DevOps processes by introducing contemporary technologies while ensuring a seamless experience for customers. The goal is to enable the development department to operate entirely without internal server resources or VPN dependencies. This includes migrating outdated build systems to modern, cloud-based CI/CD pipelines.
          <ul className="list-inside list-disc">
            <li>
              Analyze existing development and deployment processes
            </li>
            <li>
              Optimize workflows toward standardized, efficient practices
            </li>
            <li>
              Introduce modern paradigms such as Semantic Versioning
            </li>
            <li>
              Train colleagues in Git and GitHub best practices
            </li>
            <li>
              Migrate source control from TFVC to Git
            </li>
            <li>
              Rebuild and migrate legacy build pipelines (VB6, MS Access, .NET, etc.) to GitHub Actions
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "sevDesk GmbH",
      link: "https://sevdesk.de",
      badges: [
        "Remote",
        "React",
        "TypeScript",
        "Micro Frontend",
        "Module Federation",
        "Architecture",
        "Proposals"
      ],
      title: "Senior Software Engineer",
      start: "August 2022",
      end: "November 2023",
      description: (
        <>
          As a Senior Software Engineer, I focus on gradually migrating our Angular frontend to React. To enable seamless integration and maintain a clean, modular architecture, I introduced Module Federation, allowing both technologies to coexist without overlapping responsibilities.
          <br />In the absence of dedicated engineering managers, I also took on leadership responsibilities — representing the team in discussions with directors and C-level executives, contributing to both technical decision-making and team-related matters.
        </>
      ),
    },
    {
      company: "Play Social UG (haftungsbeschränkt)",
      link: "",
      badges: ["Founder", "CEO", "Technical Lead", "React Native", "node.js", "TRPC", "Kubernetes"],
      title: "CEO & CTO - building & selling a Smartphone App",
      start: "2022",
      end: "2025",
      description: (
        <>
          Contributed to the design and development of Huddle, a social app that helps friends organize activities and discover local events. Responsible for core technical implementation and overall app architecture in collaboration with a small cross-functional team.
        </>
      ),
    },
    {
      company: "Sage GmbH",
      link: "https://sage.com",
      badges: ["React", "Redux", "TypeScript", "Azure DevOps", "Security Champion"],
      title: "Software Engineer",
      start: "2019",
      end: "July 2022",
      description: (
        <>
        In my role as a Software Engineer at Sage GmbH, I focus on frontend development using React, TypeScript, and Redux. I also manage our team’s Git repositories and maintain the build and release pipelines on the Azure DevOps Server. Additionally, I have led communication and collaboration between national and international development teams.
        <br />
        As a Security Champion, I am responsible for ensuring code quality and securing our frontend applications. My work included
          <ul className="list-inside list-disc">
            <li>
              identifying and mitigating vulnerabilities such as XSS and injection attacks
            </li>
            <li>
              managing known risks from third-party dependencies
            </li>
            <li>
              maintaining robust security headers
            </li>
            <li>implementing and optimizing OAuth-based authentication and authorization flows</li>
          </ul>
        </>
      ),
    },
    {
      company: "Sage GmbH",
      link: "https://sage.com/",
      badges: [".NET", "Angular", "DevOps", "TypeScript", "Kubernetes", "Docker", "Alexa", "Azure", "AWS"],
      title: "Apprentice - Software Engineer",
      start: "2016",
      end: "2019",
      description: (
        <>
          Working on modern web projects as well as maintaining C# & VB .NET 4.8 source code during the practical phases of my dual studies.
          As part of my bachelor’s thesis, “Azure Service Fabric as an Alternative Infrastructure for Reducing Cloud Application Costs,” I explored the feasibility of transforming an on-premise solution into a cloud-based architecture and developed a proof of concept to validate the approach.
        </>
      ),
    },
    
    
    
    
  ],
  skills: 
    [
  {
    "title": "🧭 working methods",
    "skills": [
      "Agil methods (Scrum, Kanban)",
      "DevOps",
      "Design Systems",
      "Migration Angular → React",
      "Migration TFVC → Git"
    ]
  },
  {
    "title": "🧱 infrastructure",
    "skills": [
      "System Architecture",
      "Cloud Infrastructure",
      "Azure",
      "AWS",
      "fly.io",
      "Terraform",
      "Kubernetes",
      "Docker"
    ]
  },
  {
    "title": "🔧 ecosystem",
    "skills": [
      "GitHub",
      "GitLab",
      "Azure DevOps",
      "Jira",
      "Confluence",
      "Microsoft Planner",
      "Microsoft 365"
      , "npm", "NuGet"
    ]
  },
  {
    title: "🌐 languages",
    skills: ["typescript", "javascript", "YAML", "c#", "visual basic .NET", ".NET", ".NET Framework"]
  },
  {
    "title": "🎨 frontend",
    "skills": [
      "React","Next.js",
      "React Native","Expo",
      "Redux",
      "TanStack *",
      "Tailwind CSS",
      "MantineUI"
    ]
  },
  {
    "title": "🛠 backend & API",
    "skills": [
      "Node.js",
      "express",
      "REST",
      "TRPC",
      "WebSockets"
    ]
  },
  {
    "title": "🔐 security & identity",
    "skills": [
      "IAM",
      "OAuth",
      "Auth0",
      "Okta",
      "Ory"
    ]
  },
  {
    "title": "📊 monitoring",
    "skills": [
      "Grafana", "New relic", "prometheus"
    ]
  },
  {
    "title": "📦 code-quality & security",
    "skills": [
      "SonarQube",
      "CodeQL",
      "Fortify"
    ]
  },

  ],
  projects: [
    {
      title: "Huddle",
      techStack: ["TypeScript", "TRPC", "React Native", "express", "terraform", "kubernetes", "expo", "PostgreSQL"],
      description:
        "App for meeting friends easily and checking what's up in your city",
    },
    {
      title: "Mein TC Schönbusch",
      techStack: [
        "TypeScript",
        "Next.js",
        "React Native",
        "TRPC",
        "Prisma",
        "mantine",
        "MySQL",
        "fly.io",
        "OAuth",
        "Auth0"
      ],
      description:
        "Platform for online club management including court bookings, payments, benefits and control interfaces (light, radiators, access)",
      link: {
        label: "mein.tc-schoenbusch.de",
        href: "https://mein.tc-schoenbusch.de/",
      },
    },
    {
      title: "SanLucar Ladies Open",
      techStack: ["Next.js", "Tailwind CSS"],
      description:
        "Website created with next.js connected to a wordpress blog to display latest news of the tournament",
      link: {
        label: "SanLucar Ladies Open",
        href: "https://www.sanlucar-open.de/",
      },
    },
    {
      title: "TV Großwallstadt",
      techStack: ["Wordpress"],
      description:
        "Website initially created with Wordpress for 2. HBL team TV Großwallstadt",
      link: {
        label: "TV Großwallstadt - Handball Bundesliga",
        href: "https://www.tvgrosswallstadt.de/",
      },
    },
    {
      title: "alvaro Versicherungsmakler GmbH",
      techStack: ["Next.js"],
      description:
        "Website & Microsoft 365 management for international insurance broker",
      link: {
        label: "alvaro Versicherungsmakler GmbH",
        href: "https://www.lvaro-versicherungsmakler.de/",
      },
    },
  ],

  volunteer: [
    {
      organisation: "TC Schönbusch Aschaffenburg e.V.",
      works: [
        "since 2024 - Vice President Marketing & Events",
        "since 2024 - interim youth coordinator",
        "since 2008 - IT Infrastructure",
        "since 2010 - Website & club management portal",
        "May 2019 - April 2024 - youth coordinator"],
        start: "2008",
        end: "now",
      },
    
    {
      organisation: "SanLucar Ladies Open",
      works: ["Tournament Management", "Ballkids & LineUmpire Management", "Website", "Technical Director", "Sponsorship Relations"],
      start: "2014",
      end: "now",
    },
  ],
} as const;
