import React from "react";
import { FaStar } from "react-icons/fa"; // Assuming you have imported FaStar from react-icons/fa
import logo from '../assets/kathi.jpeg'
import maggi from '../assets/mhl.jpeg'
import southern from '../assets/south.jpeg'
// import quench from '../assets/quench.jpeg'

const ReccommendedFood = () => {
    return (
        <div className="h  py-3 px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto py-[2vh]">
                <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
                    Our <span className="text-[#f54748]">Food Outlets</span>
                </div>
                <div className="grid py-6  md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                    <div className="food-card flex lg:flex-row md:flex-row sm:flex-col  cursor-pointer justify-around   px-12  w-full ">
                        <div className="  h-64 w-full  flex flex-row gap-40  item-center ">
                            {/* //kathi */}
                            <div className=" bg-red-100     rounded-xl   food-card flex flex-col cursor-pointer items-center p-5">
                                <div className="relative mb-3">
                                    <img src={logo} alt="Kebab" className="rounded-full w-32  h-32 " />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p className="text-xl text-center font-bold text-[#f54748]">Kathi</p>
                                    <div className="flex text-sm space-x-2 cursor-pointer">
                                    </div>
                                </div>
                                <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 text-xl font-medium text-white">
                                    Order Now
                                </button>
                            </div>
                            {/* //souther */}
                            <div className=" bg-red-100       rounded-xl  food-card flex flex-col cursor-pointer items-center p-5">
                                <div className="relative mb-3">
                                    <img src={southern} alt="Kebab" className="rounded-full w-32 h-32" />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p className="text-xl text-center font-bold text-[#f54748]">Kathi</p>
                                    <div className="flex text-sm space-x-2 cursor-pointer">
                                    </div>
                                </div>
                                <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 text-xl font-medium text-white">
                                    Order Now
                                </button>
                            </div>
                            {/* //maggie */}
                            <div className="  bg-red-100     rounded-xl  food-card flex flex-col cursor-pointer items-center p-5">
                                <div className="relative mb-3">
                                    <img src={maggi} alt="Kebab" className="rounded-full w-32 h-32" />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p className="text-xl text-center font-bold text-[#f54748]">Kathi</p>
                                    <div className="flex text-sm space-x-2 cursor-pointer">
                                    </div>
                                </div>
                                <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 text-xl font-medium text-white">
                                    Order Now
                                </button>
                            </div>
                            {/* //quench */}
                            <div className="  bg-red-100     rounded-xl  food-card flex flex-col cursor-pointer items-center p-5">
                                <div className="relative mb-3">
                                    <img src={logo} alt="Kebab" className="rounded-full w-32 h-32" />
                                </div>
                                <div className="flex gap-4 items-center">
                                    <p className="text-xl text-center font-bold text-[#f54748]">Kathi</p>
                                    <div className="flex text-sm space-x-2 cursor-pointer">
                                    </div>
                                </div>
                                <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 text-xl font-medium text-white">
                                    Order Now
                                </button>
                            </div>
                            
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default ReccommendedFood
