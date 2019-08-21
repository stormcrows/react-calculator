import combineReducers from "./combineReducers";

it("runs reducers of the same type in sequence", () => {
  const reducers = [
    (state, { type, payload }) => {
      if (type === "seq") return { ...state, r1: payload };
      return state;
    },
    (state, { type, payload }) => {
      if (type === "seq") return { ...state, r2: payload };
      return state;
    },
    (state, { type, payload }) => {
      if (type === "seq") return { ...state, r3: payload };
      return state;
    }
  ];

  const combined = combineReducers(reducers);
  const state = combined({}, { type: "seq", payload: "123" });

  expect(state).toEqual({
    r1: "123",
    r2: "123",
    r3: "123"
  });
});
