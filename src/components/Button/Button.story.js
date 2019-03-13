import React from "react";

import Button from "./Button.jsx";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

const priorities = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary"
};

const as = {
  Button: "button",
  Anchor: "anchor"
};

stories.add("Default", () => {
  return (
    <>
      <Button
        priority={select("Priority", priorities, "primary")}
        as={select("As", as, "button")}
        small={boolean("Small", false)}
        disabled={boolean("Disabled", false)}
        onClick={action("Button click")}
      >
        I am a Button
      </Button>
    </>
  );
});
