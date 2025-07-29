import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Name & Tagline */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-white">Baiju Kumar Yadav</h3>
          <p className="text-sm text-gray-400">
            Made with ❤️ using React & Tailwind CSS
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-5">
          {[
            {
              href: "https://github.com/baijuyadav",
              icon: "ri-github-fill",
            },
            {
              href: "https://linkedin.com/in/baijuyadav",
              icon: "ri-linkedin-box-fill",
            },
            {
              href: "mailto:baiju@example.com",
              icon: "ri-mail-line",
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#55dd1a] transition duration-300 hover:text-white shadow-md hover:scale-110"
              title={social.icon.split("-")[1]} // optional tooltip
            >
              <i
                className={`${social.icon} text-xl group-hover:scale-110 transition-transform`}
              ></i>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs mt-8 text-gray-500">
        © {new Date().getFullYear()} Baiju Kumar Yadav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
