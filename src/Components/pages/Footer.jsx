import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div>
         <footer className=" shadow-[0px_20px_20px_10px_#f7fafc] bg-slate-300 text-black py-4 mt-8 pb-8">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-center">Contact</h3>
              <p className="mt-2 text-md">
                Phone:
                <a href="tel:9098002830" target="_blank" rel="noreferrer">
                  +91 9098002830
                </a>
              </p>
              <p className="text-md">
                Email:
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=mayuradlak030@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  mayuradlak030@gmail.com
                </a>
              </p>
            </div>
            <div className="flex justify-center flex-col items-center ">
              <div className="text-2xl">Contact on Social Media</div>
              <div className="flex ">
                <a
                  href="https://www.facebook.com/mayur.adlak.10/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook color=" #3b5998" className="text-4xl m-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mayur-adlak-31b962220/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin color="#0A66C2" className="text-4xl m-4" />
                </a>
                <a
                  href="https://github.com/Mayuradlak123"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub color="#171515" className="text-4xl m-4" />
                </a>
                <a
                  href="https://twitter.com/MayurAdlak"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter color="#00acee" className="text-4xl m-4" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-md text-center font-bold">Address</h3>
              <p className="mt-2 text-md">Kushwah Nagar </p>
              <p className="text-md">Indore M.P. (452015)</p>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer