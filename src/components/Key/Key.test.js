import React from "react"
import { shallow } from "enzyme"
import * as AppContext from "../../AppContext"
import Key from "./Key"

it("Renders a button with provided type", () => {
  const dispatch = jest.fn()
  jest.spyOn(AppContext, "useAppContext").mockImplementation(() => dispatch)

  const key = shallow(<Key type={5} />)
  const btn = key.find("button")

  expect(btn.text()).toBe("5")
})

it("Dispatches a * type action upon clicking a Key", () => {
  const dispatch = jest.fn()
  jest.spyOn(AppContext, "useAppContext").mockImplementation(() => dispatch)

  const key = shallow(<Key type="*" />)
  const btn = key.find("button")
  btn.simulate("click")

  expect(dispatch).toHaveBeenCalledWith({ type: "*" })
})
