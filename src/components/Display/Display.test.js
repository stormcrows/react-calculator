import React from "react"
import { shallow } from "enzyme"
import Display from "./Display"

it("Renders a div with provided text", () => {
  const key = shallow(<Display text="123456" />)
  const div = key.find("div")

  expect(div.text()).toBe("123456")
})
