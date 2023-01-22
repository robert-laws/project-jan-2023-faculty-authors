import { useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PublicationsContext from '../context/publications/publicationsContext';
import { Navigation, Heading, Container, Footer } from '../components';
import { Table } from '../components/Table';

export const Publications = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title', // accessor is the "key" in the data
        Cell: ({ row }) => {
          let fullTitle = '';
          if (row.original.title === '') {
            fullTitle = row.original.sourceTitle;
          } else {
            fullTitle = row.original.title;
          }
          return (
            <Link
              className='text-blue-600 hover:text-blue-500'
              to={`/publication/${row.original.id}`}
            >
              {fullTitle}
            </Link>
          );
        },
        disableFilters: true,
      },
      // {
      //   Header: 'Source Title',
      //   accessor: 'sourceTitle', // accessor is the "key" in the data
      // },
      // {
      //   Header: 'Publication Title',
      //   Cell: ({ row }) => {
      //     let fullTitle = '';
      //     if (row.original.title === '') {
      //       fullTitle = row.original.sourceTitle;
      //     } else {
      //       fullTitle = row.original.title;
      //     }
      //     return (
      //       <Link
      //         className='text-blue-600 hover:text-blue-500'
      //         to={`/publication/${row.original.id}`}
      //       >
      //         {fullTitle}
      //       </Link>
      //     );
      //   },
      // },
      {
        Header: 'Name',
        Cell: ({ row }) => {
          return `${row.original.firstName} ${row.original.lastName}`;
        },
      },
      // {
      //   Header: 'First Name',
      //   accessor: 'firstName', // accessor is the "key" in the data
      // },
      // {
      //   Header: 'Last Name',
      //   accessor: 'lastName', // accessor is the "key" in the data
      // },
      {
        Header: 'Language',
        accessor: 'language', // accessor is the "key" in the data
      },
      {
        Header: 'Document Type',
        accessor: 'documentType', // accessor is the "key" in the data
      },
      {
        Header: 'Year',
        accessor: 'year',
      },
    ],
    []
  );

  const { publications, isLoading, publicationsError, getPublications } =
    useContext(PublicationsContext);

  useEffect(() => {
    if (publications.length === 0) {
      getPublications();
    }
  }, [publications, getPublications]);

  return (
    <>
      <Navigation />
      <Container>
        <Heading>All Publications</Heading>
        <div className=''>
          <div className='mt-8 flex flex-col'>
            <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                  <Table columns={columns} data={publications} />
                  {/* <table className='table-fixed divide-y divide-gray-300'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6 w-2/12'
                        >
                          Author
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 w-6/12'
                        >
                          Title
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 w-1/12'
                        >
                          Year
                        </th>
                        <th
                          scope='col'
                          className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 w-1/12'
                        >
                          Language
                        </th>
                        <th
                          scope='col'
                          className='relative py-3 pl-3 pr-4 sm:pr-6 w-1/12'
                        >
                          <span className='sr-only'>Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {isLoading && !publicationsError ? (
                        <tr>
                          <td>Loading...</td>
                        </tr>
                      ) : (
                        publications.map((pub) => (
                          <tr key={pub.pubId}>
                            <td className='whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                              {`${pub.firstName} ${pub.lastName}`}
                            </td>
                            <td className='whitespace-normal px-3 py-4 text-sm text-gray-500'>
                              {pub.title ? pub.title : pub.sourceTitle}
                            </td>
                            <td className='whitespace-normal px-3 py-4 text-sm text-gray-500'>
                              {pub.year}
                            </td>
                            <td className='whitespace-normal px-3 py-4 text-sm text-gray-500'>
                              {pub.language}
                            </td>
                            <td className='relative whitespace-normal py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                              <Link
                                to={`/publication/${pub.pubId}`}
                                className='text-indigo-600 hover:text-indigo-900'
                              >
                                View
                                <span className='sr-only'>, {pub.id}</span>
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
