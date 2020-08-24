export const shiftInputCheck = (input) => {
  const isString = typeof input === 'string'
  if (isString) {
    const includesSpace = input.includes(' ')
    const spaceOne = input.split(' ').length === 2
    const allNumberCheck = input.split(' ').every((el) => !isNaN(Number(el)) && typeof Number(el))

    return includesSpace && spaceOne && allNumberCheck
  }

  return false
}

export const getLeftShift = (value, shiftAmount) =>  value * Math.pow(2, shiftAmount)
export const getRightShift = (value, shiftAmount) => Math.floor(value / Math.pow(2, shiftAmount))

const getShift = (numStr) => {
  if (shiftInputCheck(numStr)) {
    const strNumSet = numStr.split(' ')
    const leftValue = Number(strNumSet[0])
    const rightValue = Number(strNumSet[1])
    return `${getRightShift(leftValue, rightValue)}\n${getLeftShift(leftValue, rightValue)}`
  }

  return 'number number형태로 입력값을 입력해주세요'
}

export default getShift
