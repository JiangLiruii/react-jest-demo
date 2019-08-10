
import * as app from './app'
import * as math from './math'

// 将所有的模块函数都设置为 jest.fn
jest.mock('./math.js')

test('calls math.add', () => {
  app.doAdd(1, 2)
  expect(math.add).toHaveBeenCalledWith(1, 2)
})

test('calls math.subtract', () => {
  app.doSubtract(1, 2)
  expect(math.subtract).toHaveBeenCalledWith(1, 2)
})
