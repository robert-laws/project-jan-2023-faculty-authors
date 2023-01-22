import { GET_PUBLICATIONS, PUBLICATIONS_ERROR } from '../types';

const PublicationsReducer = (state, action) => {
  switch (action.type) {
    case GET_PUBLICATIONS:
      return {
        ...state,
        publications: action.payload,
        isLoading: false,
      };
    case PUBLICATIONS_ERROR:
      return {
        ...state,
        publicationsError: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default PublicationsReducer;
