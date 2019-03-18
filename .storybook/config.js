import React from "react";

import { configure, addDecorator, addParameters } from "@storybook/react";
import Container from "./Container";

addParameters({
  options: {
    panelPosition: "right"
  }
});

addDecorator(story => <Container story={story} />);

// automatically import all files ending in *.stories.js
const req = require.context("../src/components", true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
