import React from 'react';
import { services } from '../data';

const Feature3 = () => {
  return (
   
    <div className='container mx-auto'>
      <div className='flex flex-col py-2'>
        <h3 className='text-2xl'>Need help?</h3>
        
      </div>
      <div className='flex space-x-20'>
          {services.map((service, index) => {
            return(
            <div className='flex space-x-6 items-center '>
              <div>
              <img src={service.image} alt="" />
              </div>
             <div>
               <h3>{service.title}</h3>
               <p className='text-base'>{service.text}</p>
               <a href="#" className='text-sm'>{service.link}</a>
               
             </div>
             </div>
            )
          })}
          </div>

         
      </div>
  
  )
};

export default Feature3;
