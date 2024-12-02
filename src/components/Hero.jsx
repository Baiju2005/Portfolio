import React from 'react';
import Profile from '../assets/Profile.jpg';

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row">
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start px-4 lg:px-8">
            <h1 className="pb-4 text-4xl font-thin tracking-tight sm:text-5xl lg:mt-16 lg:text-6xl">
              Baiju Kumar Yadav
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent sm:text-2xl lg:text-4xl">
              Data Science & Full Stack Developer
            </span>
            <p className="my-4 max-w-md text-center font-light tracking-tighter sm:text-lg lg:text-left lg:py-6 lg:max-w-xl">
              I am a pre-final year B.Tech CSE student with a strong background in full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js). Alongside my development skills, I am currently working in data science, where I focus on extracting valuable insights from data to support business decision-making. I am passionate about leveraging both my programming and analytical abilities to create innovative solutions and contribute to impactful projects in the tech industry.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="flex justify-center lg:justify-end px-4 lg:px-8">
            <div className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 p-2 rounded-full">
              <img
                src={Profile}
                alt="Profile Image"
                className="block w-32 h-32 rounded-full sm:w-40 sm:h-40 lg:w-56 lg:h-56"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;