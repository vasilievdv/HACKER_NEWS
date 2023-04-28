import { StoriesIdState } from '../types';

export const getStoriesIdSuccessReducer = (
  state: StoriesIdState,
  actions: BaseAction<number[]>
): StoriesIdState => {
  return {
    ...state,
    storiesId: {
      ...state.storiesId,
      fetch: 'resolve',
      data: actions.payload!.slice(0, 100),
    },
  };
};
