import React, { useState } from "react";
import Hackerrenk from "./SVG/Hackerrenk.png";
import GFG from "./SVG/gfg.jpeg";
import LinkedIn from "./SVG/link.png";
import LeetCode from "./SVG/leet.png";
import GitHub from "./SVG/git.png";
import CPP from "./Logos/cpp.png";
import SQL from "./Logos/SQL.png";
import "./portfolio.css";
import Spring from "./Logos/Spring.png";
import Java from "./Logos/JAVA.png";
import HTML from "./Logos/HTML.png";
import CSS from "./Logos/CSS.png";
import DSA from "./Logos/DSA.png";
import JavaScript from "./Logos/js.png";
import Node from "./Logos/node.png";
import ReactImage from "./Logos/react.png";
import Bootstrap from "./Logos/Bootstrap.png";
import Express from "./Logos/Express.png";
import MDB from "./Logos/Mongo.png";
import Git from "./Logos/git.png";
import Python from "./Logos/Python.png";
import Tail from "./Logos/Tail.png";
import AWS from "./Logos/AWS.png";
import NewsImage from "./Logos/News-App.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Website from "./Logos/Website.jpg"
import CRUD from "./Logos/CRUD.webp"
import Stock from "./Logos/Stock.jpg"
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const experiences = [
    {
      company: "RedGates IT Solution",
      role: "Full Stack Developer Intern",
      duration: "4 Months (March 22-June 22)",
      description: `During my internship, I honed my skills in full stack development, leveraging HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB to create efficient and scalable web applications. I gained hands-on experience in both front-end and back-end development, and gained a deeper understanding of the software development lifecycle.`,
    },
    {
      company: "ZEDGE Technology Pvt. Ltd.",
      role: "Software Engineer Intern",
      duration: "6 Months (June 22 - Dec 22)",
      description: `Developed and deployed full-stack web applications using Python, React, SQL, and AWS. Leveraged AWS services, such as EC2 and S3, to deploy and manage applications in a cloud environment.Through collaboration with a diverse team, I learned agile development methodologies, code review practices.`,
    },
    {
      company: "WebSeeder Technology",
      role: " Software Developer Intern",
      duration: "6 Months (Jan 22 - June 22)",
      description: ` I gained valuable experience in full-stack web development with a focus on the MERN stack and AWS cloud services. By utilizing MongoDB, Express.js, React, and Node.js, I built dynamic applications  with server-side logic.Utilized Git for version control and collaborated with the team on branching and merging strategies.`,
    },
    {
      company: "Brighter Bee Technology",
      role: "Software Developer Intern",
      duration: "(June 22-Current)",
      description: ` I leveraged Node.js to build scalable APIs and utilized SQL databases for efficient data storage and retrieval. With a focus on API development, I extensively used Postman for testing and debugging to ensure optimal functionality and error handling.ebugged and resolved issues to improve  API performance and reliability .`,
    },
  ];
  const resumePath = "./files/NewResume01.pdf";
  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual file name and path of your resume

    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "NewResume01.pdf"; // Set the desired file name for download
    link.target = "_blank";
    link.click();
  };
  const sendMessage = async (e) => {
    const toastOption = {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    };
    e.preventDefault();

    const formData = {
      Name: name,
      Email: email,
      Message: message,
    };
    fetch("https://getform.io/f/31798245-609f-4194-9a22-c45f02c90b82", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(formData);
        setEmail("");
        setName("");
        setMessage("");
        toast.success(toastOption, "Message Sent Successfully");
      })
      .catch((err) => {
        toast.error("Failed to Send Message ");
      });
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="bg-slate-900 scroll-smooth">
        <nav className="bg-gray-800 sticky top-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center w-full justify-between  h-16">
              <div className="flex items-center justify-between w-full   ">
                <div className="flex-shrink-0 flex ">
                  <a href="/" className="text-white font-bold text-lg">
                    Mayur Adlak
                  </a>
                </div>
                <div className="hidden  md:block ">
                  <div className="ml-10  flex justify-end items-baseline space-x-4">
                    <a
                      href="/"
                      className="text-gray-300 text-xl hover:text-white px-3 py-2   rounded-md  font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="#about"
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-xl "
                    >
                      About
                    </a>
                    <a
                      href="#contact"
                      className="text-gray-300 text-xl hover:text-white px-3 py-2 rounded-md  font-medium"
                    >
                      Contact
                    </a>
                    <a
                      href="#coding"
                      className="text-gray-300 text-xl hover:text-white px-3 py-2 rounded-md  font-medium"
                    >
                      Coding
                    </a>
                    <a
                      href="#projects"
                      className="text-gray-300 text-xl hover:text-white px-3 py-2 rounded-md  font-medium"
                    >
                      Projects
                    </a>
                    <a
                      href="#experience"
                      className="text-gray-300 text-xl hover:text-white px-3 py-2 rounded-md  font-medium"
                    >
                      Experience
                    </a>
                    <a
                      href="#contact"
                      className="text-gray-300 text-xl hover:text-white px-3 py-2 rounded-md  font-medium"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white inline-flex items-center justify-center p-2 rounded-md"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isMenuOpen ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden flex justify-center">
             
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
                <a
                  href="/"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
                <a
                  href="#coding"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Coding
                </a>
                <a
                  href="#project"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>
                <a
                  href="#experience"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Experience
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        
        </nav>
        <div className=" text-white flex w-full ">
          <div className="h-full bg-red-300 p-4 md:p-8 md:w-full flex items-center bg-slate-900">
            <div className="px-1 md:px-8 w-full">
              <h1 className="text-2xl sm:text-2xl md:text-6xl font-bold mb-4 text-center">
                Mayur Adlak I'm Software Developer
              </h1>
              <p className="text-lg lg:text-xl text-center text-justify px-2 sm:w-full">
                As a skilled software developer, I bring expertise in designing,
                developing, and implementing software solutions that meet
                clients' needs. With a strong foundation in programming
                languages and frameworks, I am adept at translating complex
                requirements into efficient and scalable code. My passion for
                problem-solving and attention to detail drive me to consistently
                deliver high-quality software products.
              </p>
              <button className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href={resumePath} download>
                  Download Resume
                </a>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full h-auto lg:h-60 p-2 bg-slate-900 transition-all">
          <div className="flex flex-col justify-center mx-2 mt-6 my-2 w-full lg:w-1/2 text-white">
            <h1 className="text-2xl lg:text-3xl py-2 text-center">About Me</h1>
            <h2 className="py-2 text-2xl lg:text-3xl font-thin md:font-bold text-center">
              Hi. I'm Mayur Adlak, nice to meet you. <br /> Please take a look
              around.
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col text-white justify-center">
            <p className="text-lg lg:text-xl text-center text-justify px-2">
              Passionate problem solver and innovative software developer. I
              thrive in collaborative environments, leveraging my skills to
              design and develop cutting-edge software applications.
              Continuously staying updated with the latest industry trends and
              best practices. My goal is to create robust and scalable software
              solutions that drive productivity and exceed client expectations.
              Let's transform ideas into reality together.
            </p>
          </div>
        </div>

        <h2
          id="coding"
          className="text-3xl mt-6 text-white border-green border-solid "
        >
          Codind Profile
        </h2>

        <div className=" h-auto p-4 bg-slate-900 flex flex-col justify-center  ">
          <div className="flex text-white justify-center flex-col w-full item-center text-xl font-semibold px-2 py-2">
            <p className="">
              Welcome to my coding profile! Throughout my coding journey, I have
              successfully tackled complex challenges, <br /> finding innovative
              solutions to enhance user experiences and meet project objectives.
            </p>
          </div>
          <div className="">
            <div className="flex w-full justify-center sm:flex-wrap sm:w-full flex-wrap flex  md:flex h-auto py-4 justify-center item-center mt-2  ">
              <Cards
                Images={Hackerrenk}
                URL={"https://www.hackerrank.com/mayuradlak030"}
              />
              <Cards
                Images={GFG}
                URL={"https://auth.geeksforgeeks.org/user/mayur_adlak"}
              />
              <Cards
                Images={LeetCode}
                URL={"https://leetcode.com/Mayuradlak123/"}
              />
              <Cards
                Images={LinkedIn}
                URL={"https://www.linkedin.com/in/mayur-adlak-31b962220/"}
              />
              <Cards
                Images={GitHub}
                URL={"https://www.github.com/Mayuradlak123"}
              />
            </div>
          </div>
        </div>
        <div className="bg-slate-900 mt-8" id="skills">
          <h2 className="text-3xl text-white border-green border-solid ">
            Skills
          </h2>
          <div className="skill-main mt-3 h-auto w-full flex flex-wrap justify-center items-center skill-main mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* <h1>Skills</h1> */}
            <Skills Images={CPP} Title="C++ Programming" />
            <Skills Images={DSA} Title="Data Structure" />
            <Skills Images={Java} Title="Java Programming" />
            <Skills Images={Python} Title="Python " />
            <Skills Images={Git} Title="Git Version Control" />

            <Skills Images={HTML} Title="HTML" />
            <Skills Images={CSS} Title="CSS" />
            <Skills Images={Tail} Title="Tailwind CSS" />
            <Skills Images={Bootstrap} Title="Bootstrap" />

            <Skills Images={JavaScript} Title="JavaScript" />
            <Skills Images={ReactImage} Title="React" />
            <Skills Images={Node} Title="Node js" />
            <Skills Images={Express} Title="Express Js" />
            <Skills Images={MDB} Title="MongoDB" />
            <Skills Images={SQL} Title="MySQL" />
            <Skills Images={AWS} Title="AWS" />
            <Skills Images={Spring} Title="Spring Boot" />
          </div>
        </div>
        <h2
          className="text-3xl text-white border-green border-solid md:mt-8 sm:mt-4"
          id="project"
        >
          Acadmic Projects
        </h2>
        <div className="project w-full h-auto flex-wrap flex justify-center item-center h-auto mt-8">
          <div className=" w-11/12  sm:w-1/2 md:w-1/4 p-2  shadow-lg shadow-[0px_5px_5px_2px_#b2f5ea] m-2">
            <img className="" src={NewsImage} alt="Project" />
            <div className="p-2 w-full ">
              <h3 className="text-xl text-white font-medium">
                News Web Application
              </h3>

              <a
                href="https://github.com/Mayuradlak123/News-Web-Application"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="w-11/12  sm:w-1/2 md:w-1/4 p-2 m-2 shadow-lg shadow-[0px_5px_5px_2px_#b2f5ea]">
            <img className="" src={Website} alt="Project" />
            <div className="p-2 w-full ">
              <h3 className="text-xl text-white font-medium">
                University Website
              </h3>

              <a
                href="https://github.com/Mayuradlak123/Online-Abroad-University-website-"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="w-11/12  sm:w-1/2 md:w-1/4 p-2  m-2 shadow-lg shadow-[0px_5px_5px_2px_#b2f5ea]">
            <img className="" src={Stock} alt="Project" />
            <div className="p-2 w-full ">
              <h3 className="text-xl text-white font-medium">
                Stock Price Prediction Web Application
              </h3>

              <a
                href="https://github.com/Mayuradlak123/Stock-Share-Price-Predictor-ML-Modle.git"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
          <div className="w-11/12  sm:w-1/2 md:w-1/4 p-2 m-2 shadow-lg shadow-[0px_5px_5px_2px_#b2f5ea]">
            <img className="" src={CRUD} alt="Project" />
            <div className="p-2 w-full ">
              <h3 className="text-xl text-white font-medium">
              CRUD Operation using MERN
              </h3>

              <a
                href="https://github.com/Mayuradlak123/CRUD-Operation-Using-MERN/tree/master"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        </div>

        <section
          className="container mx-auto px-4 py-8 w-full mt-8"
          id="experience"
        >
          <h2 className="text-3xl text-white font-bold mb-4">Experience</h2>
          <div className="flex flex-col md:flex-row">
            {experiences.map((experience, index) => (
              <div key={index} className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <div className="bg-white rounded-lg shadow p-2 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-lg">
                  <h3 className="text-[18px] font-bold ">
                    {experience.company}
                  </h3>
                  <p className="text-center font-bold text-[16px] ">
                    {experience.role}
                  </p>
                  <p className="text-justify  font-normal text-[16px] ">
                    {experience.duration}
                  </p>
                  <p className="text-justify text-[17px]">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-8" id="contact">
          <h2 className="text-3xl text-white border-green border-solid ">
            Contact me
          </h2>
          <form
            className="max-w-md mx-auto mt-4"
            action="https://getform.io/f/31798245-609f-4194-9a22-c45f02c90b82"
            method="POST"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              ></label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
                value={name}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              ></label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              ></label>
              <textarea
                name="message"
                id="message"
                onChange={(e) => setMessage(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message"
                rows="5"
                required
                value={message}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={sendMessage}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <footer className="bg-gray-800 text-white py-4 mt-8 pb-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Contact</h3>
              <p className="mt-2 text-xl">
                Phone:
                <a href="tel:9098002830" target="_blank" rel="noreferrer">
                  +91 9098002830
                </a>
              </p>
              <p className="text-xl">
                Email:
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mayuradlak030@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  mayuradlak030@gmail.com
                </a>
              </p>
            </div>
            <div className="flex justify-center flex-col items-center ">
              <div className="text-2xl">Contact on Social Media</div>
              <div className="flex ">
                <a
                  href="https://www.facebook.com/mayur.adlak.10/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook color=" #3b5998" className="text-4xl m-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mayur-adlak-31b962220/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin color="#0A66C2" className="text-4xl m-4" />
                </a>
                <a
                  href="https://github.com/Mayuradlak123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub color="#171515" className="text-4xl m-4" />
                </a>
                <a
                  href="https://twitter.com/MayurAdlak"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter color="#00acee" className="text-4xl m-4" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold">Address</h3>
              <p className="mt-2 text-xl">Kushwah Nagar </p>
              <p className="text-xl">Indore M.P. (452015)</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
const Cards = ({ Images, URL }) => {
  return (
    <>
      <div className=" m-2">
        <a href={URL} target="blank">
          <img
            src={Images}
            alt=""
            style={{ height: "100px", maxWidth: "170px", borderRadius: "10px" }}
          />
        </a>
      </div>
    </>
  );
};
const Skills = ({ Title, Images }) => {
  return (
    <>
      <div className="skill  ">
        <img className="rounded-2xl" src={Images} alt="picture" />
        <h3 className="">{Title}</h3>
      </div>
    </>
  );
};

export default Portfolio;
// shadow-[0px_20px_20px_10px_#00000024]
