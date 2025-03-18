import React from "react";
import { FaSearch } from "react-icons/fa";
import heroImg from "/src/assets/heroImg.png";
import reactIcon from "/src/assets/backgroundImages/react.png";
import globeIcon from "/src/assets/backgroundImages/globe.png";
import vaccumIcon from "/src/assets/backgroundImages/vaccum.png";
import triangleIcon from "/src/assets/backgroundImages/triangle.png";
import scaleIcon from "/src/assets/backgroundImages/scale.png";
import bulbsketchIcon from "/src/assets/backgroundImages/bulbsketch.png";
import pcIcon from "/src/assets/backgroundImages/pc.png";

function Hero() {
  return (
    <section
      id="home"
      className="bg-[#FDF8EE] py-16 sm:px-20 px-8 flex flex-col md:flex-row items-center justify-between relative"
    >
      {/* Background Images - Now Responsive */}
      <img
        src={reactIcon}
        alt=""
        className="w-10 sm:w-16 absolute right-2 sm:right-8 top-10 sm:top-10"
      />
      <img
        src={globeIcon}
        alt=""
        className="w-10 sm:w-16 absolute right-1 sm:right-8 bottom-60 sm:bottom-20"
      />
      <img
        src={vaccumIcon}
        alt=""
        className="w-10 sm:w-16 absolute left-1 sm:left-20 bottom-60 sm:bottom-12"
      />
      <img
        src={triangleIcon}
        alt=""
        className=" sm:block w-12 sm:w-20 absolute left-1 sm:left-80 bottom-24 sm:bottom-16"
      />
      <img
        src={scaleIcon}
        alt=""
        className="w-10 sm:w-14 absolute left-1 sm:left-96 top-1 sm:top-16"
      />
      <img
        src={bulbsketchIcon}
        alt=""
        className="hidden sm:block w-12 sm:w-16 absolute right-24 sm:right-64 top-12 sm:top-1"
      />
      <img
        src={pcIcon}
        alt=""
        className="hidden sm:block w-12 sm:w-16 absolute right-32 sm:right-96 top-12 sm:top-8"
      />

      {/* Hero Content */}
      <div className="max-w-lg">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 leading-tight">
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
        <div className="mt-6 flex items-center bg-white p-2 rounded-full shadow-md w-full max-w-sm">
          <FaSearch className="text-gray-500 ml-3" />
          <input
            type="text"
            placeholder="Search for a location..."
            className="flex-grow px-4 py-2 text-sm outline-none text-gray-700 w-full"
          />
          <button className="bg-[#4D2C5E] text-white px-6 py-2 rounded-full hover:bg-purple-800 transition">
            Continue
          </button>
        </div>
      </div>

      {/* Hero Image */}
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
