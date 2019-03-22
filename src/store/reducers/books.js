import { GET_REQUEST, GET_SUCCESS, GET_FAILURE } from '../actions/books';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REQUEST:
      return { ...state, loading: true };
    case GET_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case GET_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}