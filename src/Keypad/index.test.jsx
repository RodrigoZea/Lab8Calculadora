/* eslint-disable  */
import React from 'react'
import {shallow} from 'enzyme'
import Keypad from './index'
import Button from '../Button'

describe('Test keypad component', () => {
    test('Renders all <Button /> components correctly', () => {
        const wrapper = shallow(<Keypad />)
        expect(wrapper.find(Button)).toHaveLength(19)
    })
})