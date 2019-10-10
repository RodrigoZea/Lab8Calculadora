/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import '../main.css'

export default class ResultBox extends Component {
  render() {
    let { resultText } = this.props

    if (resultText < 0 || resultText > 999999999) {
      resultText = 'ERROR'
    }

    return (
      <div className="results">
        { resultText }
      </div>
    )
  }
}
