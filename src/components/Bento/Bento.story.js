import React from "react";

import Bento from "./Bento.jsx";
import BentoItem from "./BentoItem.jsx";
import BentoHeader from "./BentoHeader.jsx";

import notes from "./README.md";

import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from "@storybook/addon-knobs";

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
  "Gallery single": "gallery-single",
  "Gallery full bleed": "gallery-full-bleed",
  "Gallery overlay": "gallery-overlay"
};

const spacings = {
  Standard: "standard",
  Comfortable: "comfortable",
  Compact: "compact"
};

stories.add(
  "Default",
  () => {
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

        {(layout === "twoup" ||
          layout === "threeup" ||
          layout === "fourup" ||
          layout === "two-thirds-left" ||
          layout === "two-thirds-right") && (
          <BentoItem>
            <p>
              Through research we uncover and design the products and services
              you can invest in with confidence and shape a strategy for you to
              deliver those services.
            </p>
          </BentoItem>
        )}

        {(layout === "two-thirds-left" ||
          layout === "two-thirds-right" ||
          layout === "gallery-single" ||
          layout === "gallery-full-bleed" ||
          layout === "gallery-overlay") && (
          <BentoItem>
            <img src="https://placeimg.com/1280/600/any" width="100%" />
          </BentoItem>
        )}

        {layout === "gallery-overlay" && (
          <BentoItem>
            <img src="https://placeimg.com/1280/600/any" width="100%" />
          </BentoItem>
        )}

        {(layout === "twoup" ||
          layout === "threeup" ||
          layout === "fourup") && (
          <BentoItem>
            <p>
              Through research we uncover and design the products and services
              you can invest in with confidence and shape a strategy for you to
              deliver those services.
            </p>
          </BentoItem>
        )}

        {(layout === "threeup" || layout === "fourup") && (
          <BentoItem>
            <p>
              Through research we uncover and design the products and services
              you can invest in with confidence and shape a strategy for you to
              deliver those services.
            </p>
          </BentoItem>
        )}

        {layout === "fourup" && (
          <BentoItem>
            <p>
              Through research we uncover and design the products and services
              you can invest in with confidence and shape a strategy for you to
              deliver those services.
            </p>
          </BentoItem>
        )}
      </Bento>
    );
  },
  { notes: notes }
);
