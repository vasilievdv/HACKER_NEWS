import createReducer from '../../redux/create-reducer';

import {
  getStoriesIdFailedReducer,
  getStoriesIdRequestReducer,
  getStoriesIdResetErrorReducer,
  getStoriesIdSuccessReducer,
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
  [types.GET_STORIES_ID_REQUEST]: getStoriesIdRequestReducer,
  [types.GET_STORIES_ID_SUCCESS]: getStoriesIdSuccessReducer,
  [types.GET_STORIES_ID_FAILED]: getStoriesIdFailedReducer,
  [types.RESET_STORIES_ID_ERROR]: getStoriesIdResetErrorReducer,
});
