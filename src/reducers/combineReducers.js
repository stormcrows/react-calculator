export default function combineReducers(reducers = []) {
  return (state, action) =>
    reducers.reduce((state, reducer) => reducer(state, action), state);
}
