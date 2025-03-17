import React from "react";
import { FaSearch } from "react-icons/fa";
import heroImg from "/src/assets/heroImg.png";
function Hero() {
  return (
    <section className="bg-[#FDF8EE] py-16 sm:px-20 px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800">
          The{" "}
          <span className="text-orange-500">
            Smart <br />
          </span>{" "}
          Choice For <span className="text-orange-500">Future</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Elearn is a global training provider based across the UK that
          specialises in accredited and bespoke training courses.
        </p>
        <div className="mt-6 flex items-center bg-white p-2 rounded-full shadow-md max-w-md">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="Search for a location..."
            className="flex-grow px-4 py-2 outline-none text-gray-700"
          />
          <button className="bg-[#4D2C5E] text-white px-6 py-2 rounded-full hover:bg-purple-800 transition">
            Continue
          </button>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={heroImg}
          alt="E-learning Illustration"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
}

export default Hero;
