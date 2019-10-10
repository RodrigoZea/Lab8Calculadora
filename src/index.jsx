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
        if (result.length < 9) {
          this.setState({
            result: String(buttonNumber),
            waiting: false,
          })
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (result.length < 9) {
          this.setState({
            result: result === '0' ? String(buttonNumber) : result + buttonNumber,
          })
        }
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (button === '.') {
        if (!(/\./).test(result)) {
          this.setState({ result: `${result}.`, waiting: false })
        }
      } else if (button === 'C') {
        this.setState({
          value: null, result: '0', operator: null, waiting: false,
        })
      } else if (button === '⁺∕₋') {
        const inverseValue = parseFloat(result) * -1
        this.setState({ result: inverseValue })
      } else {
        this.handleOperation(button)
      }
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
        // Ver si division no es exacta
        if (!(newValue % 1 === 0)) {
          // Si no es, entonces ver cuantos digitos tiene antes del .
          let checker = String(newValue)
          checker = checker.indexOf('.')
          // Luego, calcular la cantidad de decimales que puede desplegar
          const decimalLimit = 8 - checker
          newValue = newValue.toFixed(decimalLimit)
        }
      } else if (operator === '=') {
        newValue = valueFloat
      } else if (operator === '%') {
        newValue = currValue % valueFloat
      }

      if (newValue < 0 || newValue > 999999999) {
        newValue = 'ERROR'
      }

      if (result.length < 9) {
        this.setState({ value: newValue, result: String(newValue) })
      }
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

// ReactDOM.render(<App />, document.querySelector('#root'))
