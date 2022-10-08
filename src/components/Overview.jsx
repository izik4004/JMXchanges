import React from 'react';
import image from "../assets/img/files/table.png"

const Overview = () => {
  return (

    <div className='container mx-auto bg-white rounded-lg p-6 shadow-xl'>
      <div className='flex justify-between'>
        <h3>Popular cryptocurrencies</h3>
        <p>View more markets</p>
      </div>
      <div className=''>
        <img src={image} alt="" />
      </div>
    </div>

  )
};

export default Overview;
