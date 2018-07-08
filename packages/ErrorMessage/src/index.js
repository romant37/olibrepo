import React, { Component } from 'react'
import ErrorIcon from './images/icon-error-message.svg'

import styles from './styles.scss'

class ErrorMessage extends Component {
  static defaultProps = {
    title: 'Something went wrong',
    text: 'Please contact support',
  }

  render() {
    const { title, text, width = 300, height = 300 } = this.props
    return (
      <span className={styles.root}>
        <div className={styles.inner}>
          <div className={styles.icon}>
            <ErrorIcon width={width} height={height} />
          </div>
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{text}</div>
        </div>
      </span>
    )
  }
}

export default ErrorMessage
