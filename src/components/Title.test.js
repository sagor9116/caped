import React from "react"
import { render } from "@testing-library/react"
import Title from "./Title"

test("Displays the correct title", () => {
  const { getByTestId } = render(<Title />)
  expect(getByTestId("hero-title")).toHaveTextContent(
    "Github Actions configuration is quite tough"
  )
})
