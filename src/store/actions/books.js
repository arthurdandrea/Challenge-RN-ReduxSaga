export const GET_REQUEST = 'books/GET_REQUEST';
export const GET_SUCCESS = 'books/GET_SUCCESS';
export const GET_FAILURE = 'books/GET_FAILURE';

export const types = { GET_REQUEST, GET_SUCCESS, GET_FAILURE };

export const creators = {
  getBooksRequest: () => ({
    type: GET_REQUEST,
  }),
  getBooksSuccess: (data) => ({
    type: GET_SUCCESS,
    payload: data,
  }),
  getBooksFailure: (error) => ({
    type: GET_FAILURE,
    payload: error,
  }),
};

export default creators;