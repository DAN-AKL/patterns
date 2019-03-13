import React from "react";
import * as PropTypes from "prop-types";

import LazyImage from "../LazyImage";

import "./Poster.scss";

const propTypes = {
  blurb: PropTypes.string,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

class Poster extends React.Component {
  render() {
    return (
      <div className="poster">
        <a className="poster__link" href={this.props.url}>
          <div className="poster__image">
            <figure>
              <LazyImage src={this.props.image} />
            </figure>
          </div>
          <h2 className="poster__title">{this.props.title}</h2>

          {this.props.blurb && (
            <p className="poster__blurb">{this.props.blurb}</p>
          )}
        </a>
      </div>
    );
  }
}

Poster.propTypes = propTypes;

export default Poster;
