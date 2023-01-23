import { useReducer, useCallback } from 'react';
import { GET_PUBLICATION_BY_ID, PUBLICATION_ERROR } from '../types';
import PublicationContext from './publicationContext';
import publicationReducer from './publicationReducer';
import data from '../../data/faculty-data.json';

const PublicationState = ({ children }) => {
  const initialState = {
    publication: null,
    isLoading: true,
    publicationError: null,
  };

  const [state, dispatch] = useReducer(publicationReducer, initialState);

  const getPublicationById = useCallback(
    (id) => {
      let publication = {};

      data.forEach((faculty, index) => {
        if (faculty.pubId === id) {
          publication = { id: index, ...faculty };
        }
      });

      try {
        if (Object.keys(publication).length === 0) {
          dispatch({
            type: PUBLICATION_ERROR,
            payload: 'No publication found',
          });
        } else {
          dispatch({
            type: GET_PUBLICATION_BY_ID,
            payload: publication,
          });
        }
      } catch (error) {
        dispatch({
          type: PUBLICATION_ERROR,
          payload: error,
        });
      }
    },
    [dispatch]
  );

  return (
    <PublicationContext.Provider
      value={{
        publication: state.publication,
        isLoading: state.isLoading,
        publicationError: state.publicationError,
        getPublicationById,
      }}
    >
      {children}
    </PublicationContext.Provider>
  );
};

export default PublicationState;
