const getSubString = (input) => {
  const [str, range] = input.split('\n')
  const [start, length] = range.split(' ').map((strN) => Number(strN))

  return str.substr(start - 1, length)
}

export default getSubString
