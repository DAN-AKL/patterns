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

  common_props() {
    return {
      onClick: this.props.onClick,
      disabled: this.props.disabled,
      className: `
        btn
        btn--${this.props.priority}
        ${this.props.className ? this.props.className : ""}
        ${this.props.small ? "btn--small" : ""}
      `
    };
  }

  common_markup() {
    return (
      <>
        {this.props.icon_placement === "before" && this.props.icon}
        <span className="btn__text">{this.props.children}</span>
        {this.props.icon_placement === "after" && this.props.icon}
      </>
    );
  }

  button_markup() {
    return <button {...this.common_props()}>{this.common_markup()}</button>;
  }

  anchor_markup() {
    return (
      <a href={this.props.href} {...this.common_props()}>
        {this.common_markup()}
      </a>
    );
  }

  render() {
    switch (this.props.as) {
      case "anchor":
        return this.anchor_markup();
        break;

      case "button":
        return this.button_markup();
        break;

      default:
        return this.button_markup();
    }
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
