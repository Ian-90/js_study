const getMin = (input) => {
  const numSet = input.split(' ').map((strN) => Number(strN))
  return Math.min(...numSet)
}

export default getMin
