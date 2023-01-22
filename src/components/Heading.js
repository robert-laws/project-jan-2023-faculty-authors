import React from 'react';

export const Heading = ({ children }) => {
  return (
    <h2 className='text-4xl font-bold  text-gray-900 sm:text-3xl '>
      {children}
    </h2>
  );
};
