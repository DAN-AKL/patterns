import React from "react";

import * as PropTypes from "prop-types";

const propTypes = {};

class TestComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    <h2>Test component</h2>;
  }
}

TestComponent.propTypes = propTypes;

export default TestComponent;
