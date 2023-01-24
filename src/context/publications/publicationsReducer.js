import {
  GET_PUBLICATIONS,
  PUBLICATIONS_ERROR,
  GET_FILTERED_PUBLICATIONS,
} from '../types';

const PublicationsReducer = (state, action) => {
  switch (action.type) {
    case GET_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
        filteredPublications: action.payload,
        isLoading: false,
      };
    case PUBLICATIONS_ERROR:
      return {
        ...state,
        publicationsError: action.payload,
        isLoading: false,
      };

    case GET_FILTERED_PUBLICATIONS:
      return {
        ...state,
        filteredPublications: action.payload,
      };

    default:
      return state;
  }
};

export default PublicationsReducer;
