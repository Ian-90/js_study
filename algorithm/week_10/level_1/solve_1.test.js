import convertHexaDecimal from './solve_1'

describe('convertHexaDecimal', () => {
  it('10진수를 16진수로 변환합니다', () => {
    expect(convertHexaDecimal(100)).toBe(64)
    expect(convertHexaDecimal(1000)).toBe(3e8)
  })
})
