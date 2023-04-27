import { StoriesIdState } from '../types';

export const getDataRequestReducer = (
  state: StoriesIdState
): StoriesIdState => {
  return {
    ...state,
    storiesId: {
      ...state.storiesId,
      fetch: 'pending',
    },
  };
};
