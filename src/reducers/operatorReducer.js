export default function operateReducer(state, { type }) {
  const { display, num1, num2 } = state
  switch (type) {
    case "+":
    case "-":
    case "*":
    case "/":
      return { ...state, op: type }

    case "+/-":
      const isNum1 = num2 === undefined
      const newDisplay = isNum1 ? (-num1).toString() : (-num2).toString()

      return isNum1
        ? { ...state, display: newDisplay, num1: -num1 }
        : { ...state, display: newDisplay, num2: -num2 }

    case ".":
      return {
        ...state,
        putDot: !display.includes(".")
      }

    default:
      return state
  }
}
