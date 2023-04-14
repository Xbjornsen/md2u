import React, { useState, useEffect, useRef } from 'react';
import { RiMenuLine } from 'react-icons/ri'; // Import the menu icon from react-icons library
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the dropdown navbar is open or closed

  // Function to toggle the dropdown navbar
  const toggleNavbar = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Function to close the dropdown menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const menuRef = useRef(null);

  useEffect(() => {
    const handleMouseDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);
  return (
    <nav className="bg-blue-100">
      <div className="flex justify-between mx-auto max-w-5xl p-4">
        <div className="flex justify-start ">
          <button
            ref={menuRef} // Assign the ref to the ul element
            className="bg-blue-400 text-white px-4 py-0 rounded-lg hover:shadow-md"
            onClick={toggleNavbar}
          >
            <RiMenuLine size={24} />
          </button>
          <div className='pl-8 pt-2'>
            <a href="/" className="flex text-grey font-bold text-xl">
              Medical Assistant
            </a>
          </div>
        </div>
        <ul className="hidden lg:flex items-center space-x-4">
          <li>
            <Link
              to="/contact">
              <a
                href="#contact"
                className="text-grey hover:text-grey-200 hover:shadow-md transition duration-300"
              >
                Contact
              </a></Link>

          </li>
          <li>
            <Link to="/about">            <a
              href="#about"
              className="text-grey hover:text-grey-200 hover:shadow-md transition duration-300"
            >
              About Us
            </a>
            </Link>
          </li>
          <li>
            <a
              href="#SignIn"
              className="text-grey hover:text-grey-200 hover:shadow-md transition duration-300"
            >
              Sign In
            </a>
          </li>
        </ul>
      </div>
      <div
        ref={menuRef} // Assign the ref to the ul element
        className={`fixed top-15 md:left-32 bg-blue-200 text-grey px-0 py-0 rounded  transition-all duration-300 ${isMenuOpen ? "w-44" : 'w-0'
          }`}
      >
        <ul >
          <li>
            <a
              href="#item1"
              className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:shadow-md duration-400 ${isMenuOpen ? 'w-44' : ' hidden'}`}
              onClick={closeMenu} // Close the menu when an item is clicked
            >
              Medical Certificates
            </a>
          </li>
          <li>
            <a
              href="#item1"
              className={`block px-4 py-2 text-gray-800 hover:bg-blue-100 hover:shadow-md duration-400 ${isMenuOpen ? 'w-44' : ' hidden'}`}
              onClick={closeMenu} // Close the menu when an item is clicked
            >
              Medical Consulation
            </a>
          </li>
          <li>
            <a
              href="#item1"
              className={`block px-4 pt-2 pb-2 text-gray-800 hover:bg-blue-100 hover:shadow-md duration-400 ${isMenuOpen ? 'w-44' : ' hidden'}`}
              onClick={closeMenu} // Close the menu when an item is clicked
            >
              Resources
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
