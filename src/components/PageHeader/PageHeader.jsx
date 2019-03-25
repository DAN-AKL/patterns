import React from "react";
import * as PropTypes from "prop-types";
import Breadcrumb from "../Breadcrumb/Breadcrumb.jsx";

import "./PageHeader.scss";

const propTypes = {};

class PageHeader extends React.Component {
  render() {
    return (
      <header className={`page-header page-header--${this.props.theme}`}>
        <div className="page-header__container">
          {this.props.breadcrumb_items && (
            <Breadcrumb items={this.props.breadcrumb_items} />
          )}
          <h1 className="page-header__title">{this.props.title}</h1>
        </div>
      </header>
    );
  }
}

PageHeader.propTypes = propTypes;

export default PageHeader;
