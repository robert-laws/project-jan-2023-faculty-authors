import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PublicationsContext from '../context/publications/publicationsContext';
import { Navigation, Heading, Container, Footer } from '../components';
import { AddList, AddAndSortList } from '../helpers';
import ReactPaginate from 'react-paginate';

export const Publications2 = () => {
  const {
    publications,
    filteredPublications,
    isLoading,
    publicationsError,
    getPublications,
    filterPublications,
  } = useContext(PublicationsContext);

  const [filterLists, setFilterLists] = useState({
    documentType: [],
    language: [],
    year: [],
  });

  const [selectedFilters, setSelectedFilters] = useState({
    documentType: [],
    language: [],
    year: [],
  });

  const setFilters = (list, filter) => {
    if (selectedFilters[list].includes(filter)) {
      const newFilters = selectedFilters[list].filter(
        (item) => item !== filter
      );
      setSelectedFilters({
        ...selectedFilters,
        [list]: newFilters,
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [list]: [...selectedFilters[list], filter],
      });
    }
  };

  useEffect(() => {
    if (publications.length === 0) {
      getPublications();
    }
  }, [publications, getPublications]);

  useEffect(() => {
    filterPublications(selectedFilters);
  }, [selectedFilters, filterPublications]);

  useEffect(() => {
    if (publications.length > 0) {
      setFilterLists({
        documentType: AddList(publications, 'documentType'),
        language: AddList(publications, 'language'),
        year: AddList(publications, 'year'),
      });
    }
  }, [publications]);

  const [currentPage, setCurrentPage] = useState(1);
  const [publicationsPerPage] = useState(10);

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = filteredPublications.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const getLists = (lists) => {
    const allLists = [];

    for (const property in lists) {
      const list = lists[property];

      const myList = Object.keys(list).map((key) => {
        return [key, list[key]];
      });

      allLists.push([property, myList]);

      // return myList
    }

    return allLists;
  };

  return (
    <>
      <Navigation />
      <Container>
        <Heading>All Publications</Heading>
        <div className='mt-2'>
          <span className='font-medium'>
            {filteredPublications.length} publications
          </span>
        </div>
        <div className='flex'>
          {getLists(filterLists).map((list, i) => {
            return (
              <div className='pr-4 pt-2' key={i}>
                <p>{list[0]}</p>
                {list[1].map((option, i) => {
                  return (
                    <div className='flex items-start' key={i}>
                      <div className='flex h-5 items-center mb-1'>
                        <input
                          type='checkbox'
                          className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                          id={option[0]}
                          name={option[0]}
                          value={option[0]}
                          onChange={(e) => {
                            setFilters(list[0], e.target.value);
                          }}
                        ></input>
                      </div>
                      <div className='ml-1 text-sm mb-1'>
                        <label
                          htmlFor={option[0]}
                          className='ml-1.5 font-medium text-gray-700'
                        >
                          {option[0] === '' ? 'Not Specified' : option[0]}{' '}
                          <span className='text-gray-500 font-normal'>
                            ({option[1]})
                          </span>
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        {filteredPublications ? (
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
          pageCount={Math.ceil(
            filteredPublications.length / publicationsPerPage
          )}
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
