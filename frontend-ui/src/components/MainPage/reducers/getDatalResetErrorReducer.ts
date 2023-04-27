import { StoriesIdState } from '../types';

export const getDataResetErrorReducer = (
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
