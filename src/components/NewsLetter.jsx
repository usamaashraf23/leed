import React from "react";
import bulb from "/src/assets/backgroundImages/bulb.png";
function NewsLetter() {
  return (
    <section className="relative bg-[#4D2C5E] text-white px-10 py-20 my-10 rounded-none sm:rounded-2xl w-full max-w-5xl mx-auto shadow-lg overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 border border-white opacity-20 rounded-full"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border border-white opacity-20 rounded-full"></div>
      <img
        src={bulb}
        alt="Arrow Icon"
        className="absolute sm:bottom-4 sm:left-10 bottom-0.5 left-1 sm:h-24 h-20"
      />
      <img
        src={bulb}
        alt="Light Bulb Icon"
        className="absolute sm:bottom-4 bottom-0.5 sm:right-10 right-1  sm:h-24 h-20"
      />
      <div className="text-center">
        <h2 className="text-2xl font-semibold">Subscribe to our newsletter</h2>
        <p className="text-sm text-gray-300 mt-2">
          Lorem Ipsum is simply dummy text of the printing.
        </p>
      </div>
      <div className="mt-6 flex  items-center justify-center">
        <input
          type="email"
          placeholder="Email Address"
          className="py-3 px-5 w-72 rounded-full rounded-br-none rounded-tr-none text-black bg-white outline-none"
        />
        <button className=" px-5 py-3 bg-orange-500 text-white rounded-full rounded-bl-none rounded-tl-none hover:bg-orange-600 transition">
          Send
        </button>
      </div>
    </section>
  );
}

export default NewsLetter;
