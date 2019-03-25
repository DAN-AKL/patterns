import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button.jsx";

it("renders correctly", () => {
  const tree = renderer
    .create(
      <Button priority="primary" as="button">
        I am a button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
