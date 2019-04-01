import React from "react";
import renderer from "react-test-renderer";
import FormField from "./FormField.jsx";

it("renders using the default props", () => {
  const tree = renderer.create(<FormField />).toJSON();
  expect(tree).toMatchSnapshot();
});


