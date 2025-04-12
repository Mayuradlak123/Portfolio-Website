import React from 'react';

import "../portfolio.css";
import { skillsData } from '../../data';


function SkillsContainer() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of technologies and tools I've mastered throughout my software development journey.
          </p>
        </div>

        {skillsData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 bg-gradient-to-r from-blue-100 to-indigo-100 py-2 px-4 rounded-lg shadow-sm inline-block">
              {category.category}
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="p-4 flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full flex items-center justify-center p-2">
                     <img 
                        src={skill.svg} 
                        alt={skill.name} 
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h4>
                    
                    {/* Proficiency Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-indigo-700 h-2.5 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{skill.proficiency}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsContainer;