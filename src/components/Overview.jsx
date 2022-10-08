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
      <div className='flex flex-col items-center space-y-6 pt-10'>
          {/* <h3 className='lg:text-3xl font-bold text-xl text-center'>Sign up now and build your own portfolio for free! </h3> */}
          <div>
            <button className="btn btn-md "
              data-aos="fade-down"
              data-aos-delay="1400">Get started</button>
          </div>
        </div>
    </div>

  )
};

export default Overview;
