import printStar, { reverseRange, isNumber, numberRangeCheck } from './solve_1'

const reverseRangePlaceholder = '0보다 큰 정수를 입력해주세요'
const printStarPlaceholder = '1과 100사이의 자연수를 입력해주세요'

describe('reverseRange', () => {
  it('0보다 작은 정수를 입력하면, placeholder값이 출력됩니다', () => {
    expect(reverseRange(0)).toEqual(reverseRangePlaceholder)
    expect(reverseRange(-5)).toEqual(reverseRangePlaceholder)
  })

  it('0보다 큰 정수를 입력하면, 입력값부터 1까지 배열이 생성됩니다', () => {
    expect(reverseRange(2)).toEqual([2, 1])
    expect(reverseRange(5)).toEqual([5, 4, 3, 2, 1])
  })
})

describe('isNumber', () => {
  it('데이터가 숫자인지 확인합니다', () => {
    expect(isNumber('number')).toBeFalsy()
    expect(isNumber(null)).toBeFalsy()
    expect(isNumber(undefined)).toBeFalsy()
    expect(isNumber({ a: 1 })).toBeFalsy()
    expect(isNumber([1, 2])).toBeFalsy()
    expect(isNumber(NaN)).toBeFalsy()
    expect(isNumber(0.1)).toBeTruthy()
    expect(isNumber(-5)).toBeTruthy()
    expect(isNumber(1)).toBeTruthy()
  })
})

describe('numberRangeCheck', () => {
  it('0과 100사이의 자연수인지 확인합니다', () => {
    expect(numberRangeCheck(0)).toBeFalsy()
    expect(numberRangeCheck(-5)).toBeFalsy()
    expect(numberRangeCheck(0.5)).toBeFalsy()
    expect(numberRangeCheck(21)).toBeTruthy()
  })
})

describe('printStar', () => {
  it('1과 100사이의 자연수를 입력하지 않으면, placeholder를 출력합니다', () => {
    expect(printStar(-10)).toEqual(printStarPlaceholder)
    expect(printStar(0)).toEqual(printStarPlaceholder)
    expect(printStar(0.9)).toEqual(printStarPlaceholder)
  })


  it('1과 100사이의 자연수를 입력하면, 입력에 맞는 층의 *로 이루어진 삼각형을 출력합니다', () => {
    const expectedPrintFiveStart = `*****\n****\n***\n**\n*`
    const expectedPrintSevenStart = `*******\n******\n${expectedPrintFiveStart}`
    expect(printStar(5)).toEqual(expectedPrintFiveStart)
    expect(printStar(7)).toEqual(expectedPrintSevenStart)
  })
})
