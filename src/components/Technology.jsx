import React from 'react';
import PythonImg from '../assets/icons/pngwing.png';
import NumpyImg from '../assets/icons/NumPy.png';
import Pandas from "../assets/icons/Pandas.png";
import Matplotlib from "../assets/icons/matplotlib.png";
import Sklearn from "../assets/icons/scikit-learn.png";
import MySql from "../assets/icons/mysql-24.png";
import Mern from "../assets/icons/MERN-logo.png";

export const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 px-4 lg:px-8">

      <h1 className="my-10 text-center text-3xl font-bold lg:text-4xl">Technologies</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center">
          <img src={PythonImg} alt="Python" className="w-16 h-16" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center">
          <img src={NumpyImg} alt="NumPy" className="w-16 h-16" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center">
          <img src={Pandas} alt="Pandas" className="w-16 h-16" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center">
          <img src={Matplotlib} alt="Matplotlib" className="w-16 h-16" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center">
          <img src={Sklearn} alt="Scikit-learn" className="w-16 h-16" />
        </div>

        <div className="rounded-2xl border-4 border-neutral-800 p-4 flex justify-center items-center">
          <img src={MySql} alt="MySQL" className="w-16 h-16" />
        </div>
      </div>


      <div className="flex justify-center items-center mt-12">
        <img src={Mern} alt="MERN Stack" className="w-60 sm:w-80 lg:w-96" />
      </div>
    </div>
  );
};
