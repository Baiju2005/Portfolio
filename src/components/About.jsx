import React from 'react'
import AboutImg from '../assets/about.jpg'

export const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>

            <h1 className='my-20 text-center text-4xl'>
                About <span className='text-neutral-500'>Me</span>
            </h1>

            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">

                        <img className='roounded-2xl' src={AboutImg} alt="About" />

                    </div>



                </div>

                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start ">
                        <p className='my-2 max-w-xl py-6'>I am a pre-final year B.Tech Computer Science and Engineering student with a strong foundation in both web development and data science. I am proficient in the MERN stack, which includes MongoDB, Express.js, React, and Node.js, and I have experience building full-stack web applications. In addition to my development skills, I am currently working in the field of data science, where I apply my analytical abilities to process and interpret data to drive business insights. My passion lies in leveraging technology to create impactful solutions, and I am eager to further hone my skills as I progress in my academic and professional journey..</p>
                    </div>
                </div>


            </div>

        </div>
    )
}
