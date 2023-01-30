import {
  GET_PUBLICATIONS,
  PUBLICATIONS_ERROR,
  GET_FILTERED_PUBLICATIONS,
  ADD_PUBLICATION,
  EDIT_PUBLICATION,
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

    case ADD_PUBLICATION:
      return {
        ...state,
        publications: [...state.publications, action.payload],
        filteredPublications: [...state.publications, action.payload],
      };

    case EDIT_PUBLICATION:
      return {
        ...state,
        publications: state.publications.map((publication) =>
          publication.pubId === action.payload.pubId
            ? action.payload
            : publication
        ),
        filteredPublications: state.publications.map((publication) =>
          publication.pubId === action.payload.pubId
            ? action.payload
            : publication
        ),
      };

    default:
      return state;
  }
};

export default PublicationsReducer;
