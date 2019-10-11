/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import '../main.css'

export default class Button extends Component {
  render() {
    const {
      btnTxt, gridStart, gridEnd, onClick, idName,
    } = this.props

    const divStyle = {
      gridColumnStart: gridStart,
      gridColumnEnd: gridEnd,
    }

    const buttonStyle = {
      width: '100%',
    }

    return (
      <div style={divStyle}>
        <button type="submit" id={`button-${idName}`} style={buttonStyle} onClick={() => onClick(btnTxt)}>
          {btnTxt}
        </button>
      </div>
    )
  }
}
