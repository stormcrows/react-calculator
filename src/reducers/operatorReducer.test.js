import { operatorReducer } from ".";

it("should set op on state when payload is +,-,*,/", () => {
  let state = operatorReducer({}, { type: "operator", payload: "+" });
  expect(state).toEqual({ op: "+" });

  state = operatorReducer({}, { type: "operator", payload: "-" });
  expect(state).toEqual({ op: "-" });

  state = operatorReducer({}, { type: "operator", payload: "*" });
  expect(state).toEqual({ op: "*" });

  state = operatorReducer({}, { type: "operator", payload: "/" });
  expect(state).toEqual({ op: "/" });
});

it("should set putDot to true on . payload", () => {
  const state = operatorReducer(
    { display: "0" },
    { type: "operator", payload: "." }
  );
  expect(state).toEqual({ display: "0", putDot: true });
});

it("should set putDot to false on . payload when dot already present", () => {
  const state = operatorReducer(
    { display: "0.1" },
    { type: "operator", payload: "." }
  );
  expect(state).toEqual({ display: "0.1", putDot: false });
});

it("should switch sign on display and num1 on +/- payload", () => {
  const state = operatorReducer(
    { display: "123", num1: 123 },
    { type: "operator", payload: "+/-" }
  );
  expect(state).toEqual({ display: "-123", num1: -123 });
});

it("should switch sign on display and num2 on +/- payload", () => {
  const state = operatorReducer(
    { display: "123", op: "+", num2: 123 },
    { type: "operator", payload: "+/-" }
  );
  expect(state).toEqual({ display: "-123", op: "+", num2: -123 });
});
