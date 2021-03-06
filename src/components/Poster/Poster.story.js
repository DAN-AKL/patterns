import React from "react";

import Poster from "./Poster.jsx";

import Anaua from "../../images/storybook/anaua.jpg";

import notes from "./README.md";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Components/Poster", module);

stories.addDecorator(withKnobs);

stories.add(
  "Default",
  () => {
    return (
      <Poster
        title={text("Title", "Anaua Tuihalangingie")}
        blurb={text("Blurb", "Project Coordinator")}
        image={Anaua}
        url="/"
      />
    );
  },
  { notes: notes }
);
