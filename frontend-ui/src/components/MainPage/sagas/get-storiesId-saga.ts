import { call, put, takeLatest } from 'redux-saga/effects';

import { getData } from '../../../requests';

import { getDataError, getDataSuccess, resetGetDataError } from '../actions';
import { types } from '../types';

function* requestDataWorker(): Generator<any, any, any> {
  try {
    const result: number[] = yield call(getData);

    yield put(resetGetDataError());

    yield put(getDataSuccess(result));
  } catch (e) {
    const error = e as RequestError;
    yield put(getDataError(error));
  }
}

export function* fetchDataWatcher() {
  yield takeLatest(types.GET_DATA_REQUEST, requestDataWorker);
}
