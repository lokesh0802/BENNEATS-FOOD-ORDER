/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 mb-20">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5 mt-20">
            <p className="subtitle text-[#fe5142]">Testimonials</p>
            <h2 className="title"> About Us</h2>
            <blockquote className="my-5 text-[#fe5142] leading-[30px]">
              “That’s a great point! Ordering food online can indeed save a lot of time, especially for students living in hostels. It eliminates the need to go out, which can be particularly convenient during busy study periods or late at night. Plus, with so many food delivery apps available these days, you have a wide variety of food options right at your fingertips. Enjoy your meals and your extra time! 😊”
            </blockquote>
           
           {/* avater */}
{/* 
           <div className="flex items-center gap-4 flex-wrap">
           <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial1.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial2.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial3.png" />
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              <div className="flex items-center gap-2"><FaStar className="text-yellow-400"/> <span className="font-medium">4.9</span> <span className="text-[#807E7E]">(18.6k Reviews)</span></div>
            </div>
           </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
