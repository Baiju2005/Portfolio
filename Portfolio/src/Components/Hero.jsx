const Hero = () => {
    return (
        <section className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-20 py-10 bg-black  pt-32">

            {/* Text Section (now below on mobile) */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6 mt-10 md:mt-0">
                <h1 className="text-4xl md:text-5xl text-white font-sans">
                    Baiju Kuamr <span className="text-[#00D664]">Yadav</span>
                </h1>
                <h3 className="text-3xl md:text-3xl text-white font-sans">Final year CSE student</h3>
                <p className="text-lg text-gray-400 text-center md:text-left leading-relaxed max-w-xl mx-auto md:mx-0">
                    <b className="text-white">From Frontend to Forecasts — Building Intelligent Digital Solutions.</b> <br />
                    Turning complex data into meaningful insights and seamless user experiences.
                    Empowering businesses with modern web apps and machine learning models
                </p>
                <a href="#contact" className="cta-button inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
                    Hire Me <i className="ri-arrow-right-line"></i>
                </a>

            </div>

            {/* Video Section (now on top on mobile) */}
            <div className="w-full md:w-1/2 flex justify-center">
                <video
                    className="w-full max-w-md rounded-2xl shadow-lg"
                    src="/Video.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>

        </section>
    );
};

export default Hero;
