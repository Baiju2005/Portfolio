import React from "react";
import Internship1 from "../assets/Internship/InnometicsLab.jpg";
import Internship2 from "../assets/Internship/CybromTechnology.jpg";

const experiences = [
    {
      role: "Data Science Intern",
      company: "Cybrom Technology PVT LTD, Bhopal",
      duration: "feb 2025 – Apr 2025",
      description:
        "Developed responsive websites, handled deployment, and integrated contact forms using Google Sheets.",
      tools: ["HTML", "CSS", "JavaScript", "GitHub", "Netlify"],
      certificate: Internship2,
    },
  {
    role: "Data Science Intern",
    company: "Innometics Research Lab, Hyderabad",
    duration: "Feb 2025 – Mar 2025",
    description:
      "Built a real-time AI chatbot using Streamlit and LangChain, integrated LLMs, and worked on data pipelines.",
    tools: ["Python", "LangChain", "Streamlit", "LLMs", "Data Engineering"],
    certificate: Internship1,
  },
];

const Experience = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div id="experience" className="space-y-16">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-start gap-8 bg-gray-100 rounded-2xl p-6 shadow hover:shadow-md transition"
          >
            {/* Left - Text */}
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-black">{exp.role}</h3>
              <p className="text-md font-semibold text-gray-800">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
              <p className="text-sm text-gray-700 mb-3">{exp.description}</p>

              <div className="mb-3">
                <p className="font-medium text-gray-800">Tools & Technologies:</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {exp.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="bg-gray-900 text-[#55dd1a] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Certificate Image */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src={exp.certificate}
                alt={`${exp.company} Certificate`}
                className="w-full max-w-sm rounded-lg border shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
