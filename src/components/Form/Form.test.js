import React from "react";
import renderer from "react-test-renderer";
import Form from "./Form.jsx";

it("renders using the default props", () => {
  const tree = renderer.create(<Form />).toJSON();
  expect(tree).toMatchSnapshot();
});


