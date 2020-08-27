import getWordCount from './solve_2'

const getWordCountPlaceholder = '문자열을 입력해주세요'

describe('getWordCount', () => {
  it('문자열을 입력하지 않으면, placeholder값이 출력됩니다', () => {
    expect(getWordCount(0)).toEqual(getWordCountPlaceholder)
    expect(getWordCount(['a'])).toEqual(getWordCountPlaceholder)
    expect(getWordCount({ a: 'word' })).toEqual(getWordCountPlaceholder)
    expect(getWordCount(undefined)).toEqual(getWordCountPlaceholder)
    expect(getWordCount(null)).toEqual(getWordCountPlaceholder)
  })

  it('문자열 한 줄을 입력하면, 주어진 문자열에 존재하는 영단어의 개수를 출력한다', () => {
    expect(getWordCount('Goorm  Edu')).toBe(2)
    expect(getWordCount(' goo r m e du')).toBe(5)
  })
})
