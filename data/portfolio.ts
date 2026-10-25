export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  filterTags: string[];
  description: string;
  features: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  implementation: string[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  location?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export interface LeadershipRole {
  organization: string;
  role: string;
  duration: string;
  description: string;
  responsibilities: string[];
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export const portfolioData = {
  personal: {
    name: "Amritanshu Shandilya",
    shortName: "Amritanshu",
    monogram: "AS",
    headline: "Full-Stack Developer | AI Enthusiast | Problem Solver",
    heroHeading: "Building Intelligent Products & Scalable Web Experiences.",
    bio: "I'm an Electronics and Communication Engineering student at Siddaganga Institute of Technology with a strong interest in software engineering, full-stack development, and AI-powered systems. I enjoy building practical applications, exploring system architecture, and solving algorithmic problems. Through my projects, I've worked with modern web technologies, real-time communication, semantic retrieval, databases, and AI-assisted tools.",
    shortBio:
      "I'm an ECE undergraduate passionate about full-stack engineering, AI-powered applications, and solving challenging problems through code.",
    interests: [
      "Software engineering and scalable web architecture",
      "AI applications, retrieval systems, and LLM integrations",
      "System design, databases, and real-time communication",
      "Competitive programming and algorithmic problem solving",
    ],
    careerGoals:
      "I aim to grow as a full-stack engineer building reliable, user-focused products—combining strong CS fundamentals with modern AI tooling and thoughtful system design.",
    availability: "Open for Opportunities & Collaborations",
    isAvailable: true,
    email: "amritanshu.1si23ec002@gmail.com",
    location: "Tumkur, Karnataka, India",
    college: "Siddaganga Institute of Technology",
    githubUsername: "AmritShan06",
    githubUrl: "https://github.com/AmritShan06",
    leetcodeUrl: "https://leetcode.com/u/AmritShan/",
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://amritanshu.dev",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ] as NavItem[],

  education: [
    {
      institution: "Siddaganga Institute of Technology",
      degree: "B.E. in Electronics and Communication Engineering",
      duration: "September 2023 – Present",
      location: "Tumkur, Karnataka",
    },
    {
      institution: "Trident Public School",
      degree: "Higher Secondary Education",
      duration: "May 2021 – March 2023",
    },
    {
      institution: "DAV Public School",
      degree: "Senior Secondary Education",
      duration: "April 2020 – March 2021",
    },
  ] as Education[],

  skillCategories: [
    {
      title: "Programming Languages",
      description:
        "Core languages used for systems, competitive programming, and application logic.",
      skills: ["C++", "JavaScript"],
    },
    {
      title: "Computer Science Fundamentals",
      description:
        "Theoretical grounding in algorithms, system architecture, and network communications.",
      skills: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "Operating Systems",
        "Computer Networks",
        "Database Management Systems",
      ],
    },
    {
      title: "Web Development",
      description:
        "Modern client and server technologies for responsive, dynamic web platforms.",
      skills: [
        "HTML",
        "CSS",
        "React",
        "Node.js",
        "Express.js",
        "REST APIs",
        "Tailwind CSS",
      ],
    },
    {
      title: "Databases",
      description:
        "Relational and document storage solutions optimized for persistence and query speed.",
      skills: ["MongoDB", "MySQL", "SQL"],
    },
    {
      title: "AI, Retrieval and Infrastructure",
      description:
        "Semantic search pipelines, vector retrieval engines, and containerized microservices.",
      skills: [
        "FastAPI",
        "Qdrant",
        "Vector Embeddings",
        "Semantic Retrieval",
        "Docker",
        "GitPython",
      ],
    },
    {
      title: "Developer Tools",
      description:
        "Essential toolchain for version control, debugging, and collaborative engineering.",
      skills: ["VS Code", "Git", "GitHub"],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "codebase-rag",
      slug: "codebase-rag",
      title: "Codebase RAG",
      category: "AI / Full-Stack Development",
      filterTags: ["AI", "Full-Stack"],
      description:
        "An AI-powered codebase exploration platform that enables developers to query Git repositories in natural language using context-aware retrieval and LLM-powered question answering.",
      features: [
        "Natural-language codebase querying",
        "Incremental repository indexing",
        "Vector embeddings and Qdrant integration",
        "Hybrid semantic and lexical retrieval",
        "REST APIs built with FastAPI",
        "Docker-based deployment",
      ],
      technologies: [
        "React",
        "FastAPI",
        "MongoDB",
        "Qdrant",
        "Docker",
        "GitPython",
      ],
      githubUrl: "https://github.com/AmritShan06",
      liveUrl: undefined,
      badge: "Featured AI Project",
      overview:
        "Codebase RAG helps developers explore unfamiliar repositories by asking questions in natural language and receiving answers grounded in indexed source code.",
      problem:
        "Large codebases are difficult to navigate quickly, especially when onboarding or debugging across many files and modules.",
      solution:
        "The platform indexes Git repositories, embeds code chunks into a vector store, and combines semantic retrieval with LLM-powered answering through a FastAPI backend and React frontend.",
      architecture:
        "GitPython extracts and chunks repository files → embeddings are stored in Qdrant → user queries trigger hybrid retrieval → FastAPI serves results to the React client, with MongoDB for metadata and Docker for deployment.",
      implementation: [
        "Incremental repository indexing with GitPython",
        "Vector embeddings and Qdrant for semantic search",
        "Hybrid semantic and lexical retrieval pipeline",
        "REST APIs on FastAPI with MongoDB persistence",
        "Containerized services with Docker",
      ],
    },
    {
      id: "flowai",
      slug: "flowai",
      title: "FlowAI",
      category: "AI / Developer Tools",
      filterTags: ["AI", "Full-Stack"],
      description:
        "An AI-assisted architecture and flow diagram visualizer that helps users design, edit, and manage system diagrams through an interactive drag-and-drop interface.",
      features: [
        "Interactive node-and-edge diagrams",
        "Zoom, pan, and dynamic connections",
        "AI-generated architecture suggestions",
        "Secure JWT authentication",
        "Persistent storage using MySQL",
      ],
      technologies: [
        "React",
        "React Flow",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT",
      ],
      githubUrl: "https://github.com/AmritShan06",
      liveUrl: undefined,
      badge: "Interactive Tool",
      overview:
        "FlowAI is a visual workspace for designing system architectures with drag-and-drop diagrams, dynamic connections, and AI-assisted layout suggestions.",
      problem:
        "Sketching and iterating on system architecture often happens in disconnected tools without persistence or intelligent guidance.",
      solution:
        "A React Flow–based editor with JWT-secured APIs, MySQL persistence, and AI-generated architecture suggestions accessible through an Express.js backend.",
      architecture:
        "React client with React Flow canvas → Express.js REST API with JWT auth → MySQL stores diagrams and user data → AI suggestion service integrates with the diagram editor.",
      implementation: [
        "Drag-and-drop diagram editing with React Flow",
        "Dynamic node connections, zoom, and pan controls",
        "JWT authentication on Express.js routes",
        "MySQL schema for diagram persistence",
        "AI-generated architecture suggestions in the editor workflow",
      ],
    },
    {
      id: "snapchat",
      slug: "snapchat",
      title: "SnapChat",
      category: "Full-Stack / Real-Time Applications",
      filterTags: ["Full-Stack", "Real-Time"],
      description:
        "A real-time chat application featuring instant bidirectional messaging, secure authentication, and scalable API-driven communication.",
      features: [
        "Real-time messaging using Socket.IO",
        "JWT-based authentication",
        "RESTful APIs",
        "MongoDB persistence",
        "React Context API for state management",
      ],
      technologies: [
        "React",
        "Node.js",
        "Socket.IO",
        "MongoDB",
        "JWT",
        "Express.js",
      ],
      githubUrl: "https://github.com/AmritShan06",
      liveUrl: undefined,
      badge: "Real-Time System",
      overview:
        "SnapChat is a full-stack messaging application with instant bidirectional chat, authenticated sessions, and MongoDB-backed message history.",
      problem:
        "Building reliable real-time chat requires coordinated authentication, persistent storage, and low-latency event delivery.",
      solution:
        "Socket.IO powers live messaging while Express.js REST APIs and JWT secure user sessions; MongoDB stores conversations and React Context manages client state.",
      architecture:
        "React client (Context API) ↔ Socket.IO event channel for live messages ↔ Express.js REST + JWT auth ↔ MongoDB for users and messages.",
      implementation: [
        "Bidirectional messaging with Socket.IO",
        "JWT authentication middleware on Express.js",
        "REST APIs for user and chat operations",
        "MongoDB collections for message persistence",
        "React Context API for shared client state",
      ],
    },
  ] as Project[],

  leadership: [
    {
      organization: "Team PathFinder, Event Management Club",
      role: "Design Team Lead",
      duration: "December 2023 – Present",
      description:
        "Leading visual design and creative direction for club events and outreach, coordinating with organizers to deliver cohesive event experiences.",
      responsibilities: [
        "Lead design planning for club events and campaigns",
        "Create visual assets and branding for event promotion",
        "Collaborate with event management and technical teams",
      ],
      tags: ["Leadership", "Design", "Events"],
    },
  ] as LeadershipRole[],
};

export function getProjectBySlug(slug: string): Project | undefined {
  return portfolioData.projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = portfolioData.projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? portfolioData.projects[index - 1] : null,
    next:
      index < portfolioData.projects.length - 1
        ? portfolioData.projects[index + 1]
        : null,
  };
}

export const projectFilterOptions = [
  "All",
  "AI",
  "Full-Stack",
  "Real-Time",
] as const;

export type ProjectFilter = (typeof projectFilterOptions)[number];
