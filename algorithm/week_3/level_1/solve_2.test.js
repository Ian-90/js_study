import getAICleanerTest, { strConvertArr, getTestCases, convertAbsoluteNumber, checkedDestination } from './solve_2'

describe('strConvertArr', () => {
  it('string을 구분자에 따라 배열로 변환 합니다.', () => {
    expect(strConvertArr('1 2 3', ' ')).toEqual(['1', '2', '3'])
  })
})

describe('getTestCases', () => {
  it('여러가지 테스트 케이스를 입력시, 배열로 변환합니다', () => {
    expect(getTestCases(['1 2 3', '4 5 6', '7 8 9'])).toEqual([['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']])
  })
})

describe('convertAbsoluteNumber', () => {
  it('문자열로된 숫자를 절대값의 숫자로 변환합니다', () => {
    expect(convertAbsoluteNumber('7')).toEqual(7)
    expect(convertAbsoluteNumber('-7')).toEqual(7)
  })
})

describe('checkedDestination', () => {
  it('테스트 케이스가 정답인지 아닌지 확인합니다', () => {
    expect(checkedDestination(['1', '2', '7'])).toEqual('YES')
    expect(checkedDestination(['1', '2', '8'])).toEqual('NO')
  })
})


describe('getAICleanerTest', () => {
  it('입력값의 모든 테스트케이스들의 결과를 구합니다', () => {
    const expected = `YES\nNO\nNO\nYES`
    expect(getAICleanerTest(`4\n-5 -2 7\n5 -5 2\n0 5 6\n1 2 7`)).toEqual(expected)
  })
})
