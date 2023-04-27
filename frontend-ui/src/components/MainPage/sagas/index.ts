import { all, call } from 'redux-saga/effects';

import { fetchDataWatcher } from './get-storiesId-saga';

export function* websiteSagas() {
  yield all([call(fetchDataWatcher)]);
}
