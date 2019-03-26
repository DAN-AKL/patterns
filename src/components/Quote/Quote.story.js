import React from "react";

import Quote from "./Quote.jsx";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import notes from "./README.md";

const stories = storiesOf("Components/Quote", module);

stories.addDecorator(withKnobs);

stories.add(
  "Default",
  () => {
    return (
      <Quote
        text={text(
          "Text",
          "DAN was awesome during our project, I thoroughly enjoyed working with them. Everyone should use them."
        )}
        name={text("Name", "Sarah Lastname")}
        role={text("Role", "Auckland Company Ltd")}
      />
    );
  },
  { notes: notes }
);
