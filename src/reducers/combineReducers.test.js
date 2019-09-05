import combineReducers from "./combineReducers"

it("runs reducers of the same type in sequence, carrying over the state", () => {
  const reducers = [
    (state, { type }) => {
      if (type === "seq") return { ...state, field: state.field + "1" }
      return state
    },
    (state, { type }) => {
      if (type === "seq") return { ...state, field: state.field + "2" }
      return state
    },
    (state, { type }) => {
      if (type === "seq") return { ...state, field: state.field + "3" }
      return state
    }
  ]

  const combined = combineReducers(reducers)
  const state = combined({ field: "0" }, { type: "seq" })

  expect(state).toEqual({ field: "0123" })
})
