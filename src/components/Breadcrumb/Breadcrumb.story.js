import React from "react";

import notes from "./README.md";

import Breadcrumb from "./Breadcrumb.jsx";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";

const stories = storiesOf("Components/Breadcrumb", module);

stories.addDecorator(withKnobs);

const items = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Section",
    href: "/"
  },
  {
    label: "Page"
  }
];

stories.add(
  "Default",
  () => {
    return <Breadcrumb items={items} />;
  },
  { notes: notes }
);
