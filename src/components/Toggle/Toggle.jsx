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
    if (!this.props.value) {
      this.setState({
        toggle: !this.state.toggle
      });
    }

    this.props.onToggle();
  }

  render() {
    return (
      <div className="toggle">
        <button className="toggle__trigger" onClick={this.triggerToggle}>
          Menu
        </button>
        <div
          className={
            this.props.value
              ? this.props.toggle_on_class
              : this.props.toggle_off_class
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Toggle.propTypes = propTypes;

export default Toggle;
