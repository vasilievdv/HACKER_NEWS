import { combineReducers } from 'redux';

import { storiesIdReducer, StoriesIdState } from '../components/MainPage';

const rootReducer = combineReducers({
  storiesId: storiesIdReducer,
});

export interface State {
  storiesId: StoriesIdState;
}

export default rootReducer;
