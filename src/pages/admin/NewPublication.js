import { useState, useContext, useEffect } from 'react';
import { Navigation, Heading, Container, Footer } from '../../components';
import PublicationContext from '../../context/publication/publicationContext';

export const NewPublication = () => {
  // const { publication } = useContext(PublicationContext);

  const [publicationData, setPublicationData] = useState({
    firstName: '',
    lastName: '',
    authorScopusId: '',
    authorResearcherId: '',
    authors: [''],
    title: '',
    sourceTitle: '',
    language: '',
    documentType: '',
    year: '',
    volume: '',
    issue: '',
    firstPage: '',
    lastPage: '',
    pageCount: '',
    doi: '',
    link: '',
    abstract: '',
    authorKeywords: [''],
    indexKeywords: [''],
    editors: [''],
    publisher: '',
    issn: '',
    isbn: '',
    eid: '',
    callNumber: '',
    sustainableDevelopmentGoals: [''],
    guqAffiliated: '',
    cirsSponsored: '',
    fullText: '',
  });

  const languages = [
    'English',
    'Arabic',
    'French',
    'Italian',
    'Spanish',
    'German',
    'Turkish',
    'Other',
  ];

  const documentTypes = [
    'Journal Article',
    'Book Chapter',
    'Authored Book',
    'Edited Book',
    'Conference Paper',
    'Research Paper',
    'Editorial',
    'Book Review',
    'Other',
  ];

  const handleTextChange = (e) => {
    setPublicationData({ ...publicationData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e) => {
    setPublicationData({
      ...publicationData,
      [e.target.name]: e.target.value.split(';'),
    });
  };

  return (
    <>
      <Navigation />
      <Container>
        <Heading>Publication</Heading>
        <div className='container mx-auto px-4 py-4'>
          <form className='space-y-8 divide-y divide-gray-200'>
            <div className='space-y-8 divide-y divide-gray-200'>
              <div className='pt-8 space-y-8 divide-y divide-gray-200'>
                <div>
                  <h3 className='text-lg font-medium leading-6 text-gray-900'>
                    Publication Information
                  </h3>
                  <p className='mt-1 text-sm text-gray-500'>...</p>
                </div>
                <div className='mt-6 pt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      First name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='firstName'
                        id='first-name'
                        autoComplete='given-name'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.firstName}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Last name
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='lastName'
                        id='last-name'
                        autoComplete='family-name'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.lastName}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-full'>
                    <label
                      htmlFor='authors'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Authors
                    </label>
                    <div className='mt-1'>
                      <input
                        id='authors'
                        name='authors'
                        type='text'
                        placeholder='ex. Habib, Mohamed; Smith, David'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleArrayChange(e)}
                        value={publicationData.authors.join(';')}
                      />
                    </div>
                    <p className='mt-2 text-sm text-gray-500'>
                      Separate authors (last name, first name) with a semicolon.
                    </p>
                  </div>

                  <div className='sm:col-span-full'>
                    <label
                      htmlFor='title'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Title
                    </label>
                    <div className='mt-1'>
                      <input
                        id='title'
                        name='title'
                        type='text'
                        autoComplete='title'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.title}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-full'>
                    <label
                      htmlFor='sourceTitle'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Source Title
                    </label>
                    <div className='mt-1'>
                      <input
                        id='sourceTitle'
                        name='sourceTitle'
                        type='text'
                        autoComplete='sourceTitle'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.sourceTitle}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='language'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Language
                    </label>
                    <div className='mt-1'>
                      <select
                        id='language'
                        name='language'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.language}
                      >
                        <option value=''>Select...</option>
                        {languages.map((language) => (
                          <option key={language} value={language}>
                            {language}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='documentType'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Document Type
                    </label>
                    <div className='mt-1'>
                      <select
                        id='documentType'
                        name='documentType'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.documentType}
                      >
                        <option value=''>Select...</option>
                        {documentTypes.map((documentType) => (
                          <option key={documentType} value={documentType}>
                            {documentType}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* <div className='sm:col-span-1'>
                <label
                  htmlFor='year'
                  className='block text-sm font-medium text-gray-700'
                >
                  Publication Year
                </label>
                <div className='mt-1'>
                  <select
                    id='year'
                    name='year'
                    autoComplete='year-number'
                    className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  >
                    {Array.from({ length: 50 }, (_, i) => (
                      <option key={i} value={i + 1990}>
                        {i + 1990}
                      </option>
                    ))}
                  </select>
                </div>
              </div> */}

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='year'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Year
                    </label>
                    <div className='mt-1'>
                      <input
                        id='year'
                        name='year'
                        type='text'
                        autoComplete='year'
                        placeholder='ex. 2012'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.year}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='volume'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Volume
                    </label>
                    <div className='mt-1'>
                      <input
                        id='volume'
                        name='volume'
                        type='text'
                        autoComplete='volume'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.volume}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='issue'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Issue
                    </label>
                    <div className='mt-1'>
                      <input
                        id='issue'
                        name='issue'
                        type='text'
                        autoComplete='issue'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.issue}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='pageStart'
                      className='block text-sm font-medium text-gray-700'
                    >
                      First Page
                    </label>
                    <div className='mt-1'>
                      <input
                        id='pageStart'
                        name='pageStart'
                        type='number'
                        autoComplete='pageStart'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.pageStart}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='pageEnd'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Last Page
                    </label>
                    <div className='mt-1'>
                      <input
                        id='pageEnd'
                        name='pageEnd'
                        type='number'
                        autoComplete='pageEnd'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.pageEnd}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='pageCount'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Page Count
                    </label>
                    <div className='mt-1'>
                      <input
                        id='pageCount'
                        name='pageCount'
                        type='number'
                        autoComplete='pageCount'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.pageCount}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='doi'
                      className='block text-sm font-medium text-gray-700'
                    >
                      DOI
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='doi'
                        id='doi'
                        autoComplete='doi'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.doi}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-3'>
                    <label
                      htmlFor='link'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Link
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='link'
                        id='link'
                        placeholder='https://'
                        autoComplete='address-level2'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.link}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-full'>
                    <label
                      htmlFor='abstract'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Abstract
                    </label>
                    <div className='mt-1'>
                      <textarea
                        id='abstract'
                        name='abstract'
                        rows={3}
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.abstract}
                      />
                    </div>
                    <p className='mt-2 text-sm text-gray-500'>
                      Add the abstract for the publication.
                    </p>
                  </div>

                  <div className='sm:col-span-full'>
                    <label
                      htmlFor='authorKeywords'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Author Keywords
                    </label>
                    <div className='mt-1'>
                      <input
                        id='authorKeywords'
                        name='authorKeywords'
                        type='text'
                        autoComplete='authorKeywords'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleArrayChange(e)}
                        value={publicationData.authorKeywords.join(';')}
                      />
                    </div>
                    <p className='mt-2 text-sm text-gray-500'>
                      Separate author keywords with a semicolon.
                    </p>
                  </div>

                  <div className='sm:col-span-full'>
                    <label
                      htmlFor='indexKeywords'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Index Keywords
                    </label>
                    <div className='mt-1'>
                      <input
                        id='indexKeywords'
                        name='indexKeywords'
                        type='text'
                        autoComplete='indexKeywords'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleArrayChange(e)}
                        value={publicationData.indexKeywords.join(';')}
                      />
                    </div>
                    <p className='mt-2 text-sm text-gray-500'>
                      Separate index keywords with a semicolon.
                    </p>
                  </div>

                  <div className='sm:col-span-full'>
                    <label
                      htmlFor='editors'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Editors
                    </label>
                    <div className='mt-1'>
                      <input
                        id='editors'
                        name='editors'
                        type='text'
                        autoComplete='editors'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleArrayChange(e)}
                        value={publicationData.editors.join(';')}
                      />
                    </div>
                    <p className='mt-2 text-sm text-gray-500'>
                      Separate editors with a semicolon.
                    </p>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='publisher'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Publisher
                    </label>
                    <div className='mt-1'>
                      <input
                        id='publisher'
                        name='publisher'
                        type='text'
                        autoComplete='publisher'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.publisher}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='issn'
                      className='block text-sm font-medium text-gray-700'
                    >
                      ISSN
                    </label>
                    <div className='mt-1'>
                      <input
                        id='issn'
                        name='issn'
                        type='text'
                        autoComplete='issn'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.issn}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='isbn'
                      className='block text-sm font-medium text-gray-700'
                    >
                      ISBN
                    </label>
                    <div className='mt-1'>
                      <input
                        id='isbn'
                        name='isbn'
                        type='text'
                        autoComplete='isbn'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.isbn}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='callNumber'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Call Number
                    </label>
                    <div className='mt-1'>
                      <input
                        id='callNumber'
                        name='callNumber'
                        type='text'
                        autoComplete='callNumber'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.callNumber}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='authorScopusId'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Author Scopus ID
                    </label>
                    <div className='mt-1'>
                      <input
                        id='authorScopusId'
                        name='authorScopusId'
                        type='text'
                        autoComplete='authorScopusId'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.authorScopusId}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='authorResearcherId'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Author Researcher ID
                    </label>
                    <div className='mt-1'>
                      <input
                        id='authorResearcherId'
                        name='authorResearcherId'
                        type='text'
                        autoComplete='authorResearcherId'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.authorResearcherId}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='eid'
                      className='block text-sm font-medium text-gray-700'
                    >
                      EID
                    </label>
                    <div className='mt-1'>
                      <input
                        id='eid'
                        name='eid'
                        type='text'
                        autoComplete='eid'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.eid}
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-4'>
                    <label
                      htmlFor='sustainableDevelopmentGoals'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Sustainable Development Goals
                    </label>
                    <div className='mt-1'>
                      <input
                        id='sustainableDevelopmentGoals'
                        name='sustainableDevelopmentGoals'
                        type='text'
                        autoComplete='sustainableDevelopmentGoals'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleArrayChange(e)}
                        value={publicationData.sustainableDevelopmentGoals.join(
                          ';'
                        )}
                      />
                    </div>
                    <p className='mt-2 text-sm text-gray-500'>
                      Separate sustainable development goals with a semicolon.
                    </p>
                  </div>

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='cirsSponsored'
                      className='block text-sm font-medium text-gray-700'
                    >
                      CIRS Sponsored
                    </label>
                    <div className='mt-1'>
                      <select
                        id='cirsSponsored'
                        name='cirsSponsored'
                        autoComplete='cirsSponsored'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.cirsSponsored}
                      >
                        <option key='Select' value=''>
                          Select...
                        </option>
                        <option key='Yes' value='Yes'>
                          Yes
                        </option>
                        <option key='No' value='No'>
                          No
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className='sm:col-span-1'>
                    <label
                      htmlFor='guqAffiliated'
                      className='block text-sm font-medium text-gray-700'
                    >
                      GUQ Affiliated
                    </label>
                    <div className='mt-1'>
                      <select
                        id='guqAffiliated'
                        name='guqAffiliated'
                        autoComplete='guqAffiliated'
                        className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                        onChange={(e) => handleTextChange(e)}
                        value={publicationData.guqAffiliated}
                      >
                        <option key='Select' value=''>
                          Select...
                        </option>
                        <option key='Yes' value='Yes'>
                          Yes
                        </option>
                        <option key='No' value='No'>
                          No
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='fullText'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Full Text File Upload
                    </label>
                    <div className='mt-1 flex items-center'>
                      <div className='mt-1'>
                        <input
                          id='fullText'
                          name='fullText'
                          type='text'
                          autoComplete='fullText'
                          disabled
                          className='block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-slate-50'
                        />
                      </div>
                      <button
                        type='button'
                        className='ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                      >
                        Upload
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='pt-5'>
              <div className='flex justify-start'>
                <button
                  type='submit'
                  className='mr-3 inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                >
                  Save New Publication
                </button>
                <button
                  type='button'
                  className='rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};
