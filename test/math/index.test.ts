import { math } from '../../src/index'
describe('safeAdd test', () => {
  test('add 0.1 + 1 to equal 1.1', () => {
    expect(math.safeAdd(0.1, 1)).toEqual(1.1)
  })
  // test('type error', () => {
  //   //@ts-ignore
  //   expect(math.safeAdd('12', true)).toEqual('all params must be number type')
  // })
  test('add 0.1 + 0.2 to equal 0.3', () => {
    expect(math.safeAdd(0.1, 0.2)).toEqual(0.3)
  })
})

describe('safeSubtract test', () => {
  test('subtract 0.3 - 0.1 to equal 0.1', () => {
    expect(math.safeSubtract(0.3, 0.1)).toEqual(0.2)
  })
})

describe('safeMultiply test', () => {
  test('multiply 0.1 * 0.2 to equal 0.02', () => {
    expect(math.safeMultiply(0.2, 0.1)).toEqual(0.02)
  })
})
describe('safeDivide test', () => {
  test('divide 0.1 / 0.2 to equal 0.5', () => {
    expect(math.safeDivide(0.1, 0.2)).toEqual(0.5)
  })
  test('divide 0.3 / 0.1 to equal 3', () => {
    expect(math.safeDivide(0.3, 0.1)).toEqual(3)
  })
  test('divide 1 / 0.1 to equal 10', () => {
    expect(math.safeDivide(1, 0.1)).toEqual(10)
  })
})
