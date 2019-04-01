import React from "react";

import FormField from "./FormField.jsx";

import notes from "./README.md";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Components/Forms/FormField", module);

stories.addDecorator(withKnobs);

stories.add(
  "Default",
  () => {
    return <FormField />;
  },
  { notes: notes }
);
