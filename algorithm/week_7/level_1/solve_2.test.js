import getExamAverageAndGrade, { checkGrade, average } from './solve_2'

describe('checkGrade', () => {
  it('점수에 따라 등급을 출력합니다', () => {
    expect(checkGrade(92)).toBe('A')
    expect(checkGrade(82)).toBe('B')
    expect(checkGrade(72)).toBe('C')
    expect(checkGrade(62)).toBe('D')
    expect(checkGrade(22)).toBe('F')
  })
})

describe('average', () => {
  it('배열의 평균 점수를 구합니다.', () => {
    expect(average([100, 100, 100])).toBe('100.00')
    expect(average([90, 90])).toBe('90.00')
    expect(average([80])).toBe('80.00')
  })
})

describe('getExamAverageAndGrade', () => {
  it('시험성적 평균과 등급을 구합니다.', () => {
    expect(getExamAverageAndGrade('100 100 98')).toBe('99.33 A')
    expect(getExamAverageAndGrade('100 100 100')).toBe('100.00 A')
  })
})
