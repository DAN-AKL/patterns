import React from "react";

import Bento from "./Bento.jsx";
import BentoItem from "./BentoItem.jsx";
import BentoHeader from "./BentoHeader.jsx";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";

import { action } from "@storybook/addon-actions";

const stories = storiesOf("Bento", module);

stories.addDecorator(withKnobs);

const themes = {
  Light: "light",
  Dark: "dark",
  Bright: "bright",
  Grey: "grey"
};

const layouts = {
  "Two up": "twoup",
  "Three up": "threeup",
  "Four up": "fourup",
  "Two thirds left": "two-thirds-left",
  "Two thirds right": "two-thirds-right",
  "Gallery full bleed": "gallery-full-bleed",
  "Gallery overlay": "gallery-overlay"
};

const spacings = {
  Standard: "standard",
  Comfortable: "comfortable",
  Compact: "compact"
};

stories.add("Default", () => {
  var theme = select("Theme", themes, "light");
  var layout = select("Layout", layouts, "twoup");
  var spacing = select("Spacing", spacings, "standard");
  var withHeader = boolean("Show header", false);

  return (
    <Bento theme={theme} layout={layout} spacing={spacing}>
      {withHeader && (
        <BentoHeader>
          <h2>Header</h2>
        </BentoHeader>
      )}

      <BentoItem>
        <p>
          Through research we uncover and design the products and services you
          can invest in with confidence and shape a strategy for you to deliver
          those services.
        </p>
      </BentoItem>

      <BentoItem>
        <p>
          Through research we uncover and design the products and services you
          can invest in with confidence and shape a strategy for you to deliver
          those services.
        </p>
      </BentoItem>

      {(layout === "threeup" || layout === "fourup") && (
        <BentoItem>
          <p>
            Through research we uncover and design the products and services you
            can invest in with confidence and shape a strategy for you to
            deliver those services.
          </p>
        </BentoItem>
      )}

      {layout === "fourup" && (
        <BentoItem>
          <p>
            Through research we uncover and design the products and services you
            can invest in with confidence and shape a strategy for you to
            deliver those services.
          </p>
        </BentoItem>
      )}
    </Bento>
  );
});
