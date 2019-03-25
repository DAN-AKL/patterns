import React from "react";
import renderer from "react-test-renderer";
import Button from "./Button.jsx";

import MockIcon from "./mock.svg";

it("renders a button using the default props", () => {
  const tree = renderer.create(<Button>I am a button</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});

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

it("renders a tertiary button", () => {
  const tree = renderer
    .create(
      <Button priority="tertiary" as="button">
        I am a button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a tertiary anchor", () => {
  const tree = renderer
    .create(
      <Button priority="tertiary" as="anchor">
        I am a button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a button with an icon before the text", () => {
  const tree = renderer
    .create(
      <Button icon={<MockIcon />} icon_placement="before">
        I am a button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a button with an icon after the text", () => {
  const tree = renderer
    .create(
      <Button icon={<MockIcon />} icon_placement="after">
        I am a button
      </Button>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a disabled button", () => {
  const tree = renderer
    .create(<Button disabled={true}>I am a button</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders a small button", () => {
  const tree = renderer
    .create(<Button small={true}>I am a button</Button>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
