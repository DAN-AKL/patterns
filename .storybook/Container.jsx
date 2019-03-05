import React from 'react';
import '../src/sass/core.scss';

export default class Container extends React.Component {
  render() {
    const { story } = this.props;

    return (
      <React.Fragment>
        {story()}
      </React.Fragment>
    );
  }
}
