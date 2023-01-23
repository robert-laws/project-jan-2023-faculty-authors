// import { useMemo } from 'react';
import { useTable } from 'react-table';

export const Table = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <table
      className='table-fixed divide-y divide-gray-300'
      {...getTableProps()}
    >
      <thead className='bg-gray-50'>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                scope='col'
                className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6'
                {...column.getHeaderProps([
                  {
                    style: column.style,
                    className: column.className,
                  },
                ])}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        className='divide-y divide-gray-200 bg-white'
        {...getTableBodyProps()}
      >
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className='whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
