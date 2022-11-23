import { isNumber } from '../is'
/**
 * 针对浮点数相加场景需要先转为整数在进行运算，避免精度陷阱
 */
export const safeAdd = (a: number, b: number) => {
  //判断类型
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('all params must be number type')
  }
  //精度
  const precision_a = a.toString().split('.')[1]?.length || 0
  const precision_b = a.toString().split('.')[1]?.length || 0
  //最大小数位数
  let precision_max = Math.max(precision_a, precision_a)
  return (
    (a * Math.pow(10, precision_a) + b * Math.pow(10, precision_b)) /
    Math.pow(10, precision_max)
  )
}
export const safeSubtract = (a: number, b: number) => {
  //判断类型
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('all params must be number type')
  }
  //精度
  const precision_a = a.toString().split('.')[1]?.length || 0
  const precision_b = a.toString().split('.')[1]?.length || 0
  //最大小数位数
  let precision_max = Math.max(precision_a, precision_a)
  return (
    (a * Math.pow(10, precision_a) - b * Math.pow(10, precision_b)) /
    Math.pow(10, precision_max)
  )
}

export const safeMultiply = (a: number, b: number) => {
  //判断类型
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('all params must be number type')
  }
  //精度
  const precision_a = a.toString().split('.')[1]?.length || 0
  const precision_b = a.toString().split('.')[1]?.length || 0
  //总小数位数
  let precision_count = precision_a + precision_b
  return (
    (a * Math.pow(10, precision_a) * (b * Math.pow(10, precision_b))) /
    Math.pow(10, precision_count)
  )
}

export const safeDivide = (a: number, b: number) => {
  //判断类型
  if (!isNumber(a) || !isNumber(b)) {
    throw new Error('all params must be number type')
  }
  //精度
  const precision_a = a.toString().split('.')[1]?.length || 0
  const precision_b = a.toString().split('.')[1]?.length || 0
  //总小数位数
  return (a * Math.pow(10, precision_a)) / (b * Math.pow(10, precision_b))
}
