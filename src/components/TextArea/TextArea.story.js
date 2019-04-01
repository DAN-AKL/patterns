import React from "react";

import TextArea from "./TextArea.jsx";

import notes from "./README.md";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Components/TextArea", module);

stories.addDecorator(withKnobs);

stories.add(
  "Default",
  () => {
    return (
      <TextArea/>
    );
  },
  { notes: notes }
);



