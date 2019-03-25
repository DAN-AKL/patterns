import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button.jsx";

it("renders a primary button", () => {
  const tree = renderer
    .create(
      <Button priority="primary" as="button">
        I am a button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a primary anchor", () => {
  const tree = renderer
    .create(
      <Button priority="primary" as="anchor">
        I am a button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a seconadry button", () => {
  const tree = renderer
    .create(
      <Button priority="secondary" as="button">
        I am a button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a seconadry anchor", () => {
  const tree = renderer
    .create(
      <Button priority="secondary" as="anchor">
        I am a button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
