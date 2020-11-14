import countSticking, { excludeSeparator } from './solve_2'

describe('excludeSeparator', () => {
  it('구분자를 제거합니다.', () => {
    expect(excludeSeparator('abc', 'b')).toBe('ac')
    expect(excludeSeparator('ab1cd', '1')).toBe('abcd')
    expect(excludeSeparator('a|b', '|')).toBe('ab')
    expect(excludeSeparator('alb', 'l')).toBe('ab')
    expect(excludeSeparator('aIb', 'I')).toBe('ab')
  })
})

describe('countSticking', () => {
  it('주어진 문자열에서 1, I, l, |의 개수를 출력합니다', () => {
    expect(countSticking('We wi1l we wi|I rock you!')).toBe('1\n1\n1\n1')
    expect(countSticking('xl30gjdhaI1gdfkl|dlh;(rn4ky1kgndlIIldfl|ld|dBjfHd')).toBe('2\n3\n7\n3')
    expect(countSticking('~]I=-f{UX5%X<]`kQl8?O^UDflq=2`;1LM7a/74([|8qAO<.CJY>i_\'\\\n*A-q(QWFgBL+}RU(ZITZL:\0?FWb1+bUeP0/Y%\"1IB\\\
')).toBe('3\n3\n2\n1')
  })
})
