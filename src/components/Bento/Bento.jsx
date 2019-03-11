import React from "react";
import * as PropTypes from "prop-types";

import "./Bento.scss";

const propTypes = {
  theme: PropTypes.oneOf(["dark", "light", "bright", "grey"]),
  layout: PropTypes.oneOf([
    "twoup",
    "threeup",
    "fourup",
    "two-thirds-left",
    "two-thirds-right",
    "gallery-full-bleed",
    "gallery-overlay"
  ]),
  spacing: PropTypes.oneOf(["comfortable", "compact", "standard"])
};

const defaultProps = {
  theme: "light",
  spacing: "standard"
};

class Bento extends React.Component {
  render() {
    const children = [].concat(this.props.children);

    let header = children.filter(item => {
      if (item.type) {
        return item.type.displayName === "BentoHeader";
      } else {
        return false;
      }
    });

    let items = children.filter(item => {
      if (item.type) {
        return item.type.displayName !== "BentoHeader";
      } else {
        return true;
      }
    });

    return (
      <section
        className={`
          bento
          bento--${this.props.theme}
          bento--${this.props.spacing}
        `}
      >
        <div className={`bento__container`}>
          {header}

          <div
            className={`
            bento__grid
            bento__layout--${this.props.layout}
          `}
          >
            {items}
          </div>
        </div>
      </section>
    );
  }
}

Bento.propTypes = propTypes;
Bento.defaultProps = defaultProps;

export default Bento;
