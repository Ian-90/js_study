import verticalOrderRectangle, { lengthCheck, getNthRow, range } from './solve_1'

const placeholder = '길이가 20이하의 자연수를 입력해주세요'

describe('lengthCheck', () => {
  it('길이가 20이하의 자연수인지 확인 합니다.', () => {
    expect(lengthCheck(4)).toBeTruthy()
    expect(lengthCheck(20)).toBeTruthy()
    expect(lengthCheck(-5)).toBeFalsy()
    expect(lengthCheck(0)).toBeFalsy()
    expect(lengthCheck(25)).toBeFalsy()
  })
})

describe('getNthRow', () => {
  it('n x n 정사각행렬에서 n번째 행에서 길이가 n인 일정한 수가 차이나는 수열을 구합니다', () => {
    expect(getNthRow(1, 4)).toEqual([1, 5, 9, 13])
    expect(getNthRow(1, 7)).toEqual([1, 8, 15, 22, 29, 36, 43])
    expect(getNthRow(3, 5)).toEqual([3, 8, 13, 18, 23])
  })
})

describe('range', () => {
  it('1 ~ 입력값까지 1씩차이나는 배열을 생성합니다', () => {
    expect(range(4)).toEqual([1, 2, 3, 4])
    expect(range(7)).toEqual([1, 2, 3, 4, 5, 6, 7])
  })
})

describe('verticalOrderRectangle', () => {
  it('길이가 20이하인 자연수를 입력하지 않으면, placeholder를 출력합니다', () => {
    expect(verticalOrderRectangle(30)).toEqual(placeholder)
  })

  it('순서가 세로인 2차원 정사각형 배열을 생성합니다.', () => {
    const expectedLengthFour = [
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [4, 8, 12, 16]
    ]
    const expectedLengthTen = [
      [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
      [2, 12, 22, 32, 42, 52, 62, 72, 82, 92],
      [3, 13, 23, 33, 43, 53, 63, 73, 83, 93],
      [4, 14, 24, 34, 44, 54, 64, 74, 84, 94],
      [5, 15, 25, 35, 45, 55, 65, 75, 85, 95],
      [6, 16, 26, 36, 46, 56, 66, 76, 86, 96],
      [7, 17, 27, 37, 47, 57, 67, 77, 87, 97],
      [8, 18, 28, 38, 48, 58, 68, 78, 88, 98],
      [9, 19, 29, 39, 49, 59, 69, 79, 89, 99],
      [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    ]
    expect(verticalOrderRectangle(4)).toEqual(expectedLengthFour)
    expect(verticalOrderRectangle(10)).toEqual(expectedLengthTen)
  })
})
