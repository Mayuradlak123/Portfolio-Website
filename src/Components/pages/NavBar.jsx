import React, { useEffect, useState } from 'react'

function NavBar() {

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
    <div>
          <nav 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-gradient-to-r from-blue-800 to-indigo-900 shadow-lg" 
            : "bg-gradient-to-r from-blue-600 to-indigo-700"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <a 
                  href="/" 
                  className="text-white font-bold text-xl md:text-2xl tracking-wide flex items-center"
                >
                  <span className="bg-white text-indigo-700 p-1 rounded mr-2">M</span>
                  Mayur Adlak
                </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {["Home", "About", "Skills", "Coding", "Projects", "Experience", "Contact"].map((item) => (
                    <a
                      key={item}
                      href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                      className="text-gray-100 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-md font-medium transition-all duration-200"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none transition-all duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-blue-600 to-indigo-700">
              {["Home", "About", "Skills", "Coding", "Projects", "Experience", "Contact"].map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                  className="text-white hover:bg-blue-500 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
                  onClick={toggleMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

    </div>
  )
}

export default NavBar