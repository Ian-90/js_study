import getMaxValueAndOrder from './solve'

describe('getMaxValueAndOrder', () => {
  it('서로 다른 자연수들중 최댓값을 구하고, 몇번째 수인지 구합니다.', () => {
    expect(getMaxValueAndOrder(`7\n49 62 18 37 75 33 85`)).toBe(`85 7`)
    expect(getMaxValueAndOrder(`9\n3 29 38 12 57 74 40 99 61`)).toBe(`99 8`)
  })
})
