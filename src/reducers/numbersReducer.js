export default function numbersReducer(state, { type, payload: x }) {
  if (type !== "numbers") return state;

  const { display, num2, op, putDot } = state;
  const isNum = !Number.isNaN(x);
  const isNum1 = Boolean(isNum && !op);
  const isNum2 = Boolean(isNum && op);
  const newDisplay = calcDisplay(x, display, putDot, isNum2, num2);

  if (isNum1) {
    return {
      ...state,
      num1: Number(newDisplay),
      display: newDisplay,
      putDot: false
    };
  }

  if (isNum2) {
    return {
      ...state,
      num2: Number(newDisplay),
      display: newDisplay,
      putDot: false
    };
  }

  return state;
}

function calcDisplay(x, display, putDot, isNum2, num2) {
  const sep = putDot ? "." : "";
  if (isNum2 && num2 === undefined) {
    return putDot ? `0.${x}` : `${x}`;
  }
  if (display === "0") {
    return putDot ? `0.${x}` : `${x}`;
  }
  return display + sep + x;
}
