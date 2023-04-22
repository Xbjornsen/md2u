import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="bg-blue-100">
      <div className="flex justify-between mx-auto max-w-5xl p-4">
        <div className="flex justify-start ">
          <div className='pl-8 pt-2'>
            <a href="/" className="flex text-grey font-bold text-xl">
              Medical Direct To You
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
            <Link to="/signin">
              <a
                href="#SignIn"
                className="text-grey hover:text-grey-200 hover:shadow-md transition duration-300"
              >
                Sign In
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
