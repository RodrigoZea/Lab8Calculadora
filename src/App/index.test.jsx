/* eslint-disable  */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Keypad from '../Keypad'
import ResultBox from '../ResultBox'
import Button from '../Button'
import App from './index'

describe('Test app functionality', () => {
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
        const wrapper = mount(<App />)

        const btn7 = wrapper.find('#button-7')
        btn7.simulate('click')

        const btnsum = wrapper.find('#button-sum')
        btnsum.simulate('click')

        const btn4 = wrapper.find('#button-4')
        btn4.simulate('click')

        const btneq = wrapper.find('#button-eq')
        btneq.simulate('click')

        const rbox = wrapper.find('#results')
        expect(rbox.text()).toEqual('11')
    })
    test('Operation (mul) works', () => {
        const wrapper = mount(<App />)

        const btn7 = wrapper.find('#button-7')
        btn7.simulate('click')

        const btnmul = wrapper.find('#button-mul')
        btnmul.simulate('click')

        const btn4 = wrapper.find('#button-4')
        btn4.simulate('click')

        const btneq = wrapper.find('#button-eq')
        btneq.simulate('click')

        const rbox = wrapper.find('#results')
        expect(rbox.text()).toEqual('28')
    })
    test('Operation (sub) works', () => {
        const wrapper = mount(<App />)

        const btn7 = wrapper.find('#button-7')   
        btn7.simulate('click')

        const btnsub = wrapper.find('#button-min')
        btnsub.simulate('click')

        const btn4 = wrapper.find('#button-4')
        btn4.simulate('click')

        const btneq = wrapper.find('#button-eq')
        btneq.simulate('click')
        
        const rbox = wrapper.find('#results')
        expect(rbox.text()).toEqual('3')
    })
    test('Button calls onClick()', () => {
        const wrapper = mount(<App />)
        const btn = wrapper.find('#button-7')
        btn.simulate('click')
        const rbox = wrapper.find('#results')
        expect(rbox.text()).toEqual('7')
    })
})