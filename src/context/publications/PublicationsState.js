import { useReducer, useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import {
  GET_PUBLICATIONS,
  PUBLICATIONS_ERROR,
  GET_FILTERED_PUBLICATIONS,
  ADD_PUBLICATION,
  EDIT_PUBLICATION,
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

  const addPublication = useCallback(
    (newPublication) => {
      const unique_id = uuid();
      const pubId = unique_id.slice(0, 8);

      let publication = { id: 5555, pubId, ...newPublication };
      // console.log(publication);

      dispatch({
        type: ADD_PUBLICATION,
        payload: publication,
      });

      return pubId;
    },
    [dispatch]
  );

  const editPublication = useCallback(
    (updatedPublication) => {
      dispatch({
        type: EDIT_PUBLICATION,
        payload: updatedPublication,
      });

      return updatedPublication.pubId;
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
        addPublication,
        editPublication,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  );
};

export default PublicationsState;
