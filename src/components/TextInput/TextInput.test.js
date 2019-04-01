import React from "react";
import renderer from "react-test-renderer";
import TextInput from "./TextInput.jsx";

it("renders using the default props", () => {
  const tree = renderer.create(<TextInput />).toJSON();
  expect(tree).toMatchSnapshot();
});


