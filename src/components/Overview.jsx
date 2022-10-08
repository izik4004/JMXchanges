import React from 'react';
import image from "../assets/img/files/table.png"

const Overview = () => {
  return (
      
    <div className='container mx-auto'>
      <div className='flex justify-between py-3 font-bold'>
        <h3 className='text-3xl'>Popular cryptocurrencies</h3>
        <p className='hidden'>View more markets</p>
      </div>
      <div className='container mx-auto bg-white rounded-lg p-6 shadow-xl'>
        <img src={image} alt="" />
      </div>
    </div>

  )
};

export default Overview;
