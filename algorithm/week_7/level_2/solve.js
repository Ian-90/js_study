const getMaxValueAndOrder = (input) => {
  const [length, numbers] = input.split('\n')
  const numberArr = numbers.split(' ').map((strN) => Number(strN))
  const maxValue = Math.max(...numberArr)
  const order = numberArr.indexOf(maxValue) + 1
  return `${maxValue} ${order}`
}

export default getMaxValueAndOrder
