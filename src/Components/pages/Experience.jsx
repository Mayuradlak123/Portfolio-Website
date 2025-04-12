import React from 'react'
import { experiences } from "../../data";

function Experience() {
  return (
    <div>
        <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Experience</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {experiences.map((experience, index) => (
                      <div 
                        key={index} 
                        className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
                      >
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{experience.company}</h3>
                        <p className="text-lg font-semibold text-blue-700 mb-2">{experience.role}</p>
                        <p className="text-gray-600 mb-4">{experience.duration}</p>
                        <p className="text-gray-700 leading-relaxed">{experience.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </section>
    </div>
  )
}

export default Experience