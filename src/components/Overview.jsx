import React from 'react';

const Overview = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex justify-between'>
          <h3>POpular cryptocurrencies</h3>
          <p>View more markets</p>
        </div>
        <table>
            <thead className=''>
              <th>Name</th>
              <th>Last Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </thead>
        </table>
        </div>
    </section>
  )
};

export default Overview;
