import React from "react";

import { storiesOf } from "@storybook/react";

import notes from "./README.md";

const stories = storiesOf("Guidelines | Type", module);

stories.add(
  "All",
  () => {
    return (
      <>
        <h1>Heading Level One</h1>
        <h2>Heading Level Two</h2>
        <h3>Heading Level Three</h3>
        <h4>Heading Level Four</h4>
        <h5>Heading Level Five</h5>
        <h6>Heading Level Six</h6>

        <p>
          We are always looking for talented individuals to join our diverse
          team of digital specialists. Here are four great reasons to love
          working at Digital Arts Network.
        </p>
      </>
    );
  },
  { notes: notes }
);
