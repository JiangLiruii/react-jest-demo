
import * as app from './app'
import * as math from './math'

test('calls math.add', () => {
  const addMock = jest.spyOn(math, 'add')

  // 调用原方法
  expect(app.doAdd(1, 2)).toEqual(3)

  // spy 储存着 add 的调用信息
  expect(addMock).toHaveBeenCalledWith(1, 2)
})

// 等同于
test('calls math.add sugar', () => {
  // store the original implementation
  const originalAdd = math.add

  // mock add with the original implementation
  math.add = jest.fn(originalAdd)

  // spy the calls to add
  expect(app.doAdd(1, 2)).toEqual(3)
  expect(math.add).toHaveBeenCalledWith(1, 2)

  // override the implementation
  math.add.mockImplementation(() => 'mock')
  expect(app.doAdd(1, 2)).toEqual('mock')
  expect(math.add).toHaveBeenCalledWith(1, 2)

  // restore the original implementation
  math.add = originalAdd
  expect(app.doAdd(1, 2)).toEqual(3)
})