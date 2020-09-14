import getSubStr, { isString, checkStrLength } from './solve'

const strTypePlaceholder = '문자열을 입력해주세요'
const strLengthPlaceholder = '문자열의 길이를 100이하로 입력해주세요'

describe('isString', () => {
  it('데이터타입이 string인지 확인합니다', () => {
    expect(isString('a')).toBeTruthy()
    expect(isString(1)).toBeFalsy()
    expect(isString(['a'])).toBeFalsy()
    expect(isString({ a: 'a' })).toBeFalsy()
    expect(isString(() => {})).toBeFalsy()
    expect(isString(null)).toBeFalsy()
    expect(isString(undefined)).toBeFalsy()
    expect(isString(NaN)).toBeFalsy()
  })
})

describe('checkStrLength', () => {
  it('문자열의 길이가 100이하인지 체크합니다', () => {
    expect(checkStrLength('aaa')).toBeTruthy()
    expect(checkStrLength('a'.repeat(102))).toBeFalsy()
  })
})


describe('getSubStr', () => {
  it('데이터타입이 string이 아니면, placeholder를 출력합니다', () => {
    expect(getSubStr(111)).toBe(strTypePlaceholder)
  })

  it('데이터의 길이가 100을 넘으면, placeholder를 출력합니다', () => {
    expect(getSubStr('g'.repeat(105))).toBe(strLengthPlaceholder)
  })

  it('부분문자열을 출력합니다', () => {
    const expectedFirst = `a\nab\nabc\nabcd\nabcde\nabcdef\nabcdefg`
    const expectedSecond = `A\nAB\nABC`
    expect(getSubStr('abcdefg')).toBe(expectedFirst)
    expect(getSubStr('ABC')).toBe(expectedSecond)
  })
})
