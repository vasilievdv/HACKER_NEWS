import { all, fork } from 'redux-saga/effects';

import { storiesIdSagas } from '../components/MainPage';

export default function* root() {
  yield all([fork(storiesIdSagas)]);
}
