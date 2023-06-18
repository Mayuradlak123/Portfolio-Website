import React from 'react'

function HomePage() {
  return (
    <div>
         <div className="bg-gray-200 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-white text-4xl font-bold">Bookstore</h1>
          <nav>
            <ul className="flex space-x-4 text-white">
              <li><a href="#main">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main" className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Book Card 1 */}
          <div className="bg-white rounded-lg p-4 shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Book Cover"
              className="mb-4 mx-auto md:mx-0"
            />
            <h2 className="text-xl font-bold mb-2">Book Title 1</h2>
            <p className="text-gray-700">Author Name 1</p>
            <p className="text-gray-700">$19.99</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
              Add to Cart
            </button>
          </div>
          {/* Book Card 2 */}
          <div className="bg-white rounded-lg p-4 shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Book Cover"
              className="mb-4 mx-auto md:mx-0"
            />
            <h2 className="text-xl font-bold mb-2">Book Title 2</h2>
            <p className="text-gray-700">Author Name 2</p>
            <p className="text-gray-700">$14.99</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
              Add to Cart
            </button>
          </div>
          {/* Book Card 3 */}
          <div className="bg-white rounded-lg p-4 shadow">
            <img
              src="https://via.placeholder.com/150"
              alt="Book Cover"
              className="mb-4 mx-auto md:mx-0"
            />
            <h2 className="text-xl font-bold mb-2">Book Title 3</h2>
            <p className="text-gray-700">Author Name 3</p>
            <p className="text-gray-700">$12.99</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mt-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <section id="about" className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sem ac arcu elementum bibendum vel ut dui.
            Phasellus feugiat nisi vel tortor interdum, id finibus leo mattis. Donec sodales est non sapien rutrum, eget
            tempus libero imperdiet. Mauris dapibus, sapien non cursus ultrices, turpis lacus tincidunt mauris, vel
            molestie nunc arcu et risus. Suspendisse nec nibh eu metus vulputate convallis. Donec feugiat euismod justo,
            id rutrum nulla tempor non. Curabitur sodales tortor eu ex auctor, sit amet maximus nulla ultrices. Sed
            ullamcorper leo id turpis consectetur semper.
          </p>
        </div>
      </section>
      <section id="contact" className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">For any inquiries or assistance, please contact us using the information below:</p>
          <ul className="mt-4 text-gray-700">
            <li>Email: info@example.com</li>
            <li>Phone: +1 123 456 7890</li>
            <li>Address: 1234 Main Street, City, Country</li>
          </ul>
        </div>
      </section>
      <footer className="bg-blue-500 py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">&copy; {new Date().getFullYear()} Bookstore. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default HomePage