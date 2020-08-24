import getShift, { shiftInputCheck, getLeftShift, getRightShift } from './solve_2'

const placeholder = 'number number형태로 입력값을 입력해주세요'

describe('shiftInputCheck', () => {
  it('number number 모양의 입력값을 체크한다', () => {
    expect(shiftInputCheck(55)).toBeFalsy()
    expect(shiftInputCheck(undefined)).toBeFalsy()
    expect(shiftInputCheck(NaN)).toBeFalsy()
    expect(shiftInputCheck(null)).toBeFalsy()
    expect(shiftInputCheck('a 77')).toBeFalsy()
    expect(shiftInputCheck('1 2')).toBeTruthy()
    expect(shiftInputCheck('29 3')).toBeTruthy()
    expect(shiftInputCheck('15 77')).toBeTruthy()
  })
})

describe('getLeftShift', () => {
  it('javascript left shift 연산을 해야합니다', () => {
    expect(getLeftShift(5, 3)).toEqual(5 << 3)
    expect(getLeftShift(1, 5)).toEqual(1 << 5)
  })
})

describe('getRightShift', () => {
  it('javascript left shift 연산을 해야합니다', () => {
    expect(getRightShift(5, 3)).toEqual(5 >> 3)
    expect(getRightShift(1, 5)).toEqual(1 >> 5)
    expect(getRightShift(-5, 2)).toEqual(-5 >> 2)
  })
})

describe('getShift', () => {
  it('number number 모양의 입력값을 입력하지 않으면, placeholder값이 출력됩니다', () => {
    expect(getShift('5 a')).toEqual(placeholder)
  })

  it('올바른 입력값을 넣으면, 첫줄에 >> 계산값, 두번째줄에 << 계산값을 출력합니다', () => {
    expect(getShift('5 3')).toEqual(`${5 >> 3}\n${5 << 3}`)
    expect(getShift('1 5')).toEqual(`${1 >> 5}\n${1 << 5}`)
  })
})