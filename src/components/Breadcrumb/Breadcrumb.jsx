import React from "react";
import * as PropTypes from "prop-types";

import "./Breadcrumb.scss";

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ).isRequired
};

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="breadcrumb">
        <ol className="breadcrumb__list">
          {this.props.items.map(item => {
            return (
              <li className="breadcrumb__item">
                {item.href && (
                  <a href={item.href} className="breadcrumb__link">
                    {item.label}
                  </a>
                )}

                {!item.href && <>{item.label}</>}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

Breadcrumb.propTypes = propTypes;

export default Breadcrumb;
