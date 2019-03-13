import React from "react";
import * as PropTypes from "prop-types";

import "./Quote.scss";

const propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  role: PropTypes.string
};

class Quote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <blockquote className="quote">
        <p className="quote__text">{this.props.text}</p>
        <cite className="quote__citation">
          <span className="quote__name">{this.props.name}</span>
          <span className="quote__role">{this.props.role}</span>
        </cite>
      </blockquote>
    );
  }
}

Quote.propTypes = propTypes;

export default Quote;
