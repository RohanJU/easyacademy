import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-blue-600 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white-30 ">
        <div className="flex flex-col md:items-start items-center w-full">
          <img
            className="w-20 md:w-25 h-auto self-center"
            src={assets.logo}
            alt="logo"
          />
          <p className="m-6 text-center md:ext-left text-sm text-white/80">
            Easy Academy is your one-stop learning platform offering
            high-quality courses from India's top educators. Whether you're
            preparing for school exams, competitive tests like JEE/NEET, or
            exploring new skills like coding — we’ve got you covered. Learn at
            your own pace, anytime, anywhere.
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5 ">Company</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5  ">
            Subscribe to our Newsletter
          </h2>
          <p className="text-sm text-white/80">
            The Latest news, articles,and resources, send to your inbox monthly
          </p>
          <div className="flex items-center gap-2 pt-4">
            <input type="email" placeholder="Enter the email"
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
            />

            <button className="bg-white w-24 h-9 text-black rounded">Subscribe</button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60 ">
        Copyright 2025 © Druze Analytics. All Right Reserved.
      </p>
      
    </footer>
  );
};

export default Footer;
