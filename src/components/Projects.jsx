import React from 'react'

export const Projects = () => {
    const projects = [
        {
            title: "Project One",
            description: "This is a brief description of  first project.",
            image: "https://via.placeholder.com/150", 
        },
        {
            title: "Project Two",
            description: "This is a brief description of  second project.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Project Three",
            description: "This is a brief description of  third project.",
            image: "https://via.placeholder.com/150",
        },
        {
            title: "Project Four",
            description: "This is a brief description of  fourth project.",
            image: "https://via.placeholder.com/150",
        },
    ];

    return (
        <div>
            <div className="container mx-auto p-6">
                <h1 className="text-4xl  text-center mb-8">Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg p-4 flex flex-col items-center text-center"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-32 h-32 object-cover rounded-full mb-4"
                            />
                            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}
