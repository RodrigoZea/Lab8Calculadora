/* eslint-disable  */
import {
    sum, sub, mul, div,
} from './index'

describe('Calculator operations', () => {
    test('Should add two numbers', () => {
        const number1 = 2
        const number2 = 3

        expect(sum(number1, number2)).toEqual(5)
    })

    test('Should subtract two numbers', () => {
        const number1 = 6
        const number2 = 3

        expect(sub(number1, number2)).toEqual(3)
    })

    test('Should multiply two numbers', () => {
        const number1 = 2
        const number2 = 3

        expect(mul(number1, number2)).toEqual(6)
    })

    test('Should divide two numbers', () => {
        const number1 = 10
        const number2 = 5

        expect(div(number1, number2)).toEqual(2)
    })
})