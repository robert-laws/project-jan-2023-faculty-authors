import { GET_PUBLICATION_BY_ID, PUBLICATION_ERROR } from '../types';

const PublicationReducer = (state, action) => {
  switch (action.type) {
    case GET_PUBLICATION_BY_ID:
      return {
        ...state,
        publication: action.payload,
        isLoading: false,
      };
    case PUBLICATION_ERROR:
      return {
        ...state,
        publicationError: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default PublicationReducer;
