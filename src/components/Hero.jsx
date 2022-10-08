import React from "react";
import { hero } from "../data";
import { heroItem } from "../data"

const Hero = () => {
  const { title, subtitle, btnText, compText, image } = hero;
  return (
    <div className=" min-h-[700px] py-28 lg:py-8">
      <div
        className="container mx-auto min-h-[900px]
      flex justify-center items-center"
      >
        <div
          className="flex flex-col lg:gap-x-[30]px gap-y-8
        lg:flex-row items-center justify-center
        text-center lg:text-left "
        >
          <div className="flex-1">
            <h1
              className="title mb-2 lg:mb-5"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Buy <span className="text-[#120795]">Cryptocurrency</span> with zero stress
            </h1>
            <p
              className="text-md mb-5 lg:mb-10"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>

            <div
              className="flex items-center max-w-sm  flex-col lg:flex-row
            lg:max-w-full mx-auto lg:mx-0 gap-y-4 lg:gap-x-4 "
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Email/Phone no"
                  className="text-center border"
                />
              </div>
              <div className="w-full">
                <button
                  className="btn btn-md lg:btn-md
               flex justify-center items-center
              lg:gap-x-4 w-full" 
                >
                  {btnText}
                </button>
              </div>
            </div>
            <span className="flex flex-col lg:flex-row items-center justify-between py-12 space-y-10 lg:space-y-0 lg:space-x-8 text-center lg:text-left">

              {heroItem.map((item, index) => {
                return (
                  <div key={index} className="">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-sm">{item.text}</p>
                  </div>
                )
              })}


            </span>
          </div>
          <div className="flex-1" data-aos="fade-down" data-aos-delay="800">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
