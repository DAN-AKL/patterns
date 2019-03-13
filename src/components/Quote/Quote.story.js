import React from "react";

import Quote from "./Quote.jsx";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Quote", module);

stories.addDecorator(withKnobs);

stories.add("Default", () => {
  return (
    <Quote
      text="DAN was awesome during our project, I thoroughly enjoyed working with them. Everyone should use them."
      name="Sarah Lastname "
      role="Auckland Company Ltd"
    />
  );
});
