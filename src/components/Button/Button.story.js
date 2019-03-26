import React from "react";

import Button from "./Button.jsx";
import notes from "./README.md";

import Arrow from "../../images/icons/arrows/arrow-right.svg";
import Chevron from "../../images/icons/arrows/chevron-right.svg";
import Menu from "../../images/icons/basic/menu.svg";

import { storiesOf } from "@storybook/react";

import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";
// import figmaDecorator from "storybook-addon-figma";

const stories = storiesOf("Components/Button", module);

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

const icons = {
  None: "",
  Arrow: "Arrow",
  Chevron: "Chevron",
  Menu: "Menu"
};

const icon_map = {
  None: "",
  Arrow: <Arrow />,
  Chevron: <Chevron />,
  Menu: <Menu />
};

const icon_placements = {
  Before: "before",
  After: "after"
};

stories.add(
  "Default",
  () => {
    return (
      <Button
        priority={select("Priority", priorities, "primary")}
        as={select("As", as, "button")}
        small={boolean("Small", false)}
        disabled={boolean("Disabled", false)}
        icon={icon_map[select("Icon", icons, "")]}
        icon_placement={select("Icon placement", icon_placements, "after")}
        onClick={action("Button click")}
      >
        {text("Button text", "I am a Button")}
      </Button>
    );
  },
  { notes: notes }
);
