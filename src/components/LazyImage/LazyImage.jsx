import React from "react";
import * as PropTypes from "prop-types";

const propTypes = {};

class LazyImage extends React.Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();

    this.loadImage = this.loadImage.bind(this);
  }

  componentDidMount() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0
    };

    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver((change, observer) => {
        if (change[0].isIntersecting) {
          this.loadImage();
          this.observer.unobserve(change[0].target);
        }
      }, options);

      this.observer.observe(this.imageRef.current);
    } else {
      this.loadImage();
    }
  }

  loadImage() {
    this.imageRef.current.classList.add("fade-in");

    if (this.imageRef.current.dataset && this.imageRef.current.dataset.src) {
      this.imageRef.current.src = this.imageRef.current.dataset.src;
    }
  }

  render() {
    return (
      <img
        data-src={this.props.src}
        alt={this.props.alt}
        className={this.props.className}
        ref={this.imageRef}
      />
    );
  }
}

LazyImage.propTypes = propTypes;

export default LazyImage;
