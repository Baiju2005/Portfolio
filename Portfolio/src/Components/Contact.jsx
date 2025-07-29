import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Server error. Please try again later.");
      console.error(error);
    }
  };

  return (
    <section className="bg-[#f9fafb] py-20 px-5 md:px-20 text-gray-900" id="contact">
      <h2 className="text-4xl font-bold text-center mb-14">
        <span className="text-[#55dd1a]">#</span> Let’s Connect
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Info Card */}
        <div className="md:w-1/2 w-full">
          <div className="bg-white h-full min-h-[400px] rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Info</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <i className="ri-user-3-line text-[#55dd1a] text-xl"></i>
                  <p>Baiju Kumar Yadav</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-mail-line text-[#55dd1a] text-xl"></i>
                  <p>yadavbaiju2005@gmail.com</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-map-pin-line text-[#55dd1a] text-xl"></i>
                  <p>Bhopal, India</p>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-github-fill text-[#55dd1a] text-xl"></i>
                  <a
                    href="https://github.com/Baiju2005"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    github.com/Baiju2005
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <i className="ri-linkedin-box-fill text-[#55dd1a] text-xl"></i>
                  <a
                    href="https://www.linkedin.com/in/baiju-yadav-4882b81aa/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/baiju-yadav-4882b81aa
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500 italic pt-6">
              <b>Always open for collaboration, internships, or freelance work.</b>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 w-full">
          <form
            onSubmit={handleSubmit}
            className="bg-white h-full min-h-[400px] rounded-2xl shadow-lg p-8 border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55dd1a]"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55dd1a]"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#55dd1a]"
                    placeholder="Let’s work together..."
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-[#55dd1a] text-white px-6 py-2 rounded-md hover:bg-[#4dc317] transition font-semibold cursor-pointer flex items-center justify-center gap-2"
            >
              🚀 Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
