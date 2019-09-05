import { operatorReducer } from "."

it("should set op on state when type is +", () => {
  expect(operatorReducer({}, { type: "+" })).toEqual({ op: "+" })
})

it("should set op on state when type is -", () => {
  expect(operatorReducer({}, { type: "-" })).toEqual({ op: "-" })
})

it("should set op on state when type is *", () => {
  expect(operatorReducer({}, { type: "*" })).toEqual({ op: "*" })
})

it("should set op on state when type is /", () => {
  expect(operatorReducer({}, { type: "/" })).toEqual({ op: "/" })
})

it("should set putDot to true on . type", () => {
  const state = operatorReducer({ display: "0" }, { type: "." })
  expect(state).toEqual({ display: "0", putDot: true })
})

it("should set putDot to false on . type when dot already present", () => {
  const state = operatorReducer({ display: "0.1" }, { type: "." })
  expect(state).toEqual({ display: "0.1", putDot: false })
})

it("should switch sign on display and num1 on +/- type", () => {
  const state = operatorReducer({ display: "123", num1: 123 }, { type: "+/-" })
  expect(state).toEqual({ display: "-123", num1: -123 })
})

it("should switch sign on display and num2 on +/- type", () => {
  const state = operatorReducer(
    { display: "123", op: "+", num2: 123 },
    { type: "+/-" }
  )
  expect(state).toEqual({ display: "-123", op: "+", num2: -123 })
})
