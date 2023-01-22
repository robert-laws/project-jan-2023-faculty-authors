import React from 'react';

export const Container = ({ children }) => {
  return (
    <div class='container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6'>
      {children}
    </div>
  );
};
