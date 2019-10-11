/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import '../main.css'
import Button from '../Button'

export default class Keypad extends Component {
  render() {
    const { onClick } = this.props

    return (
      <div className="keyContainer">
        <Button btnTxt="C" idName="clr" onClick={onClick} />
        <Button btnTxt="⁺∕₋" idName="inv" onClick={onClick} />
        <Button btnTxt="%" idName="mod" onClick={onClick} />
        <Button btnTxt="÷" idName="div" onClick={onClick} />

        <Button btnTxt="7" idName="7" onClick={onClick} />
        <Button btnTxt="8" idName="8" onClick={onClick} />
        <Button btnTxt="9" idName="9" onClick={onClick} />
        <Button btnTxt="x" idName="mul" onClick={onClick} />

        <Button btnTxt="4" idName="4" onClick={onClick} />
        <Button btnTxt="5" idName="5" onClick={onClick} />
        <Button btnTxt="6" idName="6" onClick={onClick} />
        <Button btnTxt="-" idName="min" onClick={onClick} />

        <Button btnTxt="1" idName="1" onClick={onClick} />
        <Button btnTxt="2" idName="2" onClick={onClick} />
        <Button btnTxt="3" idName="3" onClick={onClick} />
        <Button btnTxt="+" idName="sum" onClick={onClick} />

        <Button btnTxt="0" idName="0" gridStart="1" gridEnd="3" onClick={onClick} />
        <Button btnTxt="." idName="dot" onClick={onClick} />
        <Button btnTxt="=" idName="eq" onClick={onClick} />
      </div>
    )
  }
}
