type Action = {
  type: string;
  payload: any;
};

type Reducer<State> = (state: State, action: Action) => State;
type Handlers<State> = { [key: string]: Reducer<State> };

export default <State>(
    initialState: State,
    handlers: Handlers<State>
  ): Reducer<State> =>
  (state = initialState, action) =>
    Object.prototype.hasOwnProperty.call(handlers, action.type)
      ? handlers[action.type](state, action)
      : state;
