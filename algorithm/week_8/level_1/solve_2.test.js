import oddEvenNumberCheck from './solve_2'

describe('oddEvenNumberCheck', () => {
  it('주어진 숫자가 홀수인지 짝수인지 출력합니다', () => {
    expect(oddEvenNumberCheck(10)).toBe('even')
    expect(oddEvenNumberCheck(-5)).toBe('odd')
  })
})
