import { all, fork } from 'redux-saga/effects';

import { websiteSagas } from '../components/MainPage';

export default function* root() {
  yield all([fork(websiteSagas)]);
}
