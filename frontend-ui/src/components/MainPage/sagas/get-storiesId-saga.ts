import { SagaReturnType, call, put, takeLatest } from 'redux-saga/effects';

import { getStoriesId } from '../../../requests';

import {
  getStoriesIdError,
  getStoriesIdSuccess,
  resetGetStoriesIdError,
} from '../actions';
import { types } from '../types';

type StoriesId = SagaReturnType<typeof getStoriesId>

function* requestStoriesIdWorker(): Generator<any, any, any> {
  try {
    const result: StoriesId = yield call(getStoriesId);

    yield put(resetGetStoriesIdError());

    yield put(getStoriesIdSuccess(result));
  } catch (e) {
    const error = e as RequestError;
    yield put(getStoriesIdError(error));
  }
}

export function* fetchStoriesIdWatcher() {
  yield takeLatest(types.GET_STORIES_ID_REQUEST, requestStoriesIdWorker);
}
