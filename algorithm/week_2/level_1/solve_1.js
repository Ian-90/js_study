export const reverseRange = (n) => {
  if (n <= 0) {
    return '0보다 큰 정수를 입력해주세요'
  }
  return Array.from({ length: n }, (v, i) => n - i)
}

export const isNumber = (n) => typeof n === 'number' && !Number.isNaN(n)

export const numberRangeCheck = (n) => {
  if (!isNumber(n)) {
    return false
  }
  const isInteger = Number.isSafeInteger(n)
  const inRangeToNaturalNumber = (n >= 1) && (n <= 100)
  return isInteger && inRangeToNaturalNumber
}

const printStar = (n) => {
  const star = `*`
  if (!numberRangeCheck(n)) {
    return '1과 100사이의 자연수를 입력해주세요'
  }

  const printStarNumSet = reverseRange(n)
  return printStarNumSet.reduce((acc, cur) => {
    const isLast = cur === 1
    return acc.concat(`${star.repeat(cur)}${isLast ? ``: `\n`}`)
  }, ``)
}

export default printStar
