import React from "react";
import { shallow } from "enzyme";
import * as AppContext from "../../AppContext";
import Key from "./Key";

it("Renders a button with provided value", () => {
  const dispatch = jest.fn();
  jest.spyOn(AppContext, "useAppContext").mockImplementation(() => dispatch);

  const key = shallow(<Key value="5" />);
  const btn = key.find("button");

  expect(btn.text()).toBe("5");
});

it("Dispatches an action of type key and value as payload", () => {
  const dispatch = jest.fn();
  jest.spyOn(AppContext, "useAppContext").mockImplementation(() => dispatch);

  const key = shallow(<Key value="*" type="operator" />);
  const btn = key.find("button");
  btn.simulate("click");

  expect(dispatch).toHaveBeenCalledWith({ type: "operator", payload: "*" });
});
