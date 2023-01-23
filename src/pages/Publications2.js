import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PublicationsContext from '../context/publications/publicationsContext';
import { Navigation, Heading, Container, Footer } from '../components';
import ReactPaginate from 'react-paginate';

export const Publications2 = () => {
  const { publications, isLoading, publicationsError, getPublications } =
    useContext(PublicationsContext);

  useEffect(() => {
    if (publications.length === 0) {
      getPublications();
    }
  }, [publications, getPublications]);

  const [currentPage, setCurrentPage] = useState(1);
  const [publicationsPerPage] = useState(10);

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = publications.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  return (
    <>
      <Navigation />
      <Container>
        <Heading>All Publications</Heading>
        <div className='mt-2'>
          <span className='font-medium'>
            {publications.length} publications
          </span>
        </div>
        {publications ? (
          <div className='mt-4 flex flex-col'>
            <div className='-my-2 -mx-4 sm:-mx-6 lg:-mx-8'>
              <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
                  <table className='table-fixed divide-y divide-gray-300'>
                    <thead className='bg-gray-50'>
                      <tr>
                        <th
                          scope='col'
                          className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6 w-7/12'
                        >
                          Title
                        </th>
                        <th
                          scope='col'
                          className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6 w-2/12'
                        >
                          Author
                        </th>
                        <th
                          scope='col'
                          className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6 w-1/12'
                        >
                          Year
                        </th>
                        <th
                          scope='col'
                          className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6 w-1/12'
                        >
                          Language
                        </th>
                        <th
                          scope='col'
                          className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6 w-1/12'
                        >
                          Document Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {currentPublications.map((publication) => (
                        <tr key={publication.pubId}>
                          <td className='whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {publication.title === '' ? (
                              <Link
                                className='text-blue-600 hover:text-blue-500'
                                to={`/publication/${publication.pubId}`}
                              >
                                {publication.sourceTitle}
                              </Link>
                            ) : (
                              <Link
                                className='text-blue-600 hover:text-blue-500'
                                to={`/publication/${publication.pubId}`}
                              >
                                {publication.title}
                              </Link>
                            )}
                          </td>
                          <td className='whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {publication.firstName} {publication.lastName}
                          </td>
                          <td className='whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {publication.year}
                          </td>
                          <td className='whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {publication.language === ''
                              ? 'Not Specified'
                              : publication.language}
                          </td>
                          <td className='whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                            {publication.documentType}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className='mt-4 flex flex-col'>Loading Publications...</div>
        )}
        <ReactPaginate
          onPageChange={paginate}
          pageCount={Math.ceil(publications.length / publicationsPerPage)}
          previousLabel={'Prev'}
          nextLabel={'Next'}
          containerClassName={'pagination'}
          pageLinkClassName={'page-number'}
          previousLinkClassName={'page-number'}
          nextLinkClassName={'page-number'}
          activeLinkClassName={'active'}
          disabledClassName={'disabled'}
        />
      </Container>
      <Footer />
    </>
  );
};
