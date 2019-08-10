import React from 'react'
import {Buttons} from './buttons'
import {shallow} from 'enzyme'
import 'core-js/stable'
import 'regenerator-runtime/runtime'
describe('buttons render',() => {
  const onHandleClick = jest.fn(() => new Promise<boolean>((resolve) => setTimeout(() => resolve(true), 1000)))
  const component = shallow<Buttons>(<Buttons onHandleClick={onHandleClick}/>)
  test('init button', () => {
    expect(component.state().text).toEqual('hello world')
  })
  test('click button', async () => {
    component.simulate('click')
    expect(onHandleClick).toHaveBeenCalled()
    await expect(onHandleClick()).resolves.toBe(true)
  })
  test('after click', () => {
    expect(component.state().text).toEqual('hello you')
  })
})