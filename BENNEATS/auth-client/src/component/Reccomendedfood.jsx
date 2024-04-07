import React from "react";
import logo from '../assets/kathi.jpeg'
import maggi from '../assets/mhl.jpeg'
import southern from '../assets/south.jpeg'
// import quenchh from '../assets/quench.jpeg'

const ReccommendedFood=()=>{
    return(
        <div className="py-3 px-10 sm:px-4 md:px-6 lg:px-6">
            <div className="container mx-auto py-[2vh]">
                <div className="text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl">
                    Our <span className="text-[#f54748]">Food Outlets</span>
                </div>
                <div className="grid py-6 lg:grid-rows-4 md:grid-cols-2 grid-cols-1">
                    <div className="food-card flex flex-row  cursor-pointer items-center px-12 ">
                        <div className="relative mb-3 mr-4 ">
                            <img src={logo} alt="" srcset="" />
                        </div>
                        
                        <div className="relative mb-3 mr-4">
                            <img src={maggi} alt="" srcset="" />
                        </div>
                         <div className="relative mb-3 mr-4">
                            <img src={southern} alt="" srcset="" />
                        </div>
                        {/* <div className="relative mb-3 mr-4">
                            <img src={quenchh} alt="" srcset="" />
                        </div>  */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReccommendedFood