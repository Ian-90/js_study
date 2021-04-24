import getQuotientAndRemainder, { getQuotient, getReminder } from './solve_2'

describe('getQuotient', () => {
  it('몫을 구합니다', () => {
    expect(getQuotient(10, 2)).toBe(5)
    expect(getQuotient(5, 2)).toBe(2)
  })
})

describe('getReminder', () => {
  it('나머지를 구합니다', () => {
    expect(getReminder(10, 2)).toBe(0)
    expect(getReminder(5, 2)).toBe(1)
  })
})

describe('getQuotientAndRemainder', () => {
  it('몫가 나머지를 출력합니다', () => {
    expect(getQuotientAndRemainder('10 2')).toBe('5 0')
    expect(getQuotientAndRemainder('10 4')).toBe('2 2')
    expect(getQuotientAndRemainder('5 2')).toBe('2 1')
  })
})
