export const range = (n) => {
  if (n <= 0) {
    return '0보다 큰 정수를 입력해주세요'
  }
  return Array.from({ length: n }, (v, i) => i + 1)
}

export const getMultipleCount = (n, multiple) => Math.floor(n / multiple)

export const getRangeSum = (rangeSet) => rangeSet.reduce((acc, cur) => acc + cur, 0)

export const getMultipleSum = (multiple, multipleCount) => getRangeSum(range(multipleCount)) * multiple

const getThreeAndFiveMultipleSum = (n) => {
  if ((n <= 0) || n > 1000) {
    return '1000이하의 자연수를 입력해주세요'
  }
  const threeCount = getMultipleCount(n, 3)
  const fiveCount = getMultipleCount(n, 5)
  const commonCount = getMultipleCount(n, 15)
  const threeMultipleSum = getMultipleSum(3, threeCount)
  const fiveMultipleSum = getMultipleSum(5, fiveCount)
  const commonMutipleSum = getMultipleSum(15, commonCount)
  return threeMultipleSum + fiveMultipleSum - commonMutipleSum
}

export default getThreeAndFiveMultipleSum
