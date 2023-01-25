import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({
  pubId,
  title,
  author,
  year,
  language,
  documentType,
}) => {
  return (
    <div
      key={pubId}
      className='relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-cyan-600 hover:bg-cyan-50'
    >
      <div className='flex-shrink-0'>{/* Future Checkbox */}</div>
      <div className='min-w-0 flex-1 space-y-1'>
        <Link to={`/publication/${pubId}`} className='focus:outline-none'>
          <span className='absolute inset-0' aria-hidden='true' />
          <p className='text-md font-medium text-gray-900'>{title}</p>
        </Link>
        <p className='truncate text-md text-gray-900'>{author}</p>
        <p className='truncate text-sm text-gray-500 pt-2'>
          <span>
            Published: <span className='text-gray-700'>{year}</span>
          </span>
          <span className='px-2 text-gray-200' aria-hidden='true'>
            |
          </span>
          <span>
            Language: <span className='text-gray-700'>{language}</span>
          </span>
          <span className='px-2 text-gray-200' aria-hidden='true'>
            |
          </span>
          <span>
            Document Type: <span className='text-gray-700'>{documentType}</span>
          </span>
        </p>
      </div>
    </div>
  );
};
