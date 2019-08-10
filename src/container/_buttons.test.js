import React from 'react'
import {Buttons} from './_buttons'
import renderer from 'react-test-renderer'

test('buttons render',() => {
  const component = renderer.create(
    <Buttons />
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
  tree.props.onClick()
  tree = component.toJSON()
  console.log(tree)
  expect(tree).toMatchSnapshot()

})