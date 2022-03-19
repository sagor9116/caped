import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import Navigation from "./Navigation"

afterEach(cleanup)

it("should have a logo named CAPED as siteTitle", () => {
  const name = "CAPED"
  const { getByTestId } = render(<Navigation siteTitle={name} />)
  expect(screen.getByTestId("logo")).toHaveTextContent("CAPED")
})
