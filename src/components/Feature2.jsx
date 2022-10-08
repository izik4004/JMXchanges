import React from 'react';
import { offers } from '../data';


const Feature2 = () => {
  return (
    // <div className='section'>
    <div className='container mx-auto'>
      <span>
      <h1 className='title font-bold text-center'>Explore Endless possibilities with JMXchange</h1>
  {/* <h3 className='text-2xl font-bold text-center py-6'></h3> */}
</span>
      <div className='flex flex-col lg:flex-row  text-center space-y-8 lg:space-y-0 pt-4'
      data-aos="flip-left"
      data-aos-delay="1500"
      >
    

{offers.map((offer, index) => {
          return (
        <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-[#120795] border-2 border-[#120795] rounded-lg lg:mx-4 dark:bg-[#120795] text-white">
         <div className='flex flex-col items-center '>
          <div class="flex-shrink-0">
            <img src={offer.image} alt="" className='h-48'/>
          </div>
          <div className='flex flex-col'>
            <span
              class="pt-2 text-xl font-bold uppercase"
            >
             {offer.title}
            </span>
            <span class="text-sm text-white">
              {offer.text}
            </span>
          </div>
          </div>
        </div>
 )
})}
      
    </div>
    </div>
  )
};

export default Feature2;
