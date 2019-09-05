export default function numbersReducer(state, { type }) {
  switch (type) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      const { display, num2, op, putDot } = state
      const isNum2 = !!op
      const newDisplay = calcDisplay(type, display, putDot, isNum2, num2)

      if (isNum2) {
        return {
          ...state,
          num2: Number(newDisplay),
          display: newDisplay,
          putDot: false
        }
      }

      return {
        ...state,
        num1: Number(newDisplay),
        display: newDisplay,
        putDot: false
      }

    default:
      return state
  }
}

function calcDisplay(x, display, putDot, isNum2, num2) {
  const sep = putDot ? "." : ""
  if (isNum2 && num2 === undefined) {
    return putDot ? `0.${x}` : `${x}`
  }
  if (display === "0") {
    return putDot ? `0.${x}` : `${x}`
  }
  return display + sep + x
}
