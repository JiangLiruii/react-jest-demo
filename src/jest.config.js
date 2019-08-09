import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
module.exports={
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  'testRegex': '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  'moduleFileExtensions': ['ts', 'tsx', 'js'],
  'testResultsProcessor': '<rootDir>/node_modules/ts-jest/coverageprocessor.js'
}