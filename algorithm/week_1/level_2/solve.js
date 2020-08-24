const stringReverse = (str) => {
  const isString = typeof str === 'string'
  if (!isString) {
    return '문자열을 입력해주세요'
  }
  return str.split('').reverse().join('')
}

export default stringReverse
