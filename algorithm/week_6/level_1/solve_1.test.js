import checkLeapYear, { isMultipleOfFour, isMultipleOfOneHundred, isMultipleOfFourHundred } from './solve_1'

describe('isMultipleOfFour', () => {
  it('4의 배수인지 확인합니다', () => {
    expect(isMultipleOfFour(5)).toBeFalsy()
    expect(isMultipleOfFour(6)).toBeFalsy()
    expect(isMultipleOfFour(12)).toBeTruthy()
  })
})

describe('isMultipleOfOneHundred', () => {
  it('100의 배수인지 확인합니다', () => {
    expect(isMultipleOfOneHundred(150)).toBeFalsy()
    expect(isMultipleOfOneHundred(233)).toBeFalsy()
    expect(isMultipleOfOneHundred(300)).toBeTruthy()
  })
})

describe('isMultipleOfFour', () => {
  it('400의 배수인지 확인합니다', () => {
    expect(isMultipleOfFourHundred(500)).toBeFalsy()
    expect(isMultipleOfFourHundred(777)).toBeFalsy()
    expect(isMultipleOfFourHundred(800)).toBeTruthy()
  })
})

describe('checkLeapYear', () => {
  it('윤년인지 평년인지 확인합니다', () => {
    expect(checkLeapYear(2000)).toBe('Leap Year')
    expect(checkLeapYear(2016)).toBe('Leap Year')
    expect(checkLeapYear(2400)).toBe('Leap Year')
    expect(checkLeapYear(2018)).toBe('Not Leap Year')
    expect(checkLeapYear(2100)).toBe('Not Leap Year')
  })
})