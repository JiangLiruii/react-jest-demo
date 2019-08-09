import React from 'react'
import {Buttons} from './buttons'
import {shallow} from 'enzyme'
describe('buttons render',() => {
  const component = shallow(<Buttons />)
  test('init button', () => {
  
    expect(component.state().text).toEqual('hello world')
    component.simulate('click')
    expect(component.state().text).toEqual('hello you')
  })
  test('click button', () => {


  })

})