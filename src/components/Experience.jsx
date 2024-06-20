import React from "react";
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import github from "../assets/github.png";
import react from "../assets/react.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
const Experience = () => {
  const skills = [
    {
      id: 1,
      src: c,
      name: "c",
    },
    {
      id: 2,
      src: cpp,
      name: "cpp",
    },
    {
      id: 3,
      src: html,
      name: "html",
    },
    {
      id: 4,
      src: css,
      name: "css",
    },
    {
      id: 5,
      src: javascript,
      name: "javascript",
    },
    {
      id: 6,
      src: github,
      name: "github",
    },
    {
      id: 7,
      src: react,
      name: "react",
    },
    {
      id: 8,
      src: node,
      name: "node",
    },
    {
      id: 9,
      src: tailwind,
      name: "tailwind",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">This are the technology I've worked with</p>
        </div>

        <div className="grid sm:grid-cols-3 md-cols-3 gap-8 px-12 sm:px-0">
          {skills.map(({ id, src, name }) => (
            <div
              key={id}
              className="shadow-md flex justify-center flex-col items-center shadow-gray-600 rounded-lg hover:shadow-orange-600"
            >
              <img
                src={src}
                alt=""
                className="rounded-md w-24 duration-200 hover:scale-105"
              />
              <h2 className="m-4 duration-200 hover:scale-105">
                {name.toUpperCase()}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
