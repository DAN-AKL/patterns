import React from "react";
import renderer from "react-test-renderer";
import TextArea from "./TextArea.jsx";

it("renders using the default props", () => {
  const tree = renderer.create(<TextArea />).toJSON();
  expect(tree).toMatchSnapshot();
});


