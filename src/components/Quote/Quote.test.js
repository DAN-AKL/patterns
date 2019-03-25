import React from "react";
import renderer from "react-test-renderer";
import Quote from "./Quote.jsx";

it("renders a quote component", () => {
  const tree = renderer
    .create(
      <Quote
        text="DAN was awesome during our project, I thoroughly enjoyed working with them. Everyone should use them."
        name="Sarah Lastname"
        role="Auckland Company Ltd"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
