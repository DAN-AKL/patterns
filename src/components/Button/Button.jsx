import React from "react";

import * as PropTypes from "prop-types";

import "./Button.scss";

import Arrow from "../../images/icons/arrows/arrow-right.svg";
import Chevron from "../../images/icons/arrows/chevron-right.svg";

const propTypes = {
  as: PropTypes.oneOf(["button", "anchor"]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.oneOf(["arrow", "chevron"]),
  onChange: PropTypes.func,
  priority: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  small: PropTypes.bool
};

const defaultProps = {
  as: "button",
  disabled: false,
  icon: "chevron",
  priority: "primary"
};

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let commonProps = {
      onClick: this.props.onClick,
      disabled: this.props.disabled,
      className: `btn btn--${this.props.priority} ${
        this.props.small ? "btn--small" : ""
      }`
    };

    const button = (
      <button {...commonProps}>
        <span className="btn__text">{this.props.children}</span>
        <Chevron />
      </button>
    );

    const anchor = (
      <a href={this.props.href} {...commonProps}>
        <span className="btn__text">{this.props.children}</span>
        <Chevron />
      </a>
    );

    switch (this.props.as) {
      case "anchor":
        return anchor;
        break;

      case "button":
        return button;
        break;

      default:
        return button;
    }
  }
}

Button.propTypes = propTypes;

export default Button;
