import React, { useState } from 'react'
import { toast } from 'react-toastify';
function Contact() {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [message, setMessage] = useState("");
      const [isMenuOpen, setIsMenuOpen] = useState(false);
       const sendMessage = async (e) => {
          e.preventDefault();
          
          const toastOption = {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          };
      
          const formData = {
            Name: name,
            Email: email,
            Message: message,
          };
      
          try {
            const response = await fetch("https://getform.io/f/31798245-609f-4194-9a22-c45f02c90b82", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
            });
      
            if (response.ok) {
              setEmail("");
              setName("");
              setMessage("");
              toast.success("Message Sent Successfully", toastOption);
            } else {
              toast.error("Failed to Send Message");
            }
          } catch (err) {
            toast.error("Failed to Send Message");
          }
        };
  return (
    <div>
    <div id="contact" className="py-12 w-full bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto"></div>
        </div>
  
        <div className="mx-auto bg-white rounded-xl shadow-xl p-10 w-full sm:w-4/5 lg:w-2/3">
          <form
            action="https://getform.io/f/31798245-609f-4194-9a22-c45f02c90b82"
            method="POST"
            onSubmit={sendMessage}
          >
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your name"
                required
              />
            </div>
  
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
  
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your message"
                rows="5"
                required
              ></textarea>
            </div>
  
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-800 transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Contact