import {A} from './A'

/**
 *  @returns {string} 返回姓名
 */
export function index () {
  const a = new A()
  return a.concatName('lorry', 'jiang')
}