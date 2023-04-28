import { StoriesIdState } from '../types';

export const getStoriesIdResetErrorReducer = (
  state: StoriesIdState
): StoriesIdState => {
  return {
    ...state,
    storiesId: {
      ...state.storiesId,
      error: null,
    },
  };
};
