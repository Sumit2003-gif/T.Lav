import React from "react";

const projects = [
  {
    title: "Construction Scheduler",
    description:
      "I'm a great place for you to tell a story and let your users know a little more about you.",
  },
  {
    title: "Receptionist",
    description:
      "I'm a great place for you to tell a story and let your users know a little more about you.",
  },
  {
    title: "Civil Engineer - Senior Level",
    description:
      "I'm a great place for you to tell a story and let your users know a little more about you.",
  },
  {
    title: "Project Manager",
    description:
      "I'm a great place for you to tell a story and let your users know a little more about you.",
  },
  {
    title: "Architect",
    description:
      "I'm a great place for you to tell a story and let your users know a little more about you.",
  },
  {
    title: "Interior Designer",
    description:
      "I'm a great place for you to tell a story and let your users know a little more about you.",
  },
];

const Project = () => {
  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div
        className="relative w-full h-96 flex items-center justify-center text-center"
        // style={{
        //   backgroundImage: `url(${topImage})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className=" p-8 rounded-xl text-white">
          <p className="text-lg md:text-xl mb-2 text-black">Join the Success</p>
          <h1 className="text-4xl text-orange-500 md:text-6xl font-extrabold">
            We Are Hiring a Range of Positions
          </h1>
        </div>
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="flex justify-between gap-8">
          {/* Left Side */}
          <div className="w-1/2">
            {projects.slice(0, 3).map((project, index) => (
              <div
                key={index}
                className="mb-8"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg w-full">
                  <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="w-1/2">
            {projects.slice(3, 6).map((project, index) => (
              <div
                key={index}
                className="mb-8"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg w-full">
                  <h2 className="text-xl font-semibold mb-4">{project.title}</h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
