import { call, put, all, takeLatest } from 'redux-saga/effects';
import actions, { GET_REQUEST } from '../actions/books';
import * as api from '../../services/google-books';

function* getBooks() {
  try {
    const response = yield call(api.getBooks);
    yield put(actions.getBooksSuccess(response.data.items));
  } catch (err) {
    yield put(actions.getBooksFailure(err));
  }
}

export default function* booksSagas() {
  yield all([takeLatest(GET_REQUEST, getBooks)]);
}
