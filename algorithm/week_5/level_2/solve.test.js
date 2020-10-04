import getDistanceCoordinatePlan, { getDistance, getSquare, convertNumberArr } from './solve'

describe('getDistance', () => {
  it('수직선 상 두 점의 거리를 구합니다', () => {
    expect(getDistance(3, 5)).toBe(2)
    expect(getDistance(-3, 5)).toBe(8)
  })
})

describe('getSquare', () => {
  it('숫자의 제곱한 값을 구합니다', () => {
    expect(getSquare(3)).toBe(9)
    expect(getSquare(5)).toBe(25)
  })
})

describe('convertNumberArr', () => {
  it('모양은 숫자이지만 자료타입이 string인 배열을 number 타입의 배열로 변경합니다', () => {
    expect(convertNumberArr(['1'])).toEqual([1])
    expect(convertNumberArr(['5', '6', '7'])).toEqual([5, 6, 7])
  })
})

describe('getDistanceCoordinatePlan', () => {
  it('두 점 사이의 거리를 구합니다', () => {
    expect(getDistanceCoordinatePlan('10 100\n100 10')).toEqual(127.28)
    expect(getDistanceCoordinatePlan('2 2\n5 5')).toEqual(4.24)
  })
})
