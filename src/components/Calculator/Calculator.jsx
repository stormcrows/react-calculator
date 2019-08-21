import React, { useReducer } from "react";
import AppContext from "../../AppContext";
import { Display, Key } from "..";
import {
  combineReducers,
  memoryReducer,
  numbersReducer,
  operateReducer,
  operatorReducer,
  rootReducer
} from "../../reducers";
import "./Calculator.css";

const Calculator = () => {
  const [state, dispatch] = useReducer(
    combineReducers([
      numbersReducer,
      memoryReducer,
      operateReducer,
      operatorReducer,
      rootReducer
    ]),
    rootReducer()
  );

  return (
    <AppContext.Provider value={dispatch}>
      <div className="calculator shadow">
        <img alt="CloudFormer" src="cloudformer-logo.png" className="logo" />
        <Display text={state.display} />
        <div className="grid-3-1">
          <div className="grid-1-3">
            <div className="grid-4-3">
              <Key value={7} type="numbers" />
              <Key value={8} type="numbers" />
              <Key value={9} type="numbers" />
              <Key value={4} type="numbers" />
              <Key value={5} type="numbers" />
              <Key value={6} type="numbers" />
              <Key value={3} type="numbers" />
              <Key value={2} type="numbers" />
              <Key value={1} type="numbers" />
              <Key value={0} type="numbers" />
              <Key value="." type="operator" />
              <Key value="=" type="operate" />
            </div>

            <div className="grid-4-1">
              <Key value="+" type="operator" />
              <Key value="-" type="operator" />
              <Key value="*" type="operator" />
              <Key value="/" type="operator" />
            </div>

            <div className="grid-4-1">
              <Key value="+/-" type="operator" />
              <Key value="M" type="memory" />
              <Key value="M+" type="memory" />
              <Key
                value="MR"
                type="memory"
                disabled={state.mem === undefined}
              />
            </div>
          </div>
          <div className="grid-1-2-bottom">
            <Key value="CLEAR" type="clear" />
            <Key value="MC" type="memory" disabled={state.mem === undefined} />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default Calculator;
