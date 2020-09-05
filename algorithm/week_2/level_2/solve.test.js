import getThreeNumberHideAndSeek, { getNumberCombination, uniqStrSet, sum, getRightAnswerFilter } from './solve'

describe('getNumberCombination', () => {
  it('입력한 배열의 3가지 조합을 구합니다', () => {
    expect(getNumberCombination([1, 2, 3])).toEqual(['1 2 3'])
    expect(getNumberCombination([1, 2, 3, 4])).toEqual(['1 2 3', '1 2 4', '1 3 4', '2 3 4'])
    expect(getNumberCombination([3, 2, 1, 2])).toEqual(['3 2 1', '3 2 2', '3 1 2', '2 1 2'])
  })
})

describe('uniqStrSet', () => {
  it('모두 string값을 가지는 배열에서 중복을 제거합니다', () => {
    expect(uniqStrSet(['1', '2', '3', '2', '2', '1', '3'])).toEqual(['1', '2', '3'])
  })
})

describe('sum', () => {
  it('string 데이터에서 length가 5이고, 공백으로 구분된 숫자값의 합을 구합니다', () => {
    expect(sum('1 2 3')).toEqual(6)
  })
})

describe('getRightAnswerFilter', () => {
  it('배열에서 answer과 같은 값을 filtering 합니다', () => {
    expect(getRightAnswerFilter(['1 2 3', '1 2 3', '2 3 7', '5 5 7'], 6)).toEqual(['1 2 3', '1 2 3'])
  })
})


describe('getThreeNumberHideAndSeek', () => {
  it('3개의 숫자 조합과 술래가 외친 숫자가 일치하면 정답을 구합니다', () => {
    expect(getThreeNumberHideAndSeek('1 2 3 4 5\n8')).toEqual('1 2 5\n1 3 4')
    expect(getThreeNumberHideAndSeek('1 2 3 4 5\n3')).toEqual('NO')
    expect(getThreeNumberHideAndSeek('5 5 1 2 2 3 3 4\n8')).toEqual('1 2 5\n1 3 4\n2 2 4\n2 3 3')
  })
})
