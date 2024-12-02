import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    {/* Left Section */}
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-3xl font-semibold text-blueGray-700">Let's keep in touch!</h4>
                        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2 business days.
                        </h5>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="w-full lg:w-6/12 px-4 mt-8 lg:mt-0">
                        <div className="flex flex-wrap items-center justify-center lg:justify-end space-x-6">
                            <a
                                href="https://github.com/Baiju2005"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-50 hover:text-gray-600"
                            >
                                <FaGithub size={30} />
                                <h5 className="text-lg font-medium">GitHub</h5>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/baiju-yadav-4882b81aa/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-blue-700 hover:text-blue-500"
                            >
                                <FaLinkedin size={30} />
                                <h5 className="text-lg font-medium">LinkedIn</h5>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <hr className="my-6 border-blueGray-300" />

                {/* Copyright Section */}
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">{new Date().getFullYear()}</span>
                            <a
                                href="https://github.com/Baiju2005"
                                className="text-blueGray-500 hover:text-gray-800"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Baiju Kumar Yadav
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
