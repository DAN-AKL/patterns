import React from "react";
import * as PropTypes from "prop-types";

import Button from "../Button";

const propTypes = {};

class Toggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: this.props.default_state
    };

    this.triggerToggle = this.triggerToggle.bind(this);
  }

  triggerToggle(e) {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <>
        <button onClick={this.triggerToggle}>Toggle</button>
        <div
          className={
            this.state.toggle
              ? this.props.toggle_on_class
              : this.props.toggle_off_class
          }
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

Toggle.propTypes = propTypes;

export default Toggle;
