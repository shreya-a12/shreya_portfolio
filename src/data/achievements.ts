import { AchievementItem } from '../types';

export const achievementsData: AchievementItem[] = [
  {
    id: "topper-record",
    title: "Department Topper Across All 6 Semesters",
    subtitle: "CMR Institute of Technology, Bengaluru",
    detail: "Consistently ranked Rank 1 in the Artificial Intelligence and Data Science department every single semester, demonstrating exceptional academic discipline, problem solving, and conceptual mastery.",
    type: "academic",
    badge: "Academic Rank 1",
    highlight: "6x Semester Topper",
  },
  {
    id: "cgpa-record",
    title: "Cumulative Grade Point Average: 9.53",
    subtitle: "Undergraduate Engineering Cohort",
    detail: "Maintained a 9.53 CGPA across rigorous coursework in Algorithms, Data Structures, Operating Systems, Machine Learning, Database Management Systems, and Software Engineering.",
    type: "academic",
    badge: "9.53 / 10.0 CGPA",
    highlight: "Top 1% of Branch",
  },
  {
    id: "degree-education",
    title: "B.E. in Artificial Intelligence & Data Science",
    subtitle: "CMR Institute of Technology, Bengaluru",
    detail: "Full-time 4-year Bachelor of Engineering program in the final year of study, focusing on intelligent computational systems, modern full-stack development, and data-driven software engineering.",
    type: "education",
    badge: "Final Year Student",
    highlight: "Final Year Undergraduate",
  },
  {
    id: "hackerearth-club",
    title: "Member — HackerEarth Technical Club",
    subtitle: "Campus Technical Community",
    detail: "Active participant in algorithmic programming sessions, mock technical challenges, code reviews, and competitive coding sprints within the collegiate developer ecosystem.",
    type: "activity",
    badge: "Technical Community",
    highlight: "Competitive Programming",
  },
  {
    id: "codechef-community",
    title: "Member — CodeChef Community",
    subtitle: "Competitive Problem Solving",
    detail: "Regularly engaging in data structures and algorithmic problem solving, participating in contest discussions, and sharpening runtime optimization techniques.",
    type: "activity",
    badge: "Algorithm Practice",
    highlight: "DSA Enthusiast",
  },
];

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  category: string;
  description: string;
  isVerified: boolean;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-dsa-dept",
    name: "Data Structures",
    issuer: "Department Level — CMRIT",
    category: "Core Computer Science",
    description: "Rigorous evaluation in linear and non-linear data structures, space/time complexity analysis, and efficient tree and graph traversals.",
    isVerified: true,
  },
  {
    id: "cert-algo-udemy",
    name: "Algorithms",
    issuer: "Udemy",
    category: "Algorithmic Problem Solving",
    description: "Deep dive into greedy algorithms, dynamic programming, divide-and-conquer methodologies, and graph search paradigms.",
    isVerified: true,
  },
  {
    id: "cert-mern-infosys",
    name: "MERN Stack",
    issuer: "Infosys Springboard",
    category: "Full Stack Web Development",
    description: "Comprehensive practical coursework covering MongoDB, Express.js, React.js, and Node.js for scalable web applications.",
    isVerified: true,
  },
  {
    id: "cert-spring-infosys",
    name: "Spring Boot",
    issuer: "Infosys Springboard",
    category: "Enterprise Java Development",
    description: "Enterprise backend development, dependency injection, RESTful service creation, and Spring data integrations.",
    isVerified: true,
  },
];
