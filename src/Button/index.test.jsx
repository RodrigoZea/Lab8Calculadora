/* eslint-disable  */
import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'

describe('Test button component', () => {
    // Returns pass
    test('Button text renders properly', () => {
        const btn = shallow(<Button btnTxt="testText" />)
        expect(btn.text().includes("testText")).toBe(true)
    })
})