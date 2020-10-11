import getASCIICode from './solve_2'

describe('getASCIICode', () => {
  it('문자를 ASCII 코드로 변환합니다', () => {
    expect(getASCIICode('C')).toBe('67')
    expect(getASCIICode('M')).toBe('77')
    expect(getASCIICode(7)).toBe('55')
    expect(getASCIICode('<')).toBe('60')
    expect(getASCIICode('z')).toBe('122')
  })
})
