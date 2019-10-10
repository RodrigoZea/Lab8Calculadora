/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './main.css'
import Keypad from './Keypad'
import ResultBox from './ResultBox'
import {
  sum, sub, mul, div,
} from './operations'

export default class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)

    this.state = {
      result: '0',
      operator: null,
      value: null,
      waiting: false,
    }
  }

  handleClick(button) {
    const { result, waiting } = this.state

    const buttonNumber = parseInt(button, 10)

    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(buttonNumber)) {
      if (waiting) {
        if (result.length < 10) {
          this.setState({
            result: String(buttonNumber),
            waiting: false,
          })
        }
      } else {
        this.setState({
          result: result === '0' ? String(buttonNumber) : result + buttonNumber,
        })
      }
    } else {
      this.handleOperation(button)
    }
  }

  handleOperation(nxtOperator) {
    const { result, operator, value } = this.state
    const valueFloat = parseFloat(result)

    if (value == null) {
      this.setState({ value: valueFloat })
    } else if (operator) {
      const currValue = value || 0
      let newValue = 0

      if (operator === '+') {
        newValue = sum(currValue, valueFloat)
      } else if (operator === '-') {
        newValue = sub(currValue, valueFloat)
      } else if (operator === 'x') {
        newValue = mul(currValue, valueFloat)
      } else if (operator === '÷') {
        newValue = div(currValue, valueFloat)
      }

      this.setState({ value: newValue, result: String(newValue) })
    }

    this.setState({ waiting: true, operator: nxtOperator })
  }

  render() {
    const { result } = this.state

    return (
      <div>
        <ResultBox resultText={result} />
        <Keypad onClick={this.handleClick} />
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('#root'))
