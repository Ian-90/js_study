export const lengthCheck = (length) => (length >= 1) && (length <= 20)
export const getNthRow = (order, step) => Array.from({ length: step }, (v, i) => order + (step * i))
export const range = (length) => Array.from({ length }, (v, i) => i + 1)

const verticalOrderRectangle = (length) => {
  if (!lengthCheck(length)) {
    return '길이가 20이하의 자연수를 입력해주세요'
  }

  return range(length).map((order) => getNthRow(order, length))
}

export default verticalOrderRectangle
