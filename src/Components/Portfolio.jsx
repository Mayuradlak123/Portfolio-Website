import React, { useState, useEffect } from "react";

import "./portfolio.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Website from "./Logos/Code-editor.avif";
import CRUD from "./Logos/CRUD.webp";
import OTT from "./Logos/OTT.png";
import GraphQL from "./Logos/GraphQL.png";
import JIRA from "./Logos/JIRA.avif";
import Scrum from "./Logos/Scrum.png";
import Footer from "./pages/Footer";
import PHP from "./Logos/PHP.png";
import Laravel from "./Logos/Laravel.png";
import S_Server from "./Logos/S_Server.png";
import Django from "./Logos/Django.png";
import R_Native from "./Logos/Nativw.jpeg";
import SkillsContainer from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import NavBar from "./pages/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Coding from "./pages/Coding";

function Portfolio() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };




  return (
    <div className="scroll-smooth bg-gradient-to-br from-slate-50 to-blue-50 text-gray-800">
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

      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />
      {/* Coding Profile Section */}
      <Coding />

      {/* Skills Section */}
      <SkillsContainer />

      {/* Projects Section */}
      <Project />

      {/* Education Section */}
      <Education />

      {/* Experience Section */}
      <Experience />

      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

// Component for coding profile cards
const Cards = ({ Images, URL }) => {
  return (
    <div className="m-2 transition-transform duration-300 hover:scale-105">
      <a href={URL} target="_blank" rel="noreferrer">
        <img
          src={Images}
          alt="Coding Platform"
          className="h-24 w-40 object-contain rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
        />
      </a>
    </div>
  );
};

export default Portfolio;