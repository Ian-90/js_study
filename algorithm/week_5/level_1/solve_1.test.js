import getMinimum from './solve_1'

describe('getMinimum', () => {
  it('배열 내의 정수 중 최소값을 구합니다', () => {
    expect(getMinimum(`3\n1 3 5`)).toBe(1)
    expect(getMinimum(`10\n-1 -2 -3 -4 -5 1 2 3 4 5`)).toBe(-5)
  })
})
