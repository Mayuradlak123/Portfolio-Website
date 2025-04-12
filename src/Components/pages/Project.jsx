import React from 'react';
import Website from "../Logos/Code-editor.avif";
import CRUD from "../Logos/CRUD.webp";
import OTT from "../Logos/OTT.png";
import NewsImage from "../Logos/News-App.jpg";

function Project() {
  const projects = [
    {
      img: NewsImage,
      title: "News Web Application",
      description: "Stay updated with the latest news from various sources using this sleek news web app. Built with React and integrated with news APIs, it features category filters, real-time updates, and mobile responsiveness.",
      url: "https://github.com/Mayuradlak123/News-Web-Application"
    },
    {
      img: Website,
      title: "Code Editor",
      description: "A fully functional online code editor where you can write, compile, and run your code instantly. It supports multiple languages, syntax highlighting, and live output — perfect for testing snippets.",
      url: "https://react-compiler.netlify.app"
    },
    {
      img: OTT,
      title: "OTT Platform Clone",
      description: "Inspired by modern streaming platforms, this OTT clone offers a smooth UI for browsing, watching trailers, and organizing watchlists. Built with React, Firebase, and styled components.",
      url: "https://watchzone-project.netlify.app"
    },
    {
      img: CRUD,
      title: "CRUD Operation using MERN",
      description: "A full-stack MERN application to perform Create, Read, Update, and Delete operations. It demonstrates RESTful API integration, state management, and form validation in a real-world project setup.",
      url: "https://github.com/Mayuradlak123/CRUD-Operation-Using-MERN/tree/master"
    }
  ];

  return (
    <div id="projects" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">Academic Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full hover:from-blue-700 hover:to-indigo-800 transition duration-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
