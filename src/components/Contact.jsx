import React from "react";
const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Us
          </p>
          <p className="py-6">Reach me out</p>
        </div>
        <form
          action="https://getform.io/f/nbvvkyyb"
          method="POST"
          className="flex flex-col justify-center items-center"
        >
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="w-1/2 p-2 m-2 rounded bg-transparent border-2 border-white-500"
          />
          <input
            name="email"
            type="text"
            placeholder="Enter Your Email"
            className="w-1/2 p-2 m-2 rounded bg-transparent border-2 border-white-500"
          />
          <textarea
            name="description"
            className="w-1/2 h-32 p-2 m-2 rounded bg-transparent border-2 border-white-500"
          />
          <button
            type="submit"
            className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Let's Talk
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
