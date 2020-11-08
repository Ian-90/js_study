import getPerpectSquareCount, { checkPerpectSquare } from './solve'

describe('checkPerpectSquare', () => {
  it('완전제곱수인지 판별합니다.', () => {
    expect(checkPerpectSquare(1)).toBeTruthy()
    expect(checkPerpectSquare(4)).toBeTruthy()
    expect(checkPerpectSquare(9)).toBeTruthy()
    expect(checkPerpectSquare(100)).toBeTruthy()
    expect(checkPerpectSquare(3)).toBeFalsy()
    expect(checkPerpectSquare(15)).toBeFalsy()
    expect(checkPerpectSquare(29)).toBeFalsy()
    expect(checkPerpectSquare(77)).toBeFalsy()
  })
})

describe('getPerpectSquareCount', () => {
  it('입력된 여러 개의 수 중에서 완전제곱수의 개수를 출력합니다', () => {
    expect(getPerpectSquareCount(`5\n1\n35\n25\n55\n44`)).toBe(2)
    expect(getPerpectSquareCount(`3\n81\n1\n49`)).toBe(3)
  })
})
