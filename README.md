# 概述
## 为什么会有这个项目?

集合 `jest`, `enzyme`,  `react`, `typescript`, `jsdoc`的一套整体框架 demo, 分别可实现

- ts 强类型语言
- jest 测试框架
- enzyme 模拟 DOM 操作, 渲染 react 组件
- react 响应式 UI 框架
- jsdoc 自动化文档

参考官方文档:

- [jest](https://jestjs.io/)
- [enzyme](https://airbnb.io/enzyme/)
- [react](https://reactjs.org/)
- [typescript](https://www.typescriptlang.org/)
- [jsdoc](https://jsdoc.app/)

## 如何工作

- `yarn` 安装依赖
- `yarn jest` 进行测试 如果需要查看覆盖率的话请在该命令后添加 `--coverage`
- `yarn jsdoc` 生成文档
- `yarn build` 打包项目, 地址为`src/dist/index.html`

## jest 的 mock

### 为什么要 mock

**为了代替不受控制的部分**, 比如异步请求, 模块耦合部分等

### mock的功能

1. 拦截捕获原函数调用
2. 重写设置返回值
3. 改变实现方式

### mock 的具体实现

简易版:

```js
test("returns undefined by default", () => {
  // 创建 mock 函数
  const mock = jest.fn();
  // 获取 mock 的返回值
  let result = mock("foo");
  // 检测返回值是否为 undefined
  expect(result).toBeUndefined();
  // 检测 mock 函数是否被调用
  expect(mock).toHaveBeenCalled();
  // 检测 mock 函数被调用的次数
  expect(mock).toHaveBeenCalledTimes(1);
  // 检测 mock 函数被调用时的参数
  expect(mock).toHaveBeenCalledWith("foo");
});
```

升级版

```js
test("mock implementation", () => {
  const mock = jest.fn(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("also mock implementation", () => {
  const mock = jest.fn().mockImplementation(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock implementation one time", () => {
  const mock = jest.fn().mockImplementationOnce(() => "bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");

  expect(mock("baz")).toBe(undefined);
  expect(mock).toHaveBeenCalledWith("baz");
});

test("mock return value", () => {
  const mock = jest.fn();
  mock.mockReturnValue("bar");

  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});

test("mock promise resolution", () => {
  const mock = jest.fn();
  mock.mockResolvedValue("bar");

  expect(mock("foo")).resolves.toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");
});
```

依赖注入

1. 通过直接将依赖通过参数进行注入(需要在写代码的时候进行配合):

```js
const doAdd = (a, b, callback) => {
  // a+b 即为 callback 的依赖
  callback(a + b);
};

test("calls callback with arguments added", () => {
  const mockCallback = jest.fn();
  doAdd(1, 2, mockCallback);
  expect(mockCallback).toHaveBeenCalledWith(3);
});
```

2. 模拟 module 和 Function

  1. `jest.fn`: 模拟函数
  2. `jest.mock`: 模拟模块, 会将该模块的所有函数都模拟成 `jest.fn`, 可以理解为批量模拟. 唯一的缺点是缺少对mock 的原函数实施细节.
  3. `jest.spyOn`: spy或模拟函数, 与 `jest.fn` 类似, 但是可以保留原函数, 并且监视函数的调用情况, 可以通过 `jest.fn` 来实现这个语法糖

具体实现细节可参见本项目[文件夹]('./src/mock')