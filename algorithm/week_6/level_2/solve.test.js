import getMinimunDistance, { getDistance, getDistanceBetweenPoint } from './solve'

describe('getDistance', () => {
  it('수직선 상 두 점의 거리를 구합니다', () => {
    expect(getDistance(3, 5)).toBe(2)
    expect(getDistance(-3, 5)).toBe(8)
  })
})

describe('getDistanceBetweenPoint', () => {
  it('주어진 점들의 집합에서 양 옆 두점 사이의 거리를 구합니다', () => {
    expect(getDistanceBetweenPoint([1, 2])).toEqual([1])
    expect(getDistanceBetweenPoint([1, 9, 29, 59, 60])).toEqual([8, 20, 30, 1])
    expect(getDistanceBetweenPoint([2, 5, 7, 30, 47])).toEqual([3, 2, 23, 17])
  })
})

describe('getMinimunDistance', () => {
  it('주어진 점들의 집합에서 최단 거리를 구합니다', () => {
    expect(getMinimunDistance('5\n1 9 29 59 60')).toEqual(1)
    expect(getMinimunDistance('10\n20 90 130 450 923 1020 2943 3920 9431 11309')).toEqual(40)
  })
})
