/* eslint-disable  */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Keypad from './Keypad'
import ResultBox from './ResultBox'
import Button from './Button'
import App from './index'

describe('Test app functionality', () => {
    // In progress
    test('get button then see if it renders its text', () => {
        // Render app
        const wrapper = shallow(<App />)

        const kpad = wrapper.childAt(1).dive()
        const btn = kpad.childAt(4).dive()

        btn.simulate('click')
        const rbox = shallow(<ResultBox resultText={btn.text()}/>)

        expect(rbox.text().includes("7")).toBe(true)
    })
    test('Clicks a random number and gets added to the display box', () => {
        const wrapper = shallow(<App />)
        wrapper.instance().handleClick("7")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text().includes("7")).toBe(true)
    })
    test('ResultBox doesnt exceed 9 digits', () => {
        const wrapper = shallow(<App />)
        wrapper.setState({ result: '999999999' })
        wrapper.instance().handleClick("9")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text()).toEqual('999999999')
    })
    test('Result cant be negative', () => {
        const wrapper = shallow(<App />)
        wrapper.instance().handleClick("2")
        wrapper.instance().handleClick("-")
        wrapper.instance().handleClick("3")
        wrapper.instance().handleClick("=")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text()).toEqual('ERROR')
    })
    test('Result cant exceed 999,999,999', () => {
        const wrapper = shallow(<App />)
        wrapper.instance().handleClick("99999")
        wrapper.instance().handleClick("x")
        wrapper.instance().handleClick("99999")
        wrapper.instance().handleClick("=")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text()).toEqual('ERROR')
    })
    test('Adds decimal correctly', () => {
        const wrapper = shallow(<App />)
        wrapper.instance().handleClick("9")
        wrapper.instance().handleClick(".")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text()).toEqual('9.')
    })
    test ('Clear button works properly', () => {
        const wrapper = shallow(<App />)
        wrapper.instance().handleClick("3")
        wrapper.instance().handleClick("C")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text()).toEqual('0')
    })
    test ('Operation (sum) works', () => {
        const wrapper = shallow(<App />)
        wrapper.instance().handleClick("3")
        wrapper.instance().handleClick("+")
        wrapper.instance().handleClick("3")
        wrapper.instance().handleClick("=")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text()).toEqual('6')
    })
    test('Operation (mul) works', () => {
        const wrapper = shallow(<App />)
        wrapper.instance().handleClick("3")
        wrapper.instance().handleClick("x")
        wrapper.instance().handleClick("3")
        wrapper.instance().handleClick("=")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text()).toEqual('9')
    })
    test('Operation (sub) works', () => {
        const wrapper = shallow(<App />)
        wrapper.instance().handleClick("7")
        wrapper.instance().handleClick("-")
        wrapper.instance().handleClick("3")
        wrapper.instance().handleClick("=")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text()).toEqual('4')
    })
})