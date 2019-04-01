import React from "react";

import Form from "./Form.jsx";
import TextInput from "../TextInput";
import TextArea from "../TextArea";

import notes from "./README.md";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Components/Forms/Form", module);

stories.addDecorator(withKnobs);

stories.add(
  "Default",
  () => {
    return (
      <Form>
        <TextInput label="Name" />
        <TextInput type="email" label="Email address" />
        <TextInput type="password" label="Password" />
        <TextArea label="Message" />
      </Form>
    );
  },
  { notes: notes }
);
