export default function operateReducer(state, { type }) {
  if (type !== "operate") return state;

  const { num1, op, num2 } = state;
  if (num2 === undefined) return state;

  const result = operate(num1, op, num2);
  return {
    ...state,
    num1: result,
    op: undefined,
    num2: undefined,
    display: result.toString()
  };
}

function operate(num1, op, num2) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw Error(`unkown operator: ${op}`);
  }
}
