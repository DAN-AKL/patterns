import React from "react";
import * as PropTypes from "prop-types";

import "./Form.scss";

const propTypes = {};

class Form extends React.Component {
  render() {
    return <form>{this.props.children}</form>;
  }
}

Form.propTypes = propTypes;

export default Form;
