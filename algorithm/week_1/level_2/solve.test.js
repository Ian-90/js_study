import stringReverse from './solve'

const placeholder = '문자열을 입력해주세요'

describe('stringReverse', () => {
  it('입력값이 string이 아니면, placeholder가 출력된다', () => {
    expect(stringReverse(999)).toEqual(placeholder)
    expect(stringReverse(['a', 'b', 'c'])).toEqual(placeholder)
    expect(stringReverse({ a: 1 })).toEqual(placeholder)
  })

  it('입력값이 string이면, 문자열을 뒤집어서 출력한다', () => {
    expect(stringReverse('1234567')).toEqual('7654321')
    expect(stringReverse('string')).toEqual('gnirts')
    expect(stringReverse('이효리')).toEqual('리효이')
    expect(stringReverse('')).toEqual('')
  })
})
