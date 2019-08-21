import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Calculator from "./Calculator";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Calculator />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should update display on key click simulation", () => {
  const calculator = mount(<Calculator />);

  const key2 = calculator.find(`.key-2`);
  const key5 = calculator.find(`.key-5`);
  const keyMul = calculator.find(`.key-${code("*")}`);
  const keyEq = calculator.find(`.key-${code("=")}`);
  const keyC = calculator.find(`.key-CLEAR`);
  const display = calculator.find(".display");

  key2.simulate("click");
  expect(display.text()).toBe("2");

  keyMul.simulate("click");
  expect(display.text()).toBe("2");

  key5.simulate("click");
  expect(display.text()).toBe("5");

  keyEq.simulate("click");
  expect(display.text()).toBe("10");

  keyC.simulate("click");
  expect(display.text()).toBe("0");
});

function code(c) {
  return c.charCodeAt(0);
}
