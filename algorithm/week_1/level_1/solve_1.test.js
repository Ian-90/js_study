import getThreeAndFiveMultipleSum, { range, getMultipleCount, getRangeSum, getMultipleSum } from './solve_1'

const rangePlaceholder = '0보다 큰 정수를 입력해주세요'
const getThreeAndFiveMultipleSumPlaceholder = '1000이하의 자연수를 입력해주세요'

describe('range', () => {
  it('1보다 작은 정수를 입력하면, placeholder값이 출력됩니다', () => {
    expect(range(0)).toEqual(rangePlaceholder)
    expect(range(-5)).toEqual(rangePlaceholder)
  })

  it('0보다 큰 정수를 입력하면, 1부터 입력값까지 배열이 생성됩니다', () => {
    expect(range(2)).toEqual([1, 2])
    expect(range(5)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('getMultipleCount', () => {
  it('입력값과 배수값을 입력하면, 입력값의 배수의 개수를 구합니다', () => {
    expect(getMultipleCount(3, 3)).toEqual(1)
    expect(getMultipleCount(10, 3)).toEqual(3)
    expect(getMultipleCount(10, 5)).toEqual(2)
    expect(getMultipleCount(103, 5)).toEqual(20)
  })
})

describe('getRangeSum', () => {
  it('각 배열의 합을 구합니다', () => {
    expect(getRangeSum([1, 2, 3])).toEqual(6)
    expect(getRangeSum([5, -2, -7])).toEqual(-4)
  })
})

describe('getMultipleSum', () => {
  it('배수들의 합을 구합니다', () => {
    expect(getMultipleSum(3, 2)).toEqual(9)
    expect(getMultipleSum(5, 2)).toEqual(15)
  })
})

describe('getThreeAndFiveMultipleSum', () => {
  it ('0이하의 정수나 1000보다 큰 정수를 입력하면, placeholder값이 출력됩니다', () => {
    expect(getThreeAndFiveMultipleSum(-5)).toEqual(getThreeAndFiveMultipleSumPlaceholder)
    expect(getThreeAndFiveMultipleSum(1001)).toEqual(getThreeAndFiveMultipleSumPlaceholder)
  }) 
  it('3의 배수와 5의 배수의 합을 구합니다', () => {
    expect(getThreeAndFiveMultipleSum(1000)).toEqual(234168)
    expect(getThreeAndFiveMultipleSum(50)).toEqual(593)
  })
})
