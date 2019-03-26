import React from "react";

import { storiesOf } from "@storybook/react";

import notes from "./README.md";

const stories = storiesOf("Design | Type", module);

stories.add(
  "Default",
  () => {
    return <h1>Heading Level One</h1>;
  },
  { notes: notes }
);
