import React from 'react'
import Resume from "../files/MayurResume.pdf";

function Hero() {
      const handleDownload = () => {
        const link = document.createElement("a");
        link.href = Resume;
        link.download = "Mayur-Resume";
        link.target = "_blank";
        link.click();
      };
  return (
    <div>
          <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8" id="home">
        <div className="w-full max-w-5xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 tracking-tight">
              Mayur Adlak
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
              Software Developer
            </p>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                As a skilled software developer, I bring expertise in designing,
                developing, and implementing software solutions that meet
                clients' needs. With a strong foundation in programming
                languages and frameworks, I am adept at translating complex
                requirements into efficient and scalable code. My passion for
                problem-solving and attention to detail drive me to consistently
                deliver high-quality software products.
              </p>
            </div>
            <button 
              className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-6 rounded-md shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onClick={handleDownload}
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero