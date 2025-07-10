import React from "react";
import { assets } from "../../assets/assets";
import Searchbar from "./SearchBar";

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20
px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className="md:text-4xl text-home-heading-small relative font-bold text-gray-800 max-w-3xl x-auto ">
        🎓 EasyAcademy – Education for All. Excellence for Life.
        <br />
        <span className="text-blue-600">
          Doctors, Engineers, Coders — Every dream begins here.
        </span>
        <img
          src={assets.sketch}
          alt=""
          className=" md:block hidden absolute -bottom-7 right-0"
        />
      </h1>
      <p className="md:block hidden text-gray-500 max-w-2x1 mx-auto">Education is a right, not a privilege.<br/>
      We’re making it accessible — to every student, everywhere, for free.</p>
      <p className="'md: hidden text-gray-500 max-w-sm mx-auto">Education is a right, not a privilege.<br/>
      We’re making it accessible</p>
      <Searchbar />
    </div>
  );
};

export default Hero;
