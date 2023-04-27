declare global {
  interface BaseAction<T = any> {
    type: string;
    payload?: T;
  }

  type LoadingState = 'idle' | 'pending' | 'rejected' | 'resolve';

  type RequestError = {
    code: number;
    message: string;
  };

  type StoreFetchState<T> = {
    fetch: LoadingState;
    data: T;
    error: RequestError | null;
  };
}

export default global;
