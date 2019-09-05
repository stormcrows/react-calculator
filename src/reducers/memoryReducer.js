export default function memoryReducer(state, { type }) {
  const { display, num2, mem } = state
  switch (type) {
    case "M":
      return {
        ...state,
        mem: Number(display)
      }

    case "M+":
      return {
        ...state,
        mem: Number(display) + (mem || 0)
      }

    case "MR":
      if (mem === undefined) return state
      return num2 !== undefined
        ? {
            ...state,
            num2: mem,
            display: mem.toString()
          }
        : {
            ...state,
            num1: mem,
            display: mem.toString()
          }

    case "MC":
      return {
        ...state,
        mem: undefined
      }

    default:
      return state
  }
}
