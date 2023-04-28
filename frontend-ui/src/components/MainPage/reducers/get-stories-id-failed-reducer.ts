import { StoriesIdState } from '../types';

export const getStoriesIdFailedReducer = (
  state: StoriesIdState,
  action: BaseAction<RequestError>
): StoriesIdState => {
  return {
    ...state,
    storiesId: {
      ...state.storiesId,
      fetch: 'rejected',
      error: action.payload!,
    },
  };
};
