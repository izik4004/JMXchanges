import React from 'react';
import {nav} from "../data"

const Nav = () => {
  return (
   <ul className='flex space-x-6 items-center'>
      {nav.map((item, index) => {
        return (
          <li key={index}>{item.name}</li>
        )
      })}
   </ul>
  );
};

export default Nav;
