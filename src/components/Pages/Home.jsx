import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for routing

const HomePage = () => {
  return (
    <div className=" flex-1 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-4 sm:align-center">Welcome to</h1>
      <h1 className="text-3xl mb-8 sm:align-center shadow-md">Chat to a GP</h1>
      <p className="mb-8 w-1/2 text-center">
        By clicking "Get Started," you'll be connected to our ChatGPT bot,
        which is designed to help answer your medical questions. Please note that
        parts of the conversation may be recorded for training purposes. If you
        wish to escalate the conversation to a real GP, you can click the
        "Escalate" button if you're not satisfied with the answers provided.
      </p>
      <Link
        to="/chappie"
        className="px-6 py-3 bg-blue-400 text-white rounded-full font-bold hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Get Started
      </Link>
    </div>
  );
};

export default HomePage;
