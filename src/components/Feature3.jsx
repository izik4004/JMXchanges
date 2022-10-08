import React from 'react';
import { services } from '../data';

const Feature3 = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col py-4 font-bold'>
          <h3 className='text-3xl'>Need help?</h3>

        </div>
        <div className='flex space-y-6 lg:space-y-0 lg:space-x-20 lg:flex-row flex-col'>
          {services.map((service, index) => {
            return (
              <div className='flex space-x-6 items-center '>
                <div>
                  <img src={service.image} alt="" />
                </div>
                <div>
                  <h3 className='text-lg font-bold'>{service.title}</h3>
                  <p className='text-base'>{service.text}</p>
                  <a href="#" className='text-sm text-[#120795]'>{service.link}</a>

                </div>
              </div>
            )
          })}
        </div>
        <div className='flex flex-col items-center space-y-6 py-8'>
          <h3 className='text-3xl font-bold'>Start earning today</h3>
          <div>
            <button className="btn btn-md "
              data-aos="fade-down"
              data-aos-delay="1400">Sign up now</button>
          </div>
        </div>

      </div>
    </section>

  )
};

export default Feature3;
