import React from "react";

const Our_Projects = () => {
  const projects = [
    {
      title: "Luxury Villa",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1572120360610-d971b9b63921?auto=format&fit=crop&w=800&q=80",
      ],
      description: "Elegant and modern design with top-quality materials."
    },
    {
      title: "Office Complex",
      images: [
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1532619675605-64e43c5c5f12?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-2b6a0f5b64c3?auto=format&fit=crop&w=800&q=80",
      ],
      description: "A functional workspace built for productivity."
    }
    // Add more projects if needed
  ];

  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Projects
        </h1>
        <p className="text-gray-600 mt-4">
          At T. Lav & Nguyen, we bring your construction projects to life with a
          focus on precision and quality. Every structure we build reflects our
          dedication to craftsmanship and innovation.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
          >
            {/* Big Top Image */}
            <div className="relative group">
              <img
                src={project.images[0]}
                alt={`${project.title} main`}
                className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300"></div>
            </div>

            {/* Two Small Images */}
            <div className="flex gap-2 mt-2 px-2">
              <div className="relative flex-1 h-32 overflow-hidden rounded-lg group">
                <img
                  src={project.images[1]}
                  alt={`${project.title} 2`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300"></div>
              </div>
              <div className="relative flex-1 h-32 overflow-hidden rounded-lg group">
                <img
                  src={project.images[2]}
                  alt={`${project.title} 3`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition duration-300"></div>
              </div>
            </div>

            {/* Text */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Our_Projects;
