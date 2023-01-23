// import { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';

export const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <>
      <div className='mt-2'>
        <span className='font-medium'>{rows.length}</span> publications
      </div>
      <div className='mt-4 flex flex-col'>
        <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
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
                  {page.map((row) => {
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
              {/* pagination */}
              <nav
                className='flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6'
                aria-label='Pagination'
              >
                <div className='hidden sm:block'>
                  <p className='text-sm text-gray-700 space-x-4'>
                    <span className='font-normal'>
                      Page {pageIndex + 1} of {pageOptions.length}
                    </span>
                    <span className='text-gray-300' aria-hidden='true'>
                      |
                    </span>
                    <span>
                      Go to page:{' '}
                      <label htmlFor='currentPageNumber' className='sr-only'>
                        Page Number
                      </label>
                      <input
                        type='number'
                        name='currentPageNumber'
                        id='currentPageNumber'
                        className='inline w-16 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        defaultValue={pageIndex + 1}
                        onChange={(e) => {
                          const page = e.target.value
                            ? Number(e.target.value) - 1
                            : 0;
                          gotoPage(page);
                        }}
                      />
                    </span>
                    <span className='text-gray-300' aria-hidden='true'>
                      |
                    </span>
                    <span>
                      <label htmlFor='currentPageSize' className='sr-only'>
                        Location
                      </label>
                      <select
                        id='currentPageSize'
                        name='currentPageSize'
                        className='mt-1 inline rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                        value={pageSize}
                        onChange={(e) => {
                          setPageSize(Number(e.target.value));
                        }}
                      >
                        {[10, 20, 30, 40, 50].map((pageSize) => (
                          <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                          </option>
                        ))}
                      </select>
                    </span>
                  </p>
                </div>
                <div className='flex flex-1 justify-between sm:justify-end'>
                  <button
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                    className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50'
                  >
                    First
                  </button>
                  <button
                    onClick={() => previousPage()}
                    disabled={!canPreviousPage}
                    className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50'
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => nextPage()}
                    disabled={!canNextPage}
                    className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50  disabled:opacity-50'
                  >
                    Next
                  </button>
                  <button
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                    className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50'
                  >
                    Last
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
