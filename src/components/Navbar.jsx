import React from 'react';
import{FaLinkedin} from "react-icons/fa";
import{FaGithub} from "react-icons/fa";
import{FaSquareXTwitter} from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <img src= {logo} alt="logo" /> */}
            <h1 className='text-3xl font-bold'>Port<span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>folio</span></h1>
        </div>

        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <a href="https://www.linkedin.com/in/baiju-yadav-4882b81aa/"><FaLinkedin /></a>
            <a href="https://github.com/Baiju2005"><FaGithub /></a>
            <a href="#"><FaSquareXTwitter /></a>
        </div>

    </nav>
  )
}

export default Navbar