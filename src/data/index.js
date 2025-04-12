import CPP from "./icons/C++ (CPlusPlus).svg";
import Java from "./icons/Java.svg";
import Python from "./icons/Python.svg";
import JavaScript from "./icons/JavaScript.svg";
import PHP from "./icons/PHP.svg";
import HTML from "./icons/HTML5.svg";
import CSS from "./icons/Tailwind CSS.svg"; // You can rename if there's a separate CSS icon
import ReactIcon from "./icons/React.svg";
import NextJs from "./icons/Nest.js.svg"; // assuming this is Next.js logo
import R_Native from "./icons/React.svg"; // Replace this with SVG if available
import Tail from "./icons/Tailwind CSS.svg";
import Bootstrap from "./icons/Bootstrap.svg";
import Node from "./icons/Node.js.svg";
import Express from "./icons/Express.svg";
import Spring from "./icons/Spring.svg";
import Laravel from "./icons/Laravel.svg";
import Django from "./icons/Django.svg";
import MDB from "./icons/MongoDB.svg";
import SQL from "./icons/MySQL.svg";
import S_Server from "./icons/Microsoft SQL Server.svg"; // If SQL Server is different, update accordingly
import PortgreSQL from "./icons/PostgresSQL.svg"; // If SQL Server is different, update accordingly
import GraphQL from "./icons/GraphQL.svg";
import Git from "./icons/Git.svg";
import AWS from "./icons/AWS.svg";
import Azure from "./icons/Azure.svg";
import Supabase from "./icons/supabase_BIG.svg";
import GitLab from './icons/GitLab.svg';
import FastAPI from './icons/FastAPI.svg';
// Add others like Azure, GitLab if needed

export const experiences = [

  {
    company: "38 Labs Private Limited",
    role: "Software Developer Intern",
    duration: "6 Months (Jan 22 - June 22)",
    description: `Worked as a full stack developer intern, exploring React.js and Next.js for frontend development, and 
Node.js, Express.js, and Django for backend development using SQL and MongoDB databases. Gained 
experience in cloud technologies using AWS and created web applications for job portals, LMS, CRM, and 
enterprise software products. `,
  },
  {
    company: "Logixi Technology",
    role: " Software Developer",
    duration: "1 Year 6 Months (Jun 22 - De 23)",
    description: `Gained valuable experience in backend development using Node.js, Express.js, and Laravel PHP tech stacks. 
Explored cloud services such as AWS (S3, EC2, RDS, Lambda, Amplify) and GCP. Created CI/CD pipelines using 
AWS and GitHub Action Runner with Node.js and Laravel. Learned about web servers like Nginx and Apache. 
Developed full-stack microservices Ed-Tech products using React.js, Node.js, and Laravel with MySQL. 
Improved product performance by implementing indexing to reduce latency and adding a load balancer to 
distribute traffic across services.  `,
  },
  {
    company: "Trando Technology",
    role: "Software Developer",
    duration: "(Jan 24-Present)",
    description: `  Working as a full stack developer, focusing on React.js and Next.js for frontend development, and deploying 
web applications on AWS Amplify with CI/CD to automate the deployment and testing process. Utilizing 
Node.js and Express.js with MySQL and MongoDB databases, I also added a load balancer to increase the 
performance of backend services, implementing replicas and indexing to improve server efficiency. 
Integrated push notifications and email communication modules using Firebase and Nodemailer. Created 
background jobs to run processes in the background. Integrated payment gateways using Razorpay and 
Stripe with webhooks to ensure payment processing. Currently working on a variety of projects, including 
Ed-Tech, Fintech, and travel booking service provider web applications. `,
  },
];


// Organize skills by category
export const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C++", svg: CPP, proficiency: 90 },
      { name: "Java", svg: Java, proficiency: 85 },
      { name: "Python", svg: Python, proficiency: 80 },
      { name: "JavaScript", svg: JavaScript, proficiency: 95 },
      { name: "PHP", svg: PHP, proficiency: 75 },
    ]
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", svg: HTML, proficiency: 95 },
      { name: "CSS", svg: CSS, proficiency: 90 },
      { name: "React.js", svg: ReactIcon, proficiency: 90 },
      { name: "Next.js", svg: NextJs, proficiency: 85 },
      { name: "React Native", svg: R_Native, proficiency: 80 },
      { name: "Tailwind CSS", svg: Tail, proficiency: 85 },
      { name: "Bootstrap", svg: Bootstrap, proficiency: 90 },
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", svg: Node, proficiency: 90 },
      { name: "Nest.js", svg: NextJs, proficiency: 85 },
      { name: "Express.js", svg: Express, proficiency: 85 },
      { name: "Spring Boot", svg: Spring, proficiency: 80 },
      { name: "Laravel", svg: Laravel, proficiency: 75 },
      { name: "Django", svg: Django, proficiency: 70 },
      {name:"Fast API" , svg:FastAPI, proficiency:80}

    ]
  },
  {
    category: "Database & API",
    skills: [
      { name: "MongoDB", svg: MDB, proficiency: 85 },
      { name: "MySQL", svg: SQL, proficiency: 90 },
      { name: "SQL Server", svg: S_Server, proficiency: 80 },
      { name: "PostgreSQL", svg: PortgreSQL, proficiency: 85 },
      { name: "GraphQL", svg: GraphQL, proficiency: 75 },
      { name: "Supabase", svg: Supabase, proficiency: 75 },
   
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      { name: "Git", svg: Git, proficiency: 90 },
      { name: "GitLab", svg: GitLab, proficiency: 90 },
      { name: "AWS", svg: AWS, proficiency: 80 },
      { name: "Azure", svg: Azure, proficiency: 80 },
      // { name: "JIRA", svg: JIRA, proficiency: 85 },
      // { name: "Scrum Agile", svg: Scrum, proficiency: 90 },
      // { name: "Data Structures", svg: DSA, proficiency: 85 },
    ]
  }
];
