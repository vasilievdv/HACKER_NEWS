import { all, call } from 'redux-saga/effects';

import { fetchStoriesIdWatcher } from './get-storiesId-saga';

export function* storiesIdSagas() {
  yield all([call(fetchStoriesIdWatcher)]);
}
