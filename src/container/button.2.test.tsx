import React from 'react'
import {Buttons} from './buttons'
import {shallow} from 'enzyme'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
describe('buttons render',() => {
  const onHandleClick = jest.fn()
  onHandleClick.mockResolvedValue(true)
  const component = shallow<Buttons>(<Buttons onHandleClick={onHandleClick}/>)
  test('init button', () => {
    expect(component.state().text).toEqual('hello world')
  })
  test('click button', () => {
    component.simulate('click')
    expect(onHandleClick).toHaveBeenCalled()
  })
  test('after click', () => {
    expect(component.state().text).toEqual('hello you')
  })
})