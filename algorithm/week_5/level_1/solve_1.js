const getMinimum = (input) => {
  const numberList = input.split('\n')[1].split(' ').map((n) => Number(n))
  return Math.min(...numberList)
}

export default getMinimum
