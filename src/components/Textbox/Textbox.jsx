import React from 'react'

import * as PropTypes from 'prop-types'

const propTypes = {

}

class Textbox extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input type="text" />
    )
  }
}

Textbox.propTypes = propTypes

export default Textbox
