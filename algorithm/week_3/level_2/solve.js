export const isString = (str) => typeof str === 'string'
export const checkStrLength = (str) => str.length < 100

const getSubStr = (str) => {
  if (!isString(str)) return '문자열을 입력해주세요'
  if (!checkStrLength(str)) return '문자열의 길이를 100이하로 입력해주세요'
  return str.split('').reduce((acc, cur, idx) => {
    const isLastIdx = str.length - 1
    return acc += `${str.substr(0, idx + 1)}${isLastIdx === idx ? '' : '\n'}`
  },``)
}

export default getSubStr
