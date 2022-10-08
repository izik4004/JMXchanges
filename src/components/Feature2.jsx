import React from 'react';
import { offers } from '../data';


const Feature2 = () => {
  return (
    // <div className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row  text-center'>
    

{offers.map((offer, index) => {
          return (
        <div class="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-[#120795] rounded-lg lg:mx-4 dark:bg-[#120795] dark:border-gray-700">
         <div className='flex flex-col items-center'>
          <div class="flex-shrink-0">
            <img src={offer.image} alt="" className='h-48'/>
          </div>
          <div className='flex flex-col'>
            <span
              class="pt-2 text-xl font-bold uppercase"
            >
             {offer.title}
            </span>
            <span class="text-sm text-gray-500 dark:text-gray-400">
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
