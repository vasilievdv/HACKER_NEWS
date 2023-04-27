import { types } from '../types';

export const getDataRequest = () => ({
  type: types.GET_DATA_REQUEST,
});

export const getDataSuccess = (storiesId: number[]): BaseAction<number[]> => ({
  type: types.GET_DATA_SUCCESS,
  payload: storiesId,
});

export const getDataError = (
  message: RequestError
): BaseAction<RequestError> => ({
  type: types.GET_DATA_FAILED,
  payload: message,
});

export const resetGetDataError = (): BaseAction => ({
  type: types.RESET_DATA_ERROR,
});
