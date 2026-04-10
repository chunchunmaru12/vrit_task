import React from "react";
import Courses from "./Courses";

const ExploreCourses: React.FC = () => {
  return (
    <section className="container w-full py-16">
      <div className="text-left">
        <div className="font-outfit text-base sm:text-xl md:text-2xl text-[#414141]">
          Explore our classes and master trending skills!
        </div>

        <div className="my-4 font-nohemi text-[1.25rem] sm:text-2xl md:text-[2rem] font-semibold text-[#333]">
          <span>Dive Into </span>
          <span className="text-[#1da077]">What's Hot Right Now! 🔥</span>
        </div>
      </div>

      <div className="w-full">
        <Courses />
      </div>
    </section>
  );
};

export default ExploreCourses;