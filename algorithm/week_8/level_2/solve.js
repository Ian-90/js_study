export const checkPerpectSquare = (n) => Number.isInteger(Math.sqrt(n))

const getPerpectSquareCount = (input) => {
  const numArr = input.split(`\n`).map((n) => Number(n))
  return numArr.filter((n) => checkPerpectSquare(n)).length
}

export default getPerpectSquareCount
