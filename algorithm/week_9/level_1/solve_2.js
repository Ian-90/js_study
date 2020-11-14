const SEPARATORS = ['1', 'I', 'l', '|']

export const excludeSeparator = (str, s) => str.split(s).join('')

const countSticking = (str) => {
  const result = SEPARATORS.map((seperator) => {
    return str.length - excludeSeparator(str, seperator).length
  })
  return result.join('\n')
}

export default countSticking
