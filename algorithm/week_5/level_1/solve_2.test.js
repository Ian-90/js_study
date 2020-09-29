import getSubString from './solve_2'

describe('getSubString', () => {
  it('입력값에서 잘라낸 새로운 문자열을 출력합니다', () => {
    expect(getSubString(`I Love You\n3 4`)).toBe('Love')
    expect(getSubString(`Goorm EDU\n3 5`)).toBe('orm E')
  })
})
