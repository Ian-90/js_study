import finacialCrisis, { getMax, getMin } from './solve'

describe('getMax', () => {
  it('배열에서 최댓값을 구합니다', () => {
    expect(getMax([1, 2, 3])).toBe(3)
    expect(getMax([1, 20, 100, 277, 3000])).toBe(3000)
  })
})


describe('getMin', () => {
  it('배열에서 최솟값을 구합니다', () => {
    expect(getMin([1, 2, 3])).toBe(1)
    expect(getMin([1, 20, 100, 277, 3000])).toBe(1)
  })
})

describe('finacialCrisis', () => {
  it('3명의 연봉 중에 연봉이 가장 높은 사람과 가장 낮은 사람을 제외한 남는사람의 연봉을 구합니다', () => {
    expect(finacialCrisis('5000 12000 8000')).toBe('8000')
    expect(finacialCrisis('2000 4000 3000')).toBe('3000')
  })
})
