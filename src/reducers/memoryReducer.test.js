import memoryReducer from "./memoryReducer";
import rootReducer from "./rootReducer";

it("on M should store displayed number in mem", () => {
  let state = { ...rootReducer(), display: "123" };
  state = memoryReducer(state, { type: "memory", payload: "M" });

  expect(state.mem).toBe(123);
});

it("on M+ should add displayed number to mem", () => {
  let state = { ...rootReducer(), mem: 10, display: "10" };
  state = memoryReducer(state, { type: "memory", payload: "M+" });

  expect(state.mem).toBe(20);
});

it("on MR should restore number from mem to num1", () => {
  let state = { ...rootReducer(), mem: 123, display: "5" };
  state = memoryReducer(state, { type: "memory", payload: "MR" });

  expect(state).toMatchObject({
    num1: 123,
    display: "123",
    mem: 123
  });
});

it("on MR should restore number from mem to num2", () => {
  let state = {
    ...rootReducer(),
    num1: 1,
    num2: 5,
    mem: 123,
    display: "5"
  };
  state = memoryReducer(state, { type: "memory", payload: "MR" });

  expect(state).toMatchObject({
    num1: 1,
    num2: 123,
    display: "123",
    mem: 123
  });
});

it("on MR should restore number from mem to num2", () => {
  let state = {
    ...rootReducer(),
    num1: 1,
    op: "*",
    num2: 5,
    mem: 123,
    display: "5"
  };
  state = memoryReducer(state, { type: "memory", payload: "MR" });

  expect(state).toMatchObject({
    num1: 1,
    op: "*",
    num2: 123,
    display: "123",
    mem: 123
  });
});

it("on MC clean mem register", () => {
  let state = {
    ...rootReducer(),
    num1: 5,
    mem: 123,
    display: "5"
  };
  state = memoryReducer(state, { type: "memory", payload: "MC" });

  expect(state).toMatchObject({
    num1: 5,
    display: "5",
    mem: undefined
  });
});
