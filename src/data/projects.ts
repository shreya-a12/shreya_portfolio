import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: "infrasense-ai",
    title: "InfraSense AI Diagnostics",
    category: "AI & Intelligent Systems",
    shortDescription:
      "An intelligent infrastructure diagnostics platform designed to identify simulated infrastructure incidents, analyze system metrics, detect operational issues, and generate actionable recommendations.",
    fullDescription:
      "InfraSense AI Diagnostics combines a reactive dashboard with an algorithmic diagnostic engine to parse incoming telemetry, identify operational anomalies, and assist cloud engineers in incident triage. The platform evaluates live metrics against heuristic incident rules and enhances root-cause clarity via an optional AI explanation pipeline.",
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "Zod", "OpenAI API"],
    keyFeatures: [
      "Incident data input and telemetry ingestion via React frontend",
      "Rule-based diagnostic engine for real-time anomaly detection",
      "Automated detection of sustained high CPU utilization",
      "Message queue backlog identification and bottleneck alerts",
      "Repeated error clustering and log pattern detection",
      "Structured diagnostic findings and prioritized resolution recommendations",
      "Optional AI-powered natural language explanation layer",
    ],
    architectureNote:
      "Built with a modular TypeScript backend utilizing Zod schema validation to guard telemetry inputs. The diagnostic engine maps error rates and queue depths to operational remediation procedures.",
    metrics: "Sub-second triage latency",
    githubUrl: "https://github.com/shreya-a12/infrasense-ai.git",
    demoUrl: "https://infrasense-ai.demo.placeholder",
    bannerType: "infra",
  },
  {
    id: "containerguard",
    title: "ContainerGuard",
    category: "Systems & Security",
    shortDescription:
      "A container security analysis platform that scans container images, identifies vulnerabilities, evaluates security policies, and generates structured vulnerability reports.",
    fullDescription:
      "ContainerGuard automates container image vulnerability assessment by interfacing with Trivy CLI scanners, classifying CVEs by severity, validating adherence to organizational security policies, and persisting audit histories in a lightweight relational store with an interactive analytical dashboard.",
    technologies: ["Python", "FastAPI", "Trivy", "SQLite", "React", "Vite"],
    keyFeatures: [
      "Automated container image vulnerability scanning pipeline",
      "Direct integration with Trivy security scanner engine",
      "Vulnerability severity classification (CRITICAL, HIGH, MEDIUM, LOW)",
      "Configurable security policy evaluation and gatekeeping",
      "Scan history and findings dashboard with CVE filtering",
      "Asynchronous FastAPI endpoints paired with SQLite persistence",
    ],
    architectureNote:
      "Leverages FastAPI's async execution loop to launch background Trivy container inspection jobs, parse structured JSON outputs, and surface vulnerability timelines to the Vite frontend.",
    metrics: "Full CVE taxonomy reporting",
    githubUrl: "https://github.com/shreya-a12/containerguard.git",
    demoUrl: "https://containerguard.demo.placeholder",
    bannerType: "security",
  },
  {
    id: "food-recognition-calorie",
    title: "Food Recognition & Calorie Prediction System",
    category: "AI & Intelligent Systems",
    shortDescription:
      "An AI-powered food recognition application that identifies food items from images and estimates their calorie content using deep learning.",
    fullDescription:
      "An end-to-end intelligent computer vision solution that accepts photographic food inputs, classifies food categories using a fine-tuned ResNet18 convolutional neural network, predicts portion density using a regression neural network, and computes estimated caloric content through an interactive full-stack interface.",
    technologies: ["Python", "PyTorch", "ResNet18", "Deep Learning", "MERN Stack"],
    keyFeatures: [
      "Image-based food category recognition using convolutional networks",
      "Fine-tuned ResNet18 transfer learning architecture",
      "93% classification accuracy achieved in experimental project evaluations",
      "Portion volume estimation using a dedicated regression neural network",
      "Automated caloric estimation calculated from food density matrices",
      "Web-based user interface developed on the MERN stack",
    ],
    architectureNote:
      "PyTorch vision pipeline processes normalized RGB images through convolutional feature extractors, routing outputs to classification and portion regression heads before streaming predictions to the MERN UI.",
    metrics: "93% Classification Accuracy",
    githubUrl: "https://github.com/shreya-a12/Foor_Req.git",
    demoUrl: "https://food-calorie-ai.demo.placeholder",
    bannerType: "food",
  },
  {
    id: "ecofinds",
    title: "EcoFinds",
    category: "Full Stack Web",
    shortDescription:
      "A sustainable second-hand marketplace that encourages reuse and responsible consumption by allowing users to discover and exchange pre-owned products.",
    fullDescription:
      "EcoFinds is a full-stack sustainable commerce platform built to extend product lifecycles. Users can list unused items, explore localized listings, filter across categories, and participate in a circular economy driven by intuitive UI design and reliable RESTful services.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    keyFeatures: [
      "User-friendly product listing with image upload workflows",
      "Real-time product discovery with category and condition filters",
      "Responsive and clean modern marketplace interface",
      "Sustainable shopping concept promoting circular product reuse",
      "Robust RESTful backend with MongoDB document persistence",
    ],
    architectureNote:
      "Built with a decoupled React frontend and Express/MongoDB backend, featuring optimistic UI updates and responsive grid layouts designed for desktop and mobile shoppers.",
    metrics: "Sustainable Circular Commerce",
    githubUrl: "https://github.com/shreya-a12/Eco-Finds.git",
    demoUrl: "https://ecofinds.demo.placeholder",
    bannerType: "eco",
  },
  {
    id: "mental-health-chatbot",
    title: "Mental Health Chatbot",
    category: "AI & Intelligent Systems",
    shortDescription:
      "A conversational chatbot that uses Natural Language Processing techniques to understand user messages and generate relevant responses.",
    fullDescription:
      "A supportive conversational agent built with Python and Natural Language Processing. It cleans and tokenizes conversational user queries, vectorizes intents via Term Frequency-Inverse Document Frequency (TF-IDF), and matches responses using semantic similarity over curated dialog datasets.",
    technologies: ["Python", "NLP", "NLTK", "Scikit-learn", "TF-IDF"],
    keyFeatures: [
      "Text preprocessing pipeline including tokenization, lemmatization, and stop-word removal",
      "TF-IDF vectorization for semantic query representation",
      "NLP-based cosine similarity response ranking",
      "Interactive conversational chat interface",
      "Dataset-based experimentation and intent evaluation",
    ],
    architectureNote:
      "Employs NLTK and Scikit-learn pipelines to transform natural language user prompts into numerical sparse vectors, evaluating similarity scores to surface empathetic conversational replies.",
    metrics: "TF-IDF Semantic Matching",
    githubUrl: "https://github.com/shreya-a12/mental-health-nlp-chatbot",
    demoUrl: "https://mental-health-nlp.demo.placeholder",
    bannerType: "mental",
  },
];
