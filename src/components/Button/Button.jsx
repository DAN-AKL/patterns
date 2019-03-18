import React from "react";
import * as PropTypes from "prop-types";

import "./Button.scss";

const propTypes = {
  as: PropTypes.oneOf(["button", "anchor"]),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  icon: PropTypes.object,
  icon_placement: PropTypes.oneOf(["before", "after"]),
  onChange: PropTypes.func,
  priority: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
  small: PropTypes.bool
};

const defaultProps = {
  as: "button",
  disabled: false,
  icon_placement: "after",
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
        {this.props.icon_placement === "before" && this.props.icon}

        <span className="btn__text">{this.props.children}</span>

        {this.props.icon_placement === "after" && this.props.icon}
      </button>
    );

    const anchor = (
      <a href={this.props.href} {...commonProps}>
        <span className="btn__text">{this.props.children}</span>[
        {this.props.icon}]
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
