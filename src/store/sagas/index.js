import { all } from 'redux-saga/effects';

import booksSagas from './books';

export default function* rootSaga() {
  return yield all([ booksSagas() ]);
}
