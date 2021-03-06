import React from "react";
import * as PropTypes from "prop-types";

import shortid from "shortid";

import FormField from "../FormField";
import "./TextInput.scss";

const propTypes = {
  hint: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  type: PropTypes.string
};

const defaultProps = {
  type: "text"
};

class TextInput extends React.Component {
  componentWillMount() {
    this.inputID = shortid.generate();
    this.ariaID = shortid.generate();
  }

  render() {
    return (
      <FormField
        label={this.props.label}
        id={this.inputID}
        hint={this.props.hint}
        hintID={this.ariaID}
      >
        <input
          id={this.inputID}
          name={this.props.name}
          onBlur={this.props.onBlur}
          onChange={this.props.onChange}
          onFocus={this.props.onFocus}
          placeholder={this.props.placeholder}
          required={this.props.required}
          type={this.props.type}
          value={this.props.value}
          aria-describedby={this.ariaID}
        />
      </FormField>
    );
  }
}

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;

export default TextInput;
