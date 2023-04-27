import createReducer from '../../redux/create-reducer';

import {
  getDataFailedReducer,
  getDataRequestReducer,
  getDataResetErrorReducer,
  getDataSuccessReducer,
} from './reducers';
import { types, StoriesIdState } from './types';

export const initialState: StoriesIdState = {
  storiesId: {
    fetch: 'idle',
    data: [],
    error: null,
  },
};

export const storiesIdReducer = createReducer(initialState, {
  [types.GET_DATA_REQUEST]: getDataRequestReducer,
  [types.GET_DATA_SUCCESS]: getDataSuccessReducer,
  [types.GET_DATA_FAILED]: getDataFailedReducer,
  [types.RESET_DATA_ERROR]: getDataResetErrorReducer,
});
