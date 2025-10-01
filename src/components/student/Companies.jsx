import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className="pt-10 overflow-hidden">
      <h1 className="md:text-4xl text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto mb-10">
        Trusted By Learners From Different States
      </h1>

      {/* Marquee container */}
      <div className="relative w-full">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Repeat logos multiple times for smooth looping */}
          {Array(2)
            .fill(0)
            .map((_, idx) =>
              [
                assets.cbse_logo,
                assets.cbse_logo,
                assets.cbse_logo,
                assets.cbse_logo,
                assets.cbse_logo,
                assets.cbse_logo,
              ].map((logo, i) => (
                <img
                  key={`${idx}-${i}`}
                  src={logo}
                  alt="CBSE"
                  className="w-20 md:w-28 mx-4 inline-block"
                />
              ))
            )}
        </div>
      </div>
    </div>
  );
};

export default Companies;
