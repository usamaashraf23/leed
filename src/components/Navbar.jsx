import React from "react";
import logoImg from "/src/assets/logoImg.png";
function Navbar() {
  return (
    <nav className="bg-[#FDF8EE] flex items-center justify-between px-8 py-4 bg-cream ">
      <div className="flex items-center">
        <img src={logoImg} alt="Book Store Logo" className="h-16 w-44 mr-2" />
      </div>
      <ul className="sm:flex  space-x-6 font-bold hidden">
        <li className="hover:text-purple-600 cursor-pointer font">Home</li>
        <li className="hover:text-purple-600 cursor-pointer">About us</li>
        <li className="hover:text-purple-600 cursor-pointer">Courses</li>
        <li className="hover:text-purple-600 cursor-pointer">Our Service</li>
        <li className="hover:text-purple-600 cursor-pointer">Contact us</li>
      </ul>
      <button className="bg-[#4D2C5E] text-white hidden font-semibold cursor-pointer px-8 py-2 rounded-full hover:bg-purple-700 transition">
        Sign in
      </button>
    </nav>
  );
}

export default Navbar;
