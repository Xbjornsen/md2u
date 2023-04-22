import React from "react";
import "tailwindcss/dist/tailwind.min.css"; // Import the Tailwind CSS file

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-sm ">
      <div className="container mx-auto px-4 lg:py-4 sm:py-2 flex justify-between">
        <div>
          <p className="text-gray-600 ">&copy; {new Date().getFullYear()} Your Medical Centre. All rights reserved.</p>
        </div>
        <div>
          <ul className="flex flex-wrap">
            <li className="mr-4 mb-2">
              <a href="/terms" className="text-gray-600 hover:text-gray-800">
                Terms of Service
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a href="/privacy" className="text-gray-600 hover:text-gray-800">
                Privacy Policy
              </a>
            </li>
            <li className="mr-4 mb-2">
              <a href="/disclaimer" className="text-gray-600 hover:text-gray-800">
                Disclaimer
              </a>
            </li>
            {/* Add more relevant documentation and policies links */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
