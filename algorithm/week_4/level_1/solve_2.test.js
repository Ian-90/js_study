import pyramid, { range, odd, printRepeatStr, numberRangeCheck } from './solve_2'

describe('range', () => {
  it('1 ~ n까지 자연수 배열을 출력합니다', () => {
    expect(range(1)).toEqual([1])
    expect(range(3)).toEqual([1, 2, 3])
    expect(range(5)).toEqual([1, 2, 3, 4, 5])
  })
})

describe('odd', () => {
  it('n번쨰 홀수를 출력합니다', () => {
    expect(odd(1)).toBe(1)
    expect(odd(3)).toBe(5)
    expect(odd(10)).toBe(19)
  })
})

describe('printRepeatStr', () => {
  it('입력한 개수만큼 문자열을 출력합니다', () => {
    expect(printRepeatStr(1, ' ')).toBe(' ')
    expect(printRepeatStr(5, '*')).toBe('*****')
  })
})

describe('numberRangeCheck', () => {
  it('0과 50사이에 자연수인지 확인합니다', () => {
    expect(numberRangeCheck(1)).toBeTruthy()
    expect(numberRangeCheck(50)).toBeTruthy()
    expect(numberRangeCheck(52)).toBeFalsy()
    expect(numberRangeCheck(0)).toBeFalsy()
    expect(numberRangeCheck(-1)).toBeFalsy()
    expect(numberRangeCheck(0.1)).toBeFalsy()
  })
})

describe('pyramid', () => {
  it('0과 50사이에 자연수를 입력하지 않으면 placeholder를 출력합니다', () => {
    expect(pyramid(0)).toEqual('0과 50사이에 자연수를 입력해주세요')
    expect(pyramid(-1)).toEqual('0과 50사이에 자연수를 입력해주세요')
    expect(pyramid(0.1)).toEqual('0과 50사이에 자연수를 입력해주세요')
  })

  it('입력한 층에 해당하는 피라미드를 출력합니다', () => {
    const expected = `    *\n   ***\n  *****\n *******\n*********`
    expect(pyramid(5)).toEqual(expected)
  })
})
