import React from 'react';
import image from "../assets/img/files/Group 107.png"
import { features } from '../data';

console.log(features)
const Feature1 = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center '>
          <h1 className='title font-bold text-center'>Manage your crypto portfolio today</h1>
          <p className='py-4 text-md text-center'>JMXchange has a variety of features that makes it the best place to start trading and hodling crypto assets</p>
        </div>
        <div className='flex flex-col lg:gap-x-[30]px py-6
        lg:flex-row lg:text-left'>
          <div className='flex flex-col space-y-10 align-center order-2 lg:order-1'
          data-aos="fade-down-right"
          // data-aos-delay="500"
          >
            {features.map((feature, index) => {
              return (
                <div className='flex space-x-10 items-center' key={index}>
                  <div>
                    <img src={feature.image} alt="" />
                  </div>
                  <div>
                    <h3 className='text-lg font-bold'>{feature.title}</h3>
                    <p className='text-sm'>{feature.subtitle}</p>
                  </div>
                </div>
              )
            })}

          </div>
          <div className="order-1 lg:order-2" data-aos="fade-down" data-aos-delay="800">
            <img src={image} alt="" />
          </div>
        </div>
        <button
            className="btn btn-md hidden lg:flex"
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Get Started
          </button>
      </div>
    </section>
  )
};

export default Feature1;
