import React from "react";
import { hero } from "../data";
import {heroItem} from "../data"

const Hero = () => {
  const { title, subtitle, btnText, compText, image } = hero;
  return (
    <section className=" min-h-[900px] py-28 lg:py-8">
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
              {title}
            </h1>
            <p
              className="lead mb-5 lg:mb-10"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>

            <div
              className="flex items-center max-w-sm  flex-col lg:flex-row
            lg:max-w-full mx-auto lg:mx-0 gap-y-4 lg:gap-x-6 "
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <input
                type="text"
                placeholder="Email/Phone no"
                className="text-left py-4 border"
              />

              <button
                className="btn btn-md lg:btn-md
              btn-accent flex justify-center items-center
              lg:gap-x-4"
              >
                {btnText}
              </button>
            </div>
            <span className="flex flex-col lg:flex-row items-center justify-between py-12 ">
             
             {heroItem.map((item, index) => {
              return (
                <div key={index} className="">
                    <h2 className="">{item.name}</h2>
                     <p className="">{item.text}</p>
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
    </section>
  );
};

export default Hero;
