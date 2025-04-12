import React from 'react'
import Hackerrenk from "../SVG/Hackerrenk.png";
import GFG from "../SVG/gfg.jpeg";
import LinkedIn from "../SVG/link.png";
import LeetCode from "../SVG/leet.png";
import GitHub from "../SVG/git.png";

function Coding() {
  return (
    <div>
         <div id="coding" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Coding Profile</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Throughout my coding journey, I have successfully tackled complex challenges, 
              finding innovative solutions to enhance user experiences and meet project objectives.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { img: Hackerrenk, url: "https://www.hackerrank.com/mayuradlak030" },
              { img: GFG, url: "https://auth.geeksforgeeks.org/user/mayur_adlak" },
              { img: LeetCode, url: "https://leetcode.com/Mayuradlak123/" },
              { img: LinkedIn, url: "https://www.linkedin.com/in/mayur-adlak-31b962220/" },
              { img: GitHub, url: "https://www.github.com/Mayuradlak123" }
            ].map((platform, index) => (
              <div 
                key={index} 
                className="transform transition duration-300 hover:scale-105"
              >
                <a 
                  href={platform.url} 
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
                >
                  <img
                    src={platform.img}
                    alt="Coding Platform"
                    className="h-24 w-40 object-contain rounded"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coding