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
    test('ResultBox text can render negative numbers', () => {
        const rbx = shallow(<ResultBox resultText="-3" />)
        expect(rbx.text().includes("-3")).toBe(true)
    })
})