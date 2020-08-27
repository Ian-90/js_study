const getWordCount = (lineOfString) => {
  const isString = typeof lineOfString === 'string'
  if (!isString) {
    return '문자열을 입력해주세요'
  }

  return lineOfString.split(' ').filter((word) => word !== '').length
}

export default getWordCount
