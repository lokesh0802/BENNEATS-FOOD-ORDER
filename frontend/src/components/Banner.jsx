import React from "react";
import bannerImg from "/images/home/banner.png";
import { useTheme } from "../hooks/ThemeContext";
import { Link } from "react-router-dom";

const Banner = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`max-w-screen-2xl h-screen container mx-auto xl:px-24 bg-gradient-to-t from-0% from-[#ffdfdf] to-[#FCFCFC] to-100% ${isDarkMode ? 'dark' : ''}`}>
      <div className={`py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8 ${isDarkMode ? 'text-white' : ''}`}>

        {/* img */}
        <div className="px-20   md:w-1/2">
          <img src={bannerImg} alt="" className="px-15" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">

          </div>
        </div>

        {/* texts */}
        <div className="md:w-1/2 mt-20 ml-10 space-y-7">
        <h2 className="md:text-6xl text-4xl  font-bold md:leading-snug leading-snug text-[#5D758A] px-15 font-serif">
            WELCOME TO  <span className="text-[#FE5142]">BENNEATS</span>
          </h2>
          <p className="text-[#5D758A] text-2xl font-serif">
            <b>Where conveninece meets deliciousness!!!</b>
          </p>
          <br />
          <Link to="/menu">
          <button className="bg-[#fe5142]  font-semibold  text-white px-8 py-3 rounded-full">
            <b>ORDER NOW </b>
          </button>
          </Link>
          
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
