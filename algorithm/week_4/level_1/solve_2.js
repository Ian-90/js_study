export const range = (n) => Array.from({ length: n }, (v, i) => i + 1)
export const odd = (n) => (2 * n) - 1
export const printRepeatStr = (n, printStr) => printStr.repeat(n)
export const numberRangeCheck = (n) => Number.isInteger(n) && (n > 0) && (n < 51)

const pyramid = (n) => {
  if (!numberRangeCheck(n)) {
    return '0과 50사이에 자연수를 입력해주세요'
  }

  return range(n).reduce((acc, cur, idx) => {
    const isLast = idx === (n - 1)
    acc +=`${printRepeatStr((n - cur), ' ')}${printRepeatStr(odd(cur), '*')}${isLast ? `` : `\n`}`
    return acc
  }, '')
}

export default pyramid
