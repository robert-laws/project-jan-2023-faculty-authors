import { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PublicationContext from '../context/publication/publicationContext';
import { Navigation, Heading, Container, Footer } from '../components';

export const Publication = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { publication, isLoading, publicationError, getPublicationById } =
    useContext(PublicationContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      getPublicationById(+id);
    }
  }, [getPublicationById, id]);

  const handleEditClick = () => {
    navigate(`/admin/edit/${id}`);
  };

  if (publicationError) {
    return (
      <>
        <Navigation />
        <Container>{publicationError}</Container>
        <Footer />
      </>
    );
  }

  // TODO: Add a loading spinner
  // TODO: refine display of individual publications

  return (
    <>
      <Navigation />
      <Container>
        <div className='flex place-content-between'>
          <Heading>Publication Detail</Heading>
          <button
            type='button'
            className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
            onClick={handleEditClick}
          >
            Edit this Publication
          </button>
        </div>
        {isLoading && !publicationError ? (
          <p>Loading...</p>
        ) : (
          <div className='px-4 py-5 sm:px-6'>
            <h3 className='mb-3 text-lg font-medium leading-6 text-gray-900'>
              {publication && publication.title
                ? publication.title
                : publication.sourceTitle}
            </h3>
            <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
              <dl className='sm:divide-y sm:divide-gray-200'>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Author
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.firstName} {publication.lastName}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Author Scopus ID
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.authorScopusId}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Author Research ID
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.authorResearcherId}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    All Authors
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.authors.map((author) => (
                      <p key={author}>{author}</p>
                    ))}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Editors
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.editors.map((editor) => (
                      <p key={editor}>{editor}</p>
                    ))}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Publication Year
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.year}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Document Type
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.documentType}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Abstract
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.abstract}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Language
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.language}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Pages
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.pageCount} ({publication.pageStart}-
                    {publication.pageEnd})
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Link
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    <a
                      rel='noreferrer'
                      target='_blank'
                      href={`${publication.link}`}
                    >
                      Resource Link
                    </a>
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Volume and Issue
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    volume: {publication.volume}, issue: {publication.issue}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    ISSN
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.issn}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    ISBN
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.isbn.map((isbn) => (
                      <p key={isbn}>{isbn}</p>
                    ))}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    DOI
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.doi}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Publisher
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.publisher}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Author Keywords
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.authorKeywords.map((keyword) => (
                      <p key={keyword}>{keyword}</p>
                    ))}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Index Keywords
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.indexKeywords.map((keyword) => (
                      <p key={keyword}>{keyword}</p>
                    ))}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Sustainable Development Goals
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.sustainableDevelopmentGoals.map((goal) => (
                      <p key={goal}>{goal}</p>
                    ))}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Call Number
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.callNumber}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    GUQ Affiliated
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.guqAffiliated}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    CIRS Sponsored
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.cirsSponsored}
                  </dd>
                </div>
                <div className='py-4 sm:grid sm:grid-cols-6 sm:gap-4 sm:py-5'>
                  <dt className='text-sm font-medium text-gray-900 text-left md:text-right'>
                    Full Text
                  </dt>
                  <dd className='mt-1 text-sm text-gray-600 sm:col-span-5 sm:mt-0'>
                    {publication.fullText}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};
