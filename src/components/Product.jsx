import React from 'react';

const Product = () => {
  return (
    <div className='container mx-auto py-8'>
      <div className='flex flex-col items-center space-y-6'>
        <h3 className='text-3xl font-bold'>Start earning today</h3>
        <div>
          <button className="btn btn-sm btn-outline "
            data-aos="fade-down"
            data-aos-delay="1400">Sign up now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
