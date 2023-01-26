import { useContext, useEffect, useState } from 'react';
import PublicationsContext from '../context/publications/publicationsContext';
import { Navigation, Heading, Container, Footer, Card } from '../components';
import { AddList, SortList } from '../helpers';
import ReactPaginate from 'react-paginate';

export const Publications3 = () => {
  const {
    publications,
    filteredPublications,
    isLoading,
    publicationsError,
    getPublications,
    filterPublications,
  } = useContext(PublicationsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [publicationsPerPage, setPublicationsPerPage] = useState(10);

  const [filterLists, setFilterLists] = useState({
    documentType: [],
    language: [],
    year: [],
    cirsSponsored: [],
  });

  const [selectedFilters, setSelectedFilters] = useState({
    documentType: [],
    language: [],
    year: [],
    cirsSponsored: [],
  });

  const [filtersTouched, setFiltersTouched] = useState(false); // add to context - reset upon page change to reset display of filters/records

  useEffect(() => {
    if (publications.length > 0) {
      setFilterLists({
        documentType: AddList(publications, 'documentType'),
        language: AddList(publications, 'language'),
        year: AddList(publications, 'year'),
        cirsSponsored: AddList(publications, 'cirsSponsored'),
      });
    }
  }, [publications]);

  const setFilters = (list, filter) => {
    setFiltersTouched(true);
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

  const getLists = (lists) => {
    const allLists = [];

    for (const property in lists) {
      const list = lists[property];

      const myList = Object.keys(list).map((key) => {
        return [key, list[key]];
      });

      if (property === 'year') {
        myList.sort((a, b) => b[0] - a[0]);
      }

      allLists.push([property, myList]);
    }

    return allLists;
  };

  useEffect(() => {
    if (publications.length === 0) {
      getPublications();
    }
  }, [publications, getPublications]);

  useEffect(() => {
    const filtersArray = Object.entries(selectedFilters);

    const applyFilters = (filterArray) => {
      let filteredPublications = publications;

      for (let i = 0; i < filterArray.length; i++) {
        const list = filterArray[i][0];
        const filters = filterArray[i][1];

        if (filters.length > 0) {
          filteredPublications = filteredPublications.filter((publication) =>
            filters.includes(publication[list])
          );
        }
      }

      return filteredPublications;
    };

    // console.log(applyFilters(filtersArray));

    if (filtersTouched) {
      setCurrentPage(1);
      filterPublications(applyFilters(filtersArray));
    }
  }, [selectedFilters]);

  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = filteredPublications.slice(
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
        <Heading>Publications</Heading>
        <div className='mt-1'>
          <span className='font-bold text-lg'>
            {filteredPublications.length} publications
          </span>
        </div>

        <div className='py-6'>
          <div className='mx-auto max-w-3xl sm:px-6 md:px-4 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8'>
            <aside className='md:col-span-12 lg:col-span-2 xl:col-span-3 xl:block'>
              <div className='sticky top-6 space-y-4'>
                <div className='flex flex-col'>
                  {getLists(filterLists).map((list, i) => {
                    return (
                      <div className='pr-4 pb-4' key={i}>
                        <p className='mb-2'>
                          {list[0] === 'documentType'
                            ? 'Document Type'
                            : list[0] === 'cirsSponsored'
                            ? 'CIRS Sponsored'
                            : list[0].charAt(0).toUpperCase() +
                              list[0].slice(1)}
                        </p>
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
                                  {option[0] === ''
                                    ? 'Not Specified'
                                    : option[0]}{' '}
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
              </div>
            </aside>

            <main className='md:col-span-12 lg:col-span-10 xl:col-span-9'>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-1'>
                {filteredPublications ? (
                  filteredPublications.length > 0 ? (
                    currentPublications.map((publication) => (
                      <Card
                        key={publication.pubId}
                        pubId={publication.pubId}
                        title={
                          publication.title === ''
                            ? publication.sourceTitle
                            : publication.title
                        }
                        author={`${publication.firstName} ${publication.lastName}`}
                        year={publication.year}
                        language={
                          publication.language === ''
                            ? 'Not Specified'
                            : publication.language
                        }
                        documentType={publication.documentType}
                      />
                    ))
                  ) : (
                    <div>
                      <div className='whitespace-normal py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        No Publications
                      </div>
                    </div>
                  )
                ) : (
                  <div className='mt-4 flex flex-col'>
                    Loading Publications...
                  </div>
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
                <select
                  id='currentPageSize'
                  name='currentPageSize'
                  className='mt-1 inline rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  value={publicationsPerPage}
                  onChange={(e) => {
                    setPublicationsPerPage(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            </main>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};
