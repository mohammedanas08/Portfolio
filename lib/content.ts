// Single source of truth for portfolio content (sourced from the existing site and resume PDF).

export const profile = {
  name: "Mohammed Anas",
  headline: "Computer Science Engineering Graduate",
  roles: ["Python Developer", "Full Stack Developer", "AI/ML Enthusiast"],
  summary:
    "I build Python and web applications, automation workflows, data dashboards and AI-powered features, with hands-on experience from two internships and three end-to-end projects.",
  email: "its.mohammed.anas.08@gmail.com",
  phone: "+91 7899151788",
  location: "Bhatkal, Karnataka, India",
  github: "https://github.com/mohammedanas08",
  linkedin: "https://www.linkedin.com/in/mohammadanas04/",
  resume: "/Mohd%20Anas.pdf",
  keyTech: ["Python", "React.js", "Next.js", "SQL", "TensorFlow", "Power BI"],
};

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certificates", id: "certificates" },
  { label: "Contact", id: "contact" },
] as const;

export const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript (ES6+)", "Java", "C", "SQL"] },
  { title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] },
  {
    title: "Backend & APIs",
    items: ["Spring Boot", "Node.js", "Express.js", "Flask", "RESTful APIs", "JWT Auth", "MVC"],
  },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "Database Design", "Query Optimization"] },
  {
    title: "Data & Analytics",
    items: ["Pandas", "NumPy", "Power BI", "Excel", "Data Cleaning", "EDA"],
  },
  {
    title: "AI / ML",
    items: ["TensorFlow", "Keras", "OpenCV", "MediaPipe", "Gemini AI", "Generative AI"],
  },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook"] },
];

export const experience = [
  {
    role: "Data Analytics Intern",
    company: "Procraft",
    place: "Dubai, UAE (Remote)",
    period: "Dec 2025 – Mar 2026",
    tech: ["Python", "SQL", "Pandas", "Excel", "Power BI"],
    points: [
      "Built data-processing pipelines with Python, SQL and Pandas to transform, validate and analyze business datasets.",
      "Created automated data validation and monitoring workflows to improve data quality and reporting accuracy.",
      "Designed and optimized SQL queries, joins and aggregations for analytics use cases.",
      "Built interactive Power BI dashboards for revenue tracking, customer segmentation and sales performance.",
    ],
  },
  {
    role: "Python & Generative AI Developer Trainee",
    company: "Golden Bird Education",
    place: "Mumbai, India (Remote)",
    period: "Feb 2025 – May 2025",
    tech: ["Python", "LLM APIs", "REST APIs", "Git", "GitHub"],
    points: [
      "Developed interactive AI applications using LLMs, prompt engineering and dynamic user interfaces.",
      "Built Python automation workflows integrated with Generative AI APIs.",
      "Implemented CRUD systems and REST API workflows for application and data management.",
      "Designed REST API integrations and data pipelines supporting AI-driven applications.",
    ],
  },
];

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  tags: string[];
  github: string;
  /**
   * Live demo link.
   *  - Set a URL string to show a working "Live demo" button.
   *  - Use `null` to show a disabled "Live demo (coming soon)" placeholder.
   *  - Omit the field to hide the button entirely.
   */
  demo?: string | null;
  /** Full-width card at the top of the grid. */
  featured?: boolean;
  image?: { src: string; alt: string; /** "contain" shows the whole image; default "cover" fills the panel. */ fit?: "cover" | "contain" };
};

export const projects: Project[] = [
  {
    title: "Zestora — Hyperlocal Food Delivery & Quick-Commerce",
    summary:
      "A food delivery and grocery platform for Bhatkal and the Karnataka coast, with connected experiences for customers, restaurant partners, delivery riders and admins.",
    highlights: [
      "Customers browse restaurants, order food and groceries, and track orders live",
      "Server-side pricing and a fixed order state machine; client-sent prices are ignored",
      "JWT auth with rotating refresh tokens, role-based access and Razorpay payments",
      "Partner, rider (delivery OTP) and admin dashboards in a single product",
    ],
    tags: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "WebSocket",
      "Razorpay",
    ],
    github: "https://github.com/mohammedanas08/ZESTORA---Food-Mart",
    // Live link. Set to `null` to show a disabled "Live demo (coming soon)" button instead.
    demo: "https://frontend-five-eta-j493wcam1t.vercel.app/",
    featured: true,
    image: {
      src: "/zestora.webp",
      alt: "Illustration of the Zestora app showing its three partner restaurants and four user roles",
      fit: "contain",
    },
  },
  {
    title: "FlexiFit — AI Personalized Fitness Coach",
    summary:
      "A fitness platform that uses computer vision to coach workouts in real time and Gemini AI to personalize plans.",
    highlights: [
      "Real-time pose estimation with posture correction and repetition counting",
      "Personalized workout and diet recommendations via Gemini AI",
      "Secure full-stack app with authentication and progress analytics",
    ],
    tags: ["React.js", "Next.js", "TensorFlow.js", "MediaPipe", "OpenCV", "Gemini AI"],
    github: "https://github.com/mohammedanas08/Flexi-fit-Ai-Fitness-Trainer",
    image: { src: "/flexifit.png", alt: "FlexiFit project artwork" },
    featured: true,
  },
  {
    title: "AI Sign Language Detection",
    summary:
      "A real-time sign language recognition system that converts hand gestures to text for accessibility.",
    highlights: [
      "Hand tracking and image preprocessing with MediaPipe and OpenCV",
      "CNN gesture classification trained and optimized in TensorFlow/Keras",
      "Data augmentation and model evaluation to improve robustness",
    ],
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "MediaPipe", "NumPy", "CNN"],
    github: "https://github.com/mohammedanas08/AI-Sign-Language",
  },
  {
    title: "E-Commerce Sales Analysis Dashboard",
    summary:
      "An interactive dashboard analyzing transaction data to surface revenue patterns, customer behavior and category trends.",
    highlights: [
      "KPI cards, drill-through reports and slicers for business analysis",
      "Data cleaning, transformation and relationship modeling",
      "Custom visualizations for sales performance monitoring",
    ],
    tags: ["Power BI", "Excel", "Data Analytics"],
    github: "https://github.com/mohammedanas08/E-COM-SALES-ANALYSIS",
  },
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  school: "Anjuman Institute of Technology and Management",
  place: "Bhatkal, Karnataka, India",
  period: "Dec 2022 – Jun 2026",
  cgpa: "7.91 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "DBMS",
    "OOP",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ],
};

export const languages = ["English (Professional)", "Hindi (Native)", "Urdu (Native)", "Kannada (Basic)"];
