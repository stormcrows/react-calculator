import React, { useReducer } from "react"
import AppContext from "../../AppContext"
import { Display, Key } from ".."
import {
  combineReducers,
  memoryReducer,
  numbersReducer,
  operateReducer,
  operatorReducer,
  rootReducer
} from "../../reducers"
import "./Calculator.css"

const Calculator = () => {
  const [state, dispatch] = useReducer(
    combineReducers([
      rootReducer,
      numbersReducer,
      operatorReducer,
      operateReducer,
      memoryReducer
    ]),
    rootReducer()
  )

  return (
    <AppContext.Provider value={dispatch}>
      <div className="calculator shadow">
        <img alt="CloudFormer" src="cloudformer-logo.png" className="logo" />
        <Display text={state.display} />
        <div className="grid-3-1">
          <div className="grid-1-3">
            <div className="grid-4-3">
              <Key type={7} />
              <Key type={8} />
              <Key type={9} />
              <Key type={4} />
              <Key type={5} />
              <Key type={6} />
              <Key type={3} />
              <Key type={2} />
              <Key type={1} />
              <Key type={0} />
              <Key type="." />
              <Key type="=" />
            </div>

            <div className="grid-4-1">
              <Key type="+" />
              <Key type="-" />
              <Key type="*" />
              <Key type="/" />
            </div>

            <div className="grid-4-1">
              <Key type="+/-" />
              <Key type="M" />
              <Key type="M+" />
              <Key type="MR" disabled={state.mem === undefined} />
            </div>
          </div>
          <div className="grid-1-2-bottom">
            <Key type="CLEAR" />
            <Key type="MC" disabled={state.mem === undefined} />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default Calculator
