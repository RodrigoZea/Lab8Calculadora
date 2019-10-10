/* eslint-disable  */
import React from 'react'
import { shallow } from 'enzyme'
import ResultBox from './index'

describe('Test ResultBox component', () => {
    // Returns pass
    test('ResultBox text renders properly', () => {
        const rbx = shallow(<ResultBox resultText="testText" />)
        expect(rbx.text().includes("testText")).toBe(true)
    })
    // Returns pass
    test('ResultBox text cant render negative numbers', () => {
        const rbx = shallow(<ResultBox resultText="-3" />)
        expect(rbx.text().includes("ERROR")).toBe(true)
    })
    // Returns pass
    test('ResultBox max result is 999999999', () => {
        const rbx = shallow(<ResultBox resultText="1000000000" />)
        expect(rbx.text().includes("ERROR")).toBe(true)
    })
})