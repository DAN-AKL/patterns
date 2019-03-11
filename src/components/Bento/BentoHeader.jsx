import React from "react";
import * as PropTypes from "prop-types";

const propTypes = {};

class BentoHeader extends React.Component {
  render() {
    return <header className="bento__header">{this.props.children}</header>;
  }
}

BentoHeader.propTypes = propTypes;

export default BentoHeader;
