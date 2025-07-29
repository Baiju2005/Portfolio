import React from 'react';
import myPhoto from '../assets/BAijuProfile.jpg';

const About = () => {
  return (
    <section id="about" className="py-10 px-5 md:px-20 bg-white text-gray-800">
      <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left - Image */}
        <div className="w-full flex justify-center mt-6 md:mt-0 md:w-1/2">
          <img
            src={myPhoto}
            alt="Baiju Kumar Yadav"
            className="rounded-2xl shadow-lg w-72 h-72 object-cover object-top"
          />
        </div>


        {/* Right - Text */}
        <div className="md:w-1/2 w-full text-lg leading-relaxed">
          <p>
            Hi, I'm <span className="font-semibold text-[#55dd1a]">Baiju Kumar Yadav</span>,
            a passionate developer currently pursuing B.Tech in Computer Science from RITS Bhopal.
            I specialize in building responsive and intelligent web applications using technologies
            like <span className="font-medium">React, Python, SQL, and Machine Learning</span>.
          </p>

          <p className="mt-4">
            With hands-on experience in both front-end and data-driven backend solutions, I enjoy
            turning ideas into reality through clean code and creative problem-solving. I’ve built
            multiple full-stack projects, implemented data analysis pipelines, and deployed scalable
            applications using cloud platforms.
          </p>

          <p className="mt-4">
            I’m constantly learning, improving, and exploring emerging tech to stay ahead in this
            ever-evolving field. Let’s build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
