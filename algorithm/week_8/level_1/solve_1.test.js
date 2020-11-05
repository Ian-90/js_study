import removeBlank from './solve_1'

describe('removeBlank', () => {
  it('입력된 문자열에서 공백을 제거하여 출력합니다', () => {
    expect(removeBlank('I am Goorm !')).toBe('IamGoorm!')
    expect(removeBlank('This is Sparta')).toBe('ThisisSparta')
  })
})
