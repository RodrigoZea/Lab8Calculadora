/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import '../main.css'
import Button from '../Button'

export default class Keypad extends Component {
  render() {
    const { onClick } = this.props

    return (
      <div className="keyContainer">
        <Button btnTxt="C" onClick={onClick} />
        <Button btnTxt="⁺∕₋" onClick={onClick} />
        <Button btnTxt="%" onClick={onClick} />
        <Button btnTxt="÷" onClick={onClick} />

        <Button btnTxt="7" onClick={onClick} />
        <Button btnTxt="8" onClick={onClick} />
        <Button btnTxt="9" onClick={onClick} />
        <Button btnTxt="x" onClick={onClick} />

        <Button btnTxt="4" onClick={onClick} />
        <Button btnTxt="5" onClick={onClick} />
        <Button btnTxt="6" onClick={onClick} />
        <Button btnTxt="-" onClick={onClick} />

        <Button btnTxt="1" onClick={onClick} />
        <Button btnTxt="2" onClick={onClick} />
        <Button btnTxt="3" onClick={onClick} />
        <Button btnTxt="+" onClick={onClick} />

        <Button btnTxt="0" gridStart="1" gridEnd="3" onClick={onClick} />
        <Button btnTxt="." onClick={onClick} />
        <Button btnTxt="=" onClick={onClick} />
      </div>
    )
  }
}
