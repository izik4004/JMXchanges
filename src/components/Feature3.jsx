import React from 'react';
import { services } from '../data';

const Feature3 = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex'>
          {services.map((service, index) => {
            return(
            <div className='flex space-x-10 items-center '>
              <div>
              <img src={service.image} alt="" />
              </div>
             <div>
               <h3>{service.title}</h3>
               <p className=''>{service.text}</p>
               <span>{service.link}</span>
             </div>
             </div>
            )
          })}
          </div>
        
    </div>
  )
};

export default Feature3;
