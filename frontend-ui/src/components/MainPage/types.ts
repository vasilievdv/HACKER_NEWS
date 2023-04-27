export const types = {
  GET_DATA_REQUEST: 'GET_DATA_REQUEST',
  GET_DATA_SUCCESS: 'GET_DATA_SUCCESS',
  GET_DATA_FAILED: 'GET_DATA_FAILED',
  RESET_DATA_ERROR: 'RESET_DATA_ERROR',
};

export interface StoriesIdState {
  storiesId: StoreFetchState<number[]>;
}
