import React from "react";

import Toggle from "./Toggle.jsx";

import notes from "./README.md";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Components/Toggle", module);

stories.addDecorator(withKnobs);

stories.add(
  "Default",
  () => {
    return (
      <Toggle
        toggle_on_class="toggle--on"
        toggle_off_class="toggle--off"
        default_state={false}
      >
        Some content
      </Toggle>
    );
  },
  { notes: notes }
);
