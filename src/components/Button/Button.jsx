import React from 'react'

import * as PropTypes from 'prop-types'

import './Button.scss'

// import Arrow from '../../images/icons/arrows/arrow-right.svg'

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  kind: PropTypes.oneOf(['button', 'anchor']),
  onChange: PropTypes.func,
  priority: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  small: PropTypes.bool,
}

const defaultProps = {
  kind: 'button',
  priority: 'primary',
}

class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let commonProps = {
      onChange: this.props.onChange,
      className: `btn btn--${this.props.priority} ${
        this.props.small ? 'btn--small' : ''
      }`,
    }

    const button = (
      <button {...commonProps}>
        <span className="btn__text">{this.props.children}</span>
        {/* <Arrow /> */}
      </button>
    )

    const anchor = (
      <a href={this.props.href} {...commonProps}>
        <span className="btn__text">{this.props.children}</span>
        {/* <Arrow /> */}
      </a>
    )

    // const link = (
    //   <Link to={this.props.href} {...commonProps}>
    //     <span className="btn__text">{this.props.children}</span>
    //     {/* <Arrow /> */}
    //   </Link>
    // )

    switch (this.props.kind) {
      case 'anchor':
        return anchor
        break

      case 'button':
        return button
        break

      // case 'link':
      //   return link
      //   break

      default:
        return button
    }
  }
}

Button.propTypes = propTypes

export default Button
