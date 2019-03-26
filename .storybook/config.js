import React from "react";

import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withA11y } from "@storybook/addon-a11y";
import Container from "./Container";

addParameters({
  options: {
    panelPosition: "right"
  }
});

addDecorator(withA11y);
addDecorator(story => <Container story={story} />);

// automatically import all files ending in *.story.js
const req = require.context("../src", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
