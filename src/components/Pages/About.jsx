import React from 'react';
import jerome from "../../images/jerome.png"

const About = () => {
  return (
    <div className="flex-1 container mx-auto px-4 py-8">
      <div className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl text-center font-bold mb-8">About Us</h1>
        <div className="flex flex-wrap justify-center">
          {/* Card 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-70 object-cover"
                src={jerome}
                alt='jerome'
              />
              <div className="px-4 py-4">
                <h2 className="text-lg font-bold mb-2">Dr Jerome Thorbjornsen</h2>
                <p className="text-gray-700">MBHD </p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                className="w-full h-70 object-cover"
                src={jerome}
                alt='jerome'
              />
              <div className="px-4 py-4">
                <h2 className="text-lg font-bold mb-2">Dr </h2>
                <p className="text-gray-700">Thorbjornsen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
