import React from "react";
import PythonIcon from '../assets/tech-icons/Python.png';
import SQLIcon from '../assets/tech-icons/SQL.png';
import JsIcon from '../assets/tech-icons/Js.png';

import scikitLearnIcon from '../assets/tech-icons/scikit-learn.png';
import PandasIcon from '../assets/tech-icons/pandas.png';
import DataFactoryIcon from '../assets/tech-icons/DataFactory.png';
import TensorflowIcon from '../assets/tech-icons/Tensorflow.png';
import LangchainIcon from '../assets/tech-icons/Langchain1.png';

import HTMLIcon from '../assets/tech-icons/HTML.png';
import CSSIcon from '../assets/tech-icons/CSS.png';
import TailwindIcon from '../assets/tech-icons/Tailwind.png';
import ReactIcon from '../assets/tech-icons/React.png';

import NodeIcon from '../assets/tech-icons/node.png';
import FlaskIcon from '../assets/tech-icons/Flask.png';
import MongoDBIcon from '../assets/tech-icons/MongoDB.png';
import RestApiIcon from '../assets/tech-icons/API.png';

import PowerBiIcon from '../assets/tech-icons/PowerBi.png';
import GithubIcon from '../assets/tech-icons/Github.png';
import AzureIcon from '../assets/tech-icons/azure.png';
import LogicIcon from '../assets/tech-icons/Logic.png';

const techStack = [
  {
    category: "Languages",
    items: [
      { name: "Python", icon: PythonIcon },
      { name: "SQL", icon: SQLIcon },
      { name: "JavaScript", icon: JsIcon },
    ],
  },
  {
    category: "Data Science",
    items: [
      { name: "Pandas", icon: PandasIcon },
      { name: "DataFactory", icon: DataFactoryIcon },
      { name: "scikit-learn", icon: scikitLearnIcon  },
      { name: "Tensorflow", icon: TensorflowIcon },
      { name: "Langchain", icon: LangchainIcon },

    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: HTMLIcon },
      { name: "CSS", icon: CSSIcon },
      { name: "Tailwind", icon: TailwindIcon },
      { name: "React", icon: ReactIcon },
    ],
  },
  {
    category: "Backend",
    items: [
      {name: "Node.js", icon: NodeIcon},
      {name: "Flask", icon: FlaskIcon},
      {name: "REST API", icon: RestApiIcon},
      {name:"MongoDB", icon: MongoDBIcon},
    ],
  },
  {
    category: "Others",
    items: [
      { name: "PowerBi", icon: PowerBiIcon },
      { name: "Github", icon: GithubIcon },
      { name: "Azure", icon: AzureIcon },
      { name: "ProblemSolving", icon: LogicIcon },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="py-10 px-5 md:px-20 bg-white text-gray-800 ">
      <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack</h2>

      <div id="Techstack" className="space-y-6">
        {techStack.map((group, index) => (
          <div
            key={index}
            className="flex items-center gap-6 flex-wrap md:flex-nowrap"
          >
            <h3 className="text-xl font-bold text-gray-700 min-w-[120px]">
              {group.category}:
            </h3>

            <div className="flex gap-6 flex-wrap md:gap-20">
              {group.items.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center w-20 text-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-[50px] h-[50px] object-contain"
                  />
                  <span className="text-sm mt-1">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
