const getInitialState = () => ({
  display: "0",
  num1: 0,
  op: undefined,
  num2: undefined,
  putDot: false,
  mem: undefined
})

export default function rootReducer(state = getInitialState(), { type } = {}) {
  switch (type) {
    case "CLEAR":
      return { ...rootReducer(), mem: state.mem }

    default:
      return state
  }
}
