import React from "react"
import { useAppContext } from "../../AppContext"
import "./Key.css"

function code(c) {
  if (typeof c !== "string" || c.length > 1) return c
  return c.charCodeAt(0)
}

const Key = ({ type, disabled }) => {
  const dispatch = useAppContext()
  return (
    <button
      disabled={disabled}
      className={`key key-${type} key-${code(type)}`}
      onClick={() => dispatch({ type })}
    >
      {type}
    </button>
  )
}

export default Key
