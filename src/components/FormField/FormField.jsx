import React from "react";
import * as PropTypes from "prop-types";

import "./FormField.scss";

const propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  hint: PropTypes.string,
  hintID: PropTypes.string
};

class FormField extends React.Component {
  render() {
    return (
      <div className="form-field">
        <label className="form-field__label" htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <div className="form-field__input">{this.props.children}</div>
        <p className="form-field__hint" id={this.props.hintID}>
          {this.props.hint}
        </p>
      </div>
    );
  }
}

FormField.propTypes = propTypes;

export default FormField;
