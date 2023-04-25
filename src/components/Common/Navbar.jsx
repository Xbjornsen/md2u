import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaStethoscope } from 'react-icons/fa';

// List component
const List = ({ links, isMobile, closeMenu }) => {
  return (
    <ul className={isMobile ? 'flex flex-col items-center space-y-4 pt-12 bg-blue-100 ' : 'flex space-x-4'}>
      {links.map((link) => (
        <li key={link.to}>
          <Link
            to={link.to}
            className={isMobile ? 'flex shadow-md w-44 justify-center py-2 transition duration-300' : 'text-grey hover:text-grey-200 hover:shadow-md transition duration-300'}
            onClick={isMobile ? closeMenu : undefined} // Add onClick event handler to close menu on small screens
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(false); // Function to close the menu
  };

  const links = [
    { to: '/contact', label: 'Contact' },
    { to: '/about', label: 'About Us' },
    { to: '/signin', label: 'Sign In' }
  ];

  return (
    <nav className="bg-blue-100 shadow-sm rounded-lg">
      <div className="flex justify-between mx-auto max-w-5xl p-4">
        <div className="flex justify-start">
          <div className="pl-8 pt-2 flex-row flex space-x-2">
            <FaStethoscope />
            <Link to="/" className="flex text-grey font-bold text-xl">
              Medical Direct To You
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="text-grey hover:text-grey-200 hover:shadow-md transition duration-1000"
            onClick={toggleMenu}
          >
            <FaBars />
          </button>
        </div>
        {/* Render List component for large screens */}
        <div className="hidden lg:flex justify-center">
          <List links={links} isMobile={false} />
        </div>
      </div>
      {showMenu && (
        <div className="fixed z-50 top-0 right-0 bottom-0 left-0 rounded-md">
          <div
            className="fixed top-0 right-0 bottom-0 transform transition duration-300 ease-in-out translate-x-0"
            
          >
            {/* Render List component for small screens */}
            <div className="lg:hidden">
              <List links={links} isMobile={true} closeMenu={closeMenu} />
            </div>
            <button
              className="absolute top-0 right-0 mr-2 mt-3 text-grey shadow-md p-2"
              onClick={toggleMenu}
            >
              <FaTimes style={{ fontSize: '20px' }} />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
