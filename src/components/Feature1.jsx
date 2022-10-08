import React from 'react';
import image from "../assets/img/files/Group 107.png"
import { features } from '../data';

console.log(features)
const Feature1 = () => {
  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center py-5'>
          <h1 className='title'>Manage your crypto portfolio today</h1>
          <p>JMXchange has a variety of features that makes it the best place to start trading and hodling crypto assets</p>
        </div>
        <div className='flex flex-col lg:gap-x-[30]px 
        lg:flex-row lg:text-left'>
          <div className='flex flex-col'>
            {features.map((feature, index) => {
              return (
                <div className='flex space-x-10' key={index}>
                  <div>
                    <img src={feature.image} alt="" />
                  </div>
                  <div className=''>
                    <h1>{feature.title}</h1>
                    <p className=''>{feature.subtitle}</p>
                  </div>
                </div>
              )
            })}

          </div>
          <div className="" data-aos="fade-down" data-aos-delay="800">
            <img src={image} alt="" />
          </div>
        </div>
        <button
            className="btn btn-sm btn-outline hidden lg:flex"
            data-aos="fade-down"
            data-aos-delay="1400"
          >
            Get Started
          </button>
      </div>
    </div>
  )
};

export default Feature1;
