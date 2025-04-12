import React from 'react'

function About() {
  return (
    <div>
          <div id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto"></div>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-bold text-center lg:text-left mb-4 text-gray-800">
                Hi. I'm Mayur Adlak, nice to meet you.
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Passionate problem solver and innovative software developer. I
                thrive in collaborative environments, leveraging my skills to
                design and develop cutting-edge software applications.
                Continuously staying updated with the latest industry trends and
                best practices.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My goal is to create robust and scalable software
                solutions that drive productivity and exceed client expectations.
                Let's transform ideas into reality together.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Professional Philosophy</h3>
                <ul className="space-y-3">
                  {[
                    "Building elegant, user-friendly solutions",
                    "Continuous learning and adaptation",
                    "Clean, maintainable, and efficient code",
                    "Team collaboration and knowledge sharing",
                    "Turning complex problems into simple solutions"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About