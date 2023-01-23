import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 1000);

  return (
    <div className='flex items-center mt-2 space-x-2'>
      <label
        htmlFor='email'
        className='block text-sm font-medium text-gray-700'
      >
        Search all results:
      </label>
      <div className='mt-1'>
        <input
          type='text'
          value={value || ''}
          className='block w-auto rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
