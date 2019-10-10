/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import '../main.css'

export default class ResultBox extends Component {
  render() {
    const { resultText } = this.props

    return (
      <div className="results">
        { resultText }
      </div>
    )
  }
}
