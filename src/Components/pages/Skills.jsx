import React from 'react'

import CPP from "../Logos/cpp.png";
import NextJs from "../Logos/Next.jpg"
import SQL from "../Logos/SQL.png";
import "../portfolio.css";
import Spring from "../Logos/Spring.png";
import Java from "../Logos/JAVA.png";
import HTML from "../Logos/HTML.png";
import CSS from "../Logos/CSS.png";
import DSA from "../Logos/DSA.png";
import JavaScript from "../Logos/js.png";
import Node from "../Logos/node.png";
import ReactImage from "../Logos/react.png";
import Bootstrap from "../Logos/Bootstrap.png";
import Express from "../Logos/Express.png";
import MDB from "../Logos/Mongo.png";
import Git from "../Logos/git.png";
import Python from "../Logos/Python.png";
import Tail from "../Logos/Tail.png";
import AWS from "../Logos/AWS.png";
import "react-toastify/dist/ReactToastify.css";

import GraphQL from "../Logos/GraphQL.png"
import JIRA from "../Logos/JIRA.avif"
import Scrum from "../Logos/Scrum.png"

import PHP from '../Logos/PHP.png';
import Laravel from '../Logos/Laravel.png';
import S_Server from '../Logos/S_Server.png';
import Django from "../Logos/Django.png"
import R_Native from "../Logos/Nativw.jpeg"
function SkillsContainer() {
  return (
    <div>
        <div className="bg-slate-50 mt-8 py-5" id="skills">
          <h2 className="text-3xl text-black border-green border-solid  text-center">
            Skills
          </h2>
          <div className=" shadow-[0px_5px_5px_5px_#00000024]   h-auto w-full flex flex-wrap justify-center items-center skill-main mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {/* <h1>Skills</h1> */}
            <Skills Images={CPP} Title="C++ Programming" />
            <Skills Images={DSA} Title="Data Structure" />
            <Skills Images={Java} Title="Java Programming" />
            <Skills Images={Python} Title="Python " />
            <Skills Images={Git} Title="Git Version Control" />

            <Skills Images={HTML} Title="HTML" />
            <Skills Images={CSS} Title="CSS" />
            <Skills Images={PHP} Title="PHP" />

            <Skills Images={Tail} Title="Tailwind CSS" />
            <Skills Images={Bootstrap} Title="Bootstrap" />

            <Skills Images={JavaScript} Title="JavaScript" />
            <Skills Images={ReactImage} Title="React Js" />
            <Skills Images={NextJs} Title="Next Js" />
            <Skills Images={R_Native} Title="React Native" />
            <Skills Images={Node} Title="Node Js" />
            <Skills Images={Express} Title="Express Js" />
            <Skills Images={Laravel} Title="Laravel" />

            <Skills Images={GraphQL} Title="GraphQL" />
            <Skills Images={MDB} Title="MongoDB" />
            <Skills Images={SQL} Title="MySQL" />
            <Skills Images={S_Server} Title="SQL Server" />
            <Skills Images={AWS} Title="AWS" />
            <Skills Images={Spring} Title="Spring Boot" />
            <Skills Images={JIRA} Title="JIRA" />
            <Skills Images={Scrum} Title="Scrum Agile" />

          </div>
        </div>
    </div>
  )
}
const Skills = ({ Title, Images }) => {
    return (
      <>
        <div className="skill flex flex-col justify-center items-center ">
          <img className="rounded-2xl" src={Images} alt="picture" />
          <h3 className="">{Title}</h3>
        </div>
      </>
    );
  };

export default SkillsContainer;