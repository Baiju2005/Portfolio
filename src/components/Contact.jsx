import React from 'react'
import { useState } from "react";

export const Contact = () => {

    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        suggestion: "",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        setFormSubmitted(true);

        // Reset the form (Optional)
        setFormData({
            name: "",
            email: "",
            suggestion: "",
        });
    };
    
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center  p-6">
                <div className="bg-darkblue shadow-md rounded-lg p-6 w-full max-w-md shadow-[30px_30px_5px_-15px_rgba(255,255,255,0.3)]">
                    <h2 className="text-2xl font-bold text-gray-50 mb-4 text-center">
                        Contact Us
                    </h2>

                    {formSubmitted && (
                        <div className="mb-4 text-green-600 font-semibold">
                            Thank you for your suggestion!
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-gray-50 font-medium">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 mt-2 border text-neutral-50 bg-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-neutral-50"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-gray-50 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 mt-2 border text-neutral-50 bg-transparent rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-neutral-50"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Suggestion Field */}
                        <div>
                            <label
                                htmlFor="suggestion"
                                className="block text-gray-50 font-medium"
                            >
                                Suggestion
                            </label>
                            <textarea
                                id="suggestion"
                                name="suggestion"
                                value={formData.suggestion}
                                onChange={handleChange}
                                required
                                className="w-full text-neutral-50 bg-transparent px-4 py-2 mt-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-neutral-50"
                                placeholder="Enter your suggestion"
                                rows="4"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full border rounded-md bg-indigo-700 hover:bg-transparent text-white font-medium py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>


        </div>
    );
}
