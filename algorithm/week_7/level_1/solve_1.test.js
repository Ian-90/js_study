import getMin from './solve_1'

it('서로 다른 두 정수를 비교하여 더 작은 값을 출력합니다.', () => {
  expect(getMin('10 20')).toBe(10)
  expect(getMin('-5 -30')).toBe(-30)
})
