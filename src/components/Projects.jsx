import React from "react";
import ecommerece from "../assets/ecommerce.png";
import portfolio from "../assets/portfolio.png";

function Projects() {
    const projects = [
        {
            title: "Portfolio Website",
            description: "A personal portfolio showcasing my projects and achievements, built with React and Tailwind CSS.",
            technologies: ["React", "Tailwind CSS", "JavaScript"],
            image: portfolio, // Replace with your project image URL
            link: "https://github.com/Sohil-Magixz/portfolio", // GitHub or Live demo link
        },
        {
            title: "E-Commerce App",
            description: "An online e-commerce platform with shopping cart, payment gateway, and user authentication.",
            technologies: ["HTML", "Tailwind CSS", "JavaScript"],
            image: ecommerece,
            link: "https://sohil-magixz.github.io/Skins-E-commerece-Webpage/",
        },
        {
            title: "Task Manager",
            description: "A task management application that helps users track their daily tasks and progress.",
            technologies: ["Java", "Spring Boot", "MySQL"],
            image: "https://via.placeholder.com/300x200",
            link: "https://github.com/Sohil-Magixz/task-manager",
        },
    ];

    return (
        <div id="projects" className="projects-section py-10 bg-slate-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl text-center text-black font-bold underline underline-offset-8 decoration-red-500 mb-8">Projects | Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-black">{project.title}</h3>
                                <p className="mt-4 text-gray-600">{project.description}</p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="px-3 py-1 bg-gray-200 text-sm rounded-full">{tech}</span>
                                    ))}
                                </div>
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-red-500 text-white px-5 py-2 rounded-full transition duration-300 hover:bg-red-600">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
