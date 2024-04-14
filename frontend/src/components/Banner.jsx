import React from "react";
import bannerImg from "/images/home/banner.png";
import { useTheme } from "../hooks/ThemeContext";
import { Link } from "react-router-dom";

const Banner = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`max-w-screen-2xl h-screen container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% ${isDarkMode ? 'dark' : ''}`}>
      <div className={`py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8 ${isDarkMode ? 'text-white' : ''}`}>

        {/* img */}
        <div className="px-20      md:w-1/2">
          <img src={bannerImg} alt="" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">

          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2  px-4 space-y-7">
        <h2 className="md:text-6xl text-4xl  font-bold md:leading-snug leading-snug ">
            WELCOME TO  <span className="text-[#FB513A]">BENNEATS</span>
          </h2>
          <p className="text-[#667F90] text-xl">
            
            <b>Where conveninece meets deliciousness!!!</b>
          </p>
          <br />
          <Link to="/menu">
          <button className="bg-[#667F90]  font-semibold btn text-white px-8 py-3 rounded-full">
            <b>Order Now </b>
          </button>
          </Link>
          
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
