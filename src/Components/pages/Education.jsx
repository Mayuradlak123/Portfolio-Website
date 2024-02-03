// Education.js
import React from 'react';
import {Rating} from "@mui/material"

const Education = () => {
  return (
    <section id="education" className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Education</h2>
        
        {/* Education items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replace this with your actual education details */}
          <div className="bg-white p-6 rounded-md shadow-md ">
            <h3 className="text-xl font-semibold mb-2">Oriental University Indore</h3>
            <p className="text-gray-600"> Bachelor of Technology <b>(B-Tech)</b></p>
            <p className="text-gray-600">Branch : Computer Science and Engineering</p>
            <p className="text-gray-600">CGPA  : 8.5/10 &nbsp; &nbsp; <b>A+</b> </p>
            <p className="text-gray-600">Graduation Year: 2024</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Govt. Excellence School Athner</h3>
            <p className="text-gray-600"> Higher Secondary School  </p>
            <p className="text-gray-600"> Stream : Mathematics  </p>
            <p className="text-gray-600">Passing Year: 2020</p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Achivement </h3>
            <p className="text-gray-600"> HackerRank : <Rating name="read-only" value={5} readOnly /> </p>
            <p className="text-gray-600"> Hackerearth : <Rating name="read-only" value={4.5} readOnly /> </p>
            <p className="text-gray-600">  </p>
          </div>

          {/* Add more education items as needed */}

        </div>
      </div>
    </section>
  );
};

export default Education;
