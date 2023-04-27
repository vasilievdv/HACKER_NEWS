import { StoriesIdState } from '../types';

export const getDataFailedReducer = (
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
