import React from 'react';

export const Heading = ({ children }) => {
  return (
    <div className='md:flex md:items-center md:justify-between mt-2'>
      <div className='min-w-0 flex-1'>
        <h2
          className={`text-4xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight`}
        >
          {children}
        </h2>
      </div>
    </div>
  );
};
