import threeOfMultiplesGame, { isThreeOfMultiples } from './solve_1'

describe('isThreeOfMultiples', () => {
  it('3의 배수인지 확인합니다', () => {
    expect(isThreeOfMultiples(2)).toBeFalsy()
    expect(isThreeOfMultiples(11)).toBeFalsy()
    expect(isThreeOfMultiples(3)).toBeTruthy()
    expect(isThreeOfMultiples(6)).toBeTruthy()
    expect(isThreeOfMultiples(12)).toBeTruthy()
  })
})

describe('threeOfMultiplesGame', () => {
  it('1부터 n까지 순서대로 공백을 두고 수를 출력하는데, 3의 배수인 경우 그 수 대신 영문 대문자 X(박수) 를 출력', () => {
    expect(threeOfMultiplesGame(9)).toBe('1 2 X 4 5 X 7 8 X')
    expect(threeOfMultiplesGame(17)).toBe('1 2 X 4 5 X 7 8 X 10 11 X 13 14 X 16 17')
  })
})
