import { types } from '../types';

export const getStoriesIdRequest = () => ({
  type: types.GET_STORIES_ID_REQUEST,
});

export const getStoriesIdSuccess = (
  storiesId: number[]
): BaseAction<number[]> => ({
  type: types.GET_STORIES_ID_SUCCESS,
  payload: storiesId,
});

export const getStoriesIdError = (
  message: RequestError
): BaseAction<RequestError> => ({
  type: types.GET_STORIES_ID_FAILED,
  payload: message,
});

export const resetGetStoriesIdError = (): BaseAction => ({
  type: types.RESET_STORIES_ID_ERROR,
});
