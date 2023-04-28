import { StoriesIdState } from '../types';

export const getStoriesIdRequestReducer = (
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
