import operateReducer from "./operateReducer";
import rootReducer from "./rootReducer";

it("should pass-through state if no operator provided", () => {
  const state = { ...rootReducer() };
  const state2 = operateReducer(state, { type: "operate" });

  expect(state).toBe(state2);
});

it("should pass-through state if second number is undefined", () => {
  const state = { ...rootReducer(), op: "*" };
  const state2 = operateReducer(state, { type: "operate" });

  expect(state).toBe(state2);
});

it("should calculate + if num2 provided", () => {
  let state = { ...rootReducer(), num1: 4.5, op: "+", num2: 3 };
  state = operateReducer(state, { type: "operate" });

  expect(state).toMatchObject({
    num1: 7.5,
    display: "7.5",
    op: undefined,
    num2: undefined
  });
});

it("should calculate - if num2 provided", () => {
  let state = { ...rootReducer(), num1: 4.5, op: "-", num2: 3 };
  state = operateReducer(state, { type: "operate" });

  expect(state).toMatchObject({
    num1: 1.5,
    display: "1.5",
    op: undefined,
    num2: undefined
  });
});

it("should calculate * if num2 provided", () => {
  let state = { ...rootReducer(), num1: 2.5, op: "*", num2: 3 };
  state = operateReducer(state, { type: "operate" });

  expect(state).toMatchObject({
    num1: 7.5,
    display: "7.5",
    op: undefined,
    num2: undefined
  });
});

it("should calculate / if num2 provided", () => {
  let state = { ...rootReducer(), num1: 15, op: "/", num2: 3 };
  state = operateReducer(state, { type: "operate" });

  expect(state).toMatchObject({
    num1: 5,
    display: "5",
    op: undefined,
    num2: undefined
  });
});

it("should throw on unknown operator", () => {
  const state = { ...rootReducer(), num1: 1, op: "#", num2: 2 };
  expect(() => operateReducer(state, { type: "operate" })).toThrow();
});
