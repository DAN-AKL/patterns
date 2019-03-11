import React from "react";
import * as PropTypes from "prop-types";

const propTypes = {};

class BentoItem extends React.Component {
  render() {
    return <div className="bento__item">{this.props.children}</div>;
  }
}

BentoItem.propTypes = propTypes;

export default BentoItem;
