import React from "react";

import PageHeader from "./PageHeader.jsx";

import notes from "./README.md";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";

const stories = storiesOf("Page Header", module);

stories.addDecorator(withKnobs);

const themes = {
  Bright: "bright",
  Dark: "dark",
  Grey: "grey",
  Light: "light"
};

const breadcrumb_items = [
  {
    label: "Work",
    href: "/"
  },
  {
    label: "ANZ Banker Workbench"
  }
];

stories.add(
  "Default",
  () => {
    return (
      <PageHeader
        theme={select("Theme", themes, "bright")}
        breadcrumb_items={breadcrumb_items}
        title="Not just new tools – it’s a whole new way of working"
      />
    );
  },
  { notes: notes }
);
