import React, { useState } from "react";

const PortfolioProjects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Sample project data
    const projects = [
        { id: 1, title: "Startup Landing Page", category: "Web Development", description: "A modern landing page for startups." },
        { id: 2, title: "Job Portal Page", category: "PortFolio", description: "Find your dream job with ease." },
        { id: 3, title: "Agency Website", category: "Web Development", description: "Solutions for small agencies." },
        { id: 4, title: "Graphic Design Portfolio", category: "E-Commerce", description: "Showcase your creativity." },
        { id: 5, title: "E-commerce App", category: "PortFolio", description: "Shop seamlessly online." },
    ];

    // Filtered projects based on selected category
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(project => project.category === selectedCategory);

    return (
        <section className="my-20 py-12" style={{ backgroundColor: "#f3f8fd" }}>
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <h1 className="text-blue-600 text-lg sm:text-lg font-bold mb-4">
                        Creative Project's <br />
                        <span className="text-black text-5xl">Recent Work</span>
                    </h1>
                </div>

                {/* Category Buttons */}
                <div className="flex justify-center space-x-4 mb-8">
                    {["All", "Web Development", "E-Commerce", "PortFolio"].map(category => (
                        <button
                            key={category}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                                selectedCategory === category
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-200 text-gray-800 hover:bg-blue-600 hover:text-white"
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
                        >
                            <div className="h-48 bg-gray-200 rounded-t-lg mb-4"></div>
                            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-gray-600">{project.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioProjects;
