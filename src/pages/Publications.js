import { useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import PublicationsContext from '../context/publications/publicationsContext';
import { Navigation, Heading, Container, Footer } from '../components';
import { Table } from '../components/Table';
import { MultipleFilter } from '../components/tableFilters/MultipleFilter';
import { SelectColumnFilter } from '../components/tableFilters/SelectColumnFilter';

export const Publications = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Title',
        className: '',
        style: {
          width: '52%',
        },
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
              to={`/publication/${row.original.pubId}`}
            >
              {fullTitle}
            </Link>
          );
        },
        disableFilters: true,
      },
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Author',
        style: {
          width: '16%',
        },
        Cell: ({ row }) => {
          return `${row.original.firstName} ${row.original.lastName}`;
        },
      },
      {
        Header: 'Year',
        accessor: 'year',
        style: {
          width: '8%',
        },
        filter: MultipleFilter,
        Filter: SelectColumnFilter,
      },
      {
        Header: 'Language',
        accessor: 'language', // accessor is the "key" in the data
        style: {
          width: '10%',
        },
        Cell: ({ row }) => {
          let language = '';
          if (row.original.language === '') {
            language = 'Not Specified';
          } else {
            language = row.original.language;
          }
          return language;
        },
        filter: MultipleFilter,
        Filter: SelectColumnFilter,
      },
      {
        Header: 'Document Type',
        accessor: 'documentType', // accessor is the "key" in the data
        style: {
          width: '14%',
        },
        filter: MultipleFilter,
        Filter: SelectColumnFilter,
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
        <Table columns={columns} data={publications} />
      </Container>
      <Footer />
    </>
  );
};
