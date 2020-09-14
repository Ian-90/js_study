import getTournament from './solve_1'

describe('getTournament', () => {
  it('getTournament 함수는 리그를 가리는 총 경기수를 구합니다.', () => {
    expect(getTournament(4)).toBe(6)
    expect(getTournament(10)).toBe(45)
  })
})
