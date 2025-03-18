import React, { useState } from "react";
import logoImg from "/src/assets/logoImg.png";
import { RiCloseLargeFill, RiMenu3Fill } from "react-icons/ri";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
function Navbar() {
  const menu = (
    <>
      <div className="h-screen  w-screen z-10 bg-[#FDF8EE] transition-transform py-12 flex flex-col items-center justify-center md:hidden">
        <ul className="flex flex-col  items-center ">
          <HashLink
            spy={true}
            smooth={true}
            to="#home"
            onClick={() => setOpen(false)}
          >
            <li className="py-3 border-b-2 text-xl">Home</li>
          </HashLink>
          <HashLink
            spy={true}
            smooth={true}
            to="#about"
            onClick={() => setOpen(false)}
          >
            <li className="py-3 border-b-2 text-xl">About Us</li>
          </HashLink>
          <HashLink
            spy={true}
            smooth={true}
            to="#projects"
            onClick={() => setOpen(false)}
          >
            <li className="py-3 border-b-2 text-xl">Courses</li>
          </HashLink>
          <HashLink
            spy={true}
            smooth={true}
            to="#projects"
            onClick={() => setOpen(false)}
          >
            <li className="py-3 border-b-2 text-xl">Our Service</li>
          </HashLink>
          <HashLink
            spy={true}
            smooth={true}
            to="#projects"
            onClick={() => setOpen(false)}
          >
            <li className="py-3 border-b-2 text-xl">Contact Us</li>
          </HashLink>
          <button className="bg-[#4D2C5E] text-white font-semibold cursor-pointer px-8 py-2 my-2 rounded-full hover:bg-purple-700 transition">
            Sign in
          </button>
        </ul>
      </div>
    </>
  );
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <BrowserRouter>
      <nav className="bg-[#FDF8EE] hidden sm:flex items-center justify-between px-8 py-4 ">
        <div className="flex items-center">
          <img src={logoImg} alt="Book Store Logo" className="h-16 w-44 mr-2" />
        </div>
        <ul className="sm:flex  space-x-6 font-bold ">
          <li className="hover:text-purple-600 cursor-pointer font">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">About us</li>
          <li className="hover:text-purple-600 cursor-pointer">Courses</li>
          <li className="hover:text-purple-600 cursor-pointer">Our Service</li>
          <li className="hover:text-purple-600 cursor-pointer">Contact us</li>
        </ul>
        <button className="bg-[#4D2C5E] text-white font-semibold cursor-pointer px-8 py-2 rounded-full hover:bg-purple-700 transition">
          Sign in
        </button>
      </nav>
      <div className="py-4  bg-[#FDF8EE]  justify-between px-4 shadow-2xl shadow-gray-500/40 sm:hidden flex">
        <div className="flex items-center gap-1 ">
          <img className="h-12 w-40" src={logoImg} />
        </div>
        <button onClick={handleClick} className="transition cursor-pointer">
          {open ? <RiCloseLargeFill size={22} /> : <RiMenu3Fill size={22} />}
        </button>
      </div>
      {open && menu}
    </BrowserRouter>
  );
}

export default Navbar;
