import rootReducer from "./rootReducer";
import numbersReducer from "./numbersReducer";

describe("when num1 active", () => {
  it("should append numbers to display", () => {
    let state = rootReducer();
    state = numbersReducer(state, { type: "numbers", payload: 1 });
    state = numbersReducer(state, { type: "numbers", payload: 2 });
    state = numbersReducer(state, { type: "numbers", payload: 3 });

    expect(state).toMatchObject({
      display: "123",
      num1: 123,
      num2: undefined,
      op: undefined,
      putDot: false
    });
  });

  it("should support dot", () => {
    let state = { ...rootReducer(), putDot: true };
    state = numbersReducer(state, { type: "numbers", payload: 0 });
    state = numbersReducer(state, { type: "numbers", payload: 0 });
    state = numbersReducer(state, { type: "numbers", payload: 1 });

    expect(state).toMatchObject({
      display: "0.001",
      num1: 0.001,
      num2: undefined,
      op: undefined,
      putDot: false
    });
  });

  it("should display 0 and set num1 to zero if provided payload is 0", () => {
    let state = rootReducer();
    state = numbersReducer(state, { type: "numbers", payload: 0 });
    state = numbersReducer(state, { type: "numbers", payload: 0 });

    expect(state).toMatchObject({
      display: "0",
      num1: 0,
      num2: undefined,
      op: undefined,
      putDot: false
    });
  });

  it("should display 0 and set num1 to zero if provided payload is 0", () => {
    let state = rootReducer();
    state = numbersReducer(state, { type: "numbers", payload: 0 });
    state = numbersReducer(state, { type: "numbers", payload: 0 });

    expect(state).toMatchObject({
      display: "0",
      num1: 0,
      num2: undefined,
      op: undefined,
      putDot: false
    });
  });
});

describe("when num2 active", () => {
  it("should append numbers to display when operator defined", () => {
    let state = { ...rootReducer(), num1: 0, op: "*" };
    state = numbersReducer(state, { type: "numbers", payload: 1 });
    state = numbersReducer(state, { type: "numbers", payload: 2 });
    state = numbersReducer(state, { type: "numbers", payload: 3 });

    expect(state).toMatchObject({
      display: "123",
      num1: 0,
      num2: 123,
      op: "*",
      putDot: false
    });
  });

  it("should support dot", () => {
    let state = { ...rootReducer(), num1: 1, op: "*", putDot: true };
    state = numbersReducer(state, { type: "numbers", payload: 0 });
    state = numbersReducer(state, { type: "numbers", payload: 0 });
    state = numbersReducer(state, { type: "numbers", payload: 1 });

    expect(state).toMatchObject({
      display: "0.001",
      num1: 1,
      num2: 0.001,
      op: "*",
      putDot: false
    });
  });

  it("should display 0 and set num2 to zero if provided payload is 0 and has operator", () => {
    let state = { ...rootReducer(), num1: 1, op: "/" };
    state = numbersReducer(state, { type: "numbers", payload: 0 });
    state = numbersReducer(state, { type: "numbers", payload: 0 });

    expect(state).toMatchObject({
      display: "0",
      num1: 1,
      num2: 0,
      op: "/",
      putDot: false
    });
  });
});
