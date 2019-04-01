import React from "react";

import TextInput from "./TextInput.jsx";

import notes from "./README.md";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Components/Forms/TextInput", module);

stories.addDecorator(withKnobs);

stories.add(
  "Default",
  () => {
    return (
      <TextInput
        label="Name"
        placeholder="e.g. 12345"
        onChange={action("Input changed")}
        onFocus={action("Input focus")}
        onBlur={action("Input blur")}
        required
        hint="A short sentence about the field that helps the user understand a bit more about what they should enter."
      />
    );
  },
  { notes: notes }
);
