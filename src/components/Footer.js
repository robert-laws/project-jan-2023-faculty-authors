import React from 'react';

export const Footer = () => {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Publications', href: '/publications' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className=' bg-cyan-900'>
      <div className='mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8'>
        <nav
          className='-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12'
          aria-label='Footer'
        >
          {navigation.map((item) => (
            <div key={item.name} className='pb-6'>
              <a
                href={item.href}
                className='text-sm leading-6 text-white hover:text-cyan-50'
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        {/* <div className='mt-10 flex justify-center space-x-10'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='h-6 w-6' aria-hidden='true' />
            </a>
          ))}
        </div> */}
        <p className='mt-10 text-center text-xs leading-5 text-white'>
          &copy; 2023 Georgetown University in Qatar, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
