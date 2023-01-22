import { useReducer, useCallback } from 'react';
import { GET_PUBLICATIONS, PUBLICATIONS_ERROR } from '../types';
import PublicationsContext from './PublicationsContext';
import PublicationsReducer from './PublicationsReducer';
import data from '../../data/faculty-data-ten.json';

const PublicationsState = ({ children }) => {
  const initialState = {
    publications: [],
    isLoading: true,
    publicationsError: null,
  };

  const [state, dispatch] = useReducer(PublicationsReducer, initialState);

  const getPublications = useCallback(() => {
    let allPublications = [];

    data.forEach((faculty, index) => {
      allPublications.push({ id: index, ...faculty });
    });

    try {
      dispatch({
        type: GET_PUBLICATIONS,
        payload: allPublications,
      });
    } catch (error) {
      dispatch({
        type: PUBLICATIONS_ERROR,
        payload: error,
      });
    }
  }, [dispatch]);

  return (
    <PublicationsContext.Provider
      value={{
        publications: state.publications,
        isLoading: state.isLoading,
        publicationsError: state.publicationsError,
        getPublications,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  );
};

export default PublicationsState;
