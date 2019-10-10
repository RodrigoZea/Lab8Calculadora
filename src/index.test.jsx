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
    test('handle click directly from app', () => {
        const wrapper = shallow(<App />)
        wrapper.instance().handleClick("7")
        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text().includes("7")).toBe(true)
    })
    test('mix of both solutions', () => {
        const wrapper = shallow(<App />)

        const kpad = wrapper.childAt(1).dive()
        const btn = kpad.childAt(4).dive()

        btn.instance().handleClick("7")

        const rbox = wrapper.childAt(0).dive()
        expect(rbox.text().includes("7")).toBe(true)

    })
    test('ResultBox doesnt exceed 9 digits', () => {
        const wrapper = shallow(<App />)
        wrapper.setState({ result: '999999999' })
        wrapper.instance().handleClick("9")
        const rbox = wrapper.childAt(0).dive()
        // expect(rbox.text().includes('999999999')).toBe(true)
        expect(rbox.text()).toEqual('999999999');
    }) 
})