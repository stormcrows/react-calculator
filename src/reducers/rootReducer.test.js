import rootReducer from "./rootReducer";

it("returns initial state when no params provided", () => {
  const state = rootReducer();

  expect(state).toMatchObject({
    display: "0",
    num1: 0,
    op: undefined,
    num2: undefined,
    putDot: false,
    mem: undefined
  });
});

it("returns initial state for type 'clear' and payload 'CLEAR'", () => {
  const state = rootReducer(
    { display: "123", num1: 123 },
    { type: "clear", payload: "CLEAR" }
  );
  expect(state).toMatchObject(rootReducer());
});

it("returns provided state when type other than 'clear'", () => {
  const state = rootReducer({ display: "123", num1: 123 }, { type: "other" });
  expect(state).toEqual({ display: "123", num1: 123 });
});

it("should reset all but mem register", () => {
  const state = rootReducer(
    { display: "123", num1: 123, op: "*", num2: 321, mem: 123 },
    { type: "clear", payload: "CLEAR" }
  );

  expect(state).toEqual({
    display: "0",
    num1: 0,
    op: undefined,
    num2: undefined,
    putDot: false,
    mem: 123
  });
});
