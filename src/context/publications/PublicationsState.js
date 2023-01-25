import { useReducer, useCallback } from 'react';
import {
  GET_PUBLICATIONS,
  PUBLICATIONS_ERROR,
  GET_FILTERED_PUBLICATIONS,
} from '../types';
import PublicationsContext from './publicationsContext';
import publicationsReducer from './publicationsReducer';
import data from '../../data/faculty-data.json';

const PublicationsState = ({ children }) => {
  const initialState = {
    publications: [],
    filteredPublications: [],
    isLoading: true,
    publicationsError: null,
  };

  const [state, dispatch] = useReducer(publicationsReducer, initialState);

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

  const filterPublications = useCallback(
    (results) => {
      dispatch({
        type: GET_FILTERED_PUBLICATIONS,
        payload: results,
      });
    },
    [dispatch]
  );

  return (
    <PublicationsContext.Provider
      value={{
        publications: state.publications,
        filteredPublications: state.filteredPublications,
        isLoading: state.isLoading,
        publicationsError: state.publicationsError,
        getPublications,
        filterPublications,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  );
};

export default PublicationsState;
