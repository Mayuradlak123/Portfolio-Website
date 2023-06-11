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
function Portfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  const widthClassName = isHovered ? "w-32" : "w-16";
  return (
    <>
      <div className="bg-slate-900 scroll-smooth">
        <nav className="bg-slate-900 sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-white font-bold text-lg">Mayur Adlak</div>
              <div className="md:hidden">
                <button
                  className="text-white focus:outline-none"
                  onClick={toggleMobileMenu}
                >
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {isMobileMenuOpen ? (
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    ) : (
                      <path d="M3 12h18M3 6h18M3 18h18"></path>
                    )}
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  isMobileMenuOpen ? "block" : "hidden"
                } md:block md:flex`}
              >
                <ul className="flex space-x-4">
                  <li>
                    <a href="/" className="text-white hover:text-gray-300">
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about-me"
                      className="text-white hover:text-gray-300"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#coding"
                      className="text-white hover:text-gray-300"
                    >
                      Coding
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="text-white hover:text-gray-300"
                    >
                      Skills
                    </a>
                  </li>
                  <li>
                    <a
                      href="/projects"
                      className="text-white hover:text-gray-300"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-white hover:text-gray-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className=" text-white flex w-full ">
          <div className="h-full bg-red-300 p-[3%] w-full flex items-center  bg-slate-900">
            <div className=" px-8 w-full">
              <h1 className="text-6xl font-bold mb-4 w-full text-center">
                Mayur Adlak I'm Software Developer
              </h1>
              <p className="text-xl text-center w-full">
                As a skilled software developer, I bring expertise in designing,
                developing, and implementing software solutions that meet
                clients' needs. With a strong foundation in programming
                languages and frameworks, I am adept at translating complex
                requirements into efficient and scalable code. My passion for
                problem-solving and attention to detail drive me to consistently
                deliver high-quality software products.
              </p>
              <button
                id="about-me"
                className="bg-gray-500 hover:bg-green-500 my-4 text-white text-left font-bold py-2 px-4 rounded"
              >
                About me
              </button>
            </div>
          </div>
        </div>
        <h2 className="text-3xl text-white bg-slate-900 border-green border-solid border-b-2">
          About me
        </h2>

        <div className="flex w-full h-60 p-2 bg-slate-900 transition-all">
          <div className="flex flex-col justify-center mx-2 mt-6 my-2 item-center w-1/2 text-white">
            <h1 className="text-white text-4xl  py-2 ">About Me</h1>
            <h2 className=" py-2 text-3xl font-bold">
              Hi. I'm Mayur Adlak, nice to meet you. <br /> Please take a look
              around.
            </h2>
          </div>
          <div className=" w-1/2 flex flex-col text-white justify-center item-center">
            <p className="text-xl text-center text-justify px-2">
              Passionate problem solver and innovative software developer I
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
          className="text-3xl mt-6 text-white border-green border-solid border-b-2"
        >
          Codind Profile
        </h2>

        <div className=" h-auto w-full p-4 bg-slate-900 flex flex-col justify-center  ">
          <div className="flex text-white justify-center flex-col w-full item-center text-xl font-semibold px-2 py-2">
            <p className="">
              Welcome to my coding profile! Throughout my coding journey, I have
              successfully tackled complex challenges, <br /> finding innovative
              solutions to enhance user experiences and meet project objectives.
            </p>
          </div>
          <div className="flex h-auto py-4  w-full justify-center item-center mt-2 ">
            <div className="flex  justify-center ">
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
          <h2 className="text-3xl text-white border-green border-solid border-b-2">
            Skills
          </h2>
          <div className="skill-main mt-3">
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
          </div>{" "}
        </div>

        <div className="mt-8" id="contact">
        <h2 className="text-3xl text-white border-green border-solid border-b-2">
            Contact me
          </h2>
          <form className="max-w-md mx-auto mt-4">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              ></label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your name"
                required
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
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
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
      <div className="skill">
        <img className="rounded-2xl" src={Images} alt="Card Image" />
        <h3 className="">{Title}</h3>
      </div>
    </>
  );
};
const BreakPoint = ({ Text }) => {
  return (
    <>
      <div>
        <h2></h2>
      </div>
    </>
  );
};
export default Portfolio;
// shadow-[0px_20px_20px_10px_#00000024]
