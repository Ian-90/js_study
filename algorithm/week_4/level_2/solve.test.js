import getNarcissisticNumber, { convertNumberType, convertCube, arraySum, getCubeSum, checkNarcissisticNumber } from './solve'

describe('convertNumberType ', () => {
  it('데이터 타입이 문자이지만, 모양은 숫자인 배열을 데이터타입이 숫자인 배열로 변경합니다 ', () => {
    expect(convertNumberType(['1', '2'])).toEqual([1, 2])
  })
})

describe('convertCube ', () => {
  it('데이터 타입이 숫자인 배열의 모든 값을 세제곱한 형태로 변경합니다', () => {
    expect(convertCube([1, 2, 3])).toEqual([1, 8, 27])
  })
})

describe('arraySum ', () => {
  it('데이터 타입이 숫자인 배열의 모든 값의 합을 구합니다', () => {
    expect(arraySum([1, 2, 3])).toEqual(6)
  })
})

describe('getCubeSum ', () => {
  it('각 자리수의 세제곱의 합을 구합니다', () => {
    expect(getCubeSum('12')).toEqual(9)
    expect(getCubeSum('125')).toEqual(134)
  })
})

describe('checkNarcissisticNumber ', () => {
  it('입력값이 암스트롱 수가 맞는지 판별합니다', () => {
    expect(checkNarcissisticNumber(0)).toBeTruthy()
    expect(checkNarcissisticNumber(1)).toBeTruthy()
    expect(checkNarcissisticNumber(55)).toBeFalsy()
  })
})

describe('getNarcissisticNumber ', () => {
  it('범위를 입력하면 범위 내의 암스트롱 수를 출력합니다', () => {
    expect(getNarcissisticNumber('100 500')).toEqual('153 370 371 407')
    expect(getNarcissisticNumber('100 300')).toEqual('153')
  })
})
