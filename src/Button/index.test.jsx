/* eslint-disable  */
import React from 'react'
import { shallow } from 'enzyme'
import Button from './index'
import jest from 'jest-mock'

describe('Test button component', () => {
    // Returns pass
    test('Button text renders properly', () => {
        const btn = shallow(<Button btnTxt="testText" />)
        expect(btn.text().includes("testText")).toBe(true)
    })
    test('Button calls onClick()', () => {
        const agent = jest.fn()
        const btn = shallow(<Button onClick={agent} idName="7" btnTxt="7" />)
        btn.find('#button-7').simulate('click')
        expect(agent).toHaveBeenCalledWith("7")
    })
})