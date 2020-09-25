export const convertNumberType = (arr) => arr.map((strN) => Number(strN))

export const convertCube = (arr) => arr.map((digit) => Math.pow(digit, 3))

export const arraySum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

export const getCubeSum = (strN) => {
  const strDigits = strN.split('')
  const numberDigits = convertNumberType(strDigits)
  const cubeSet = convertCube(numberDigits)
  return arraySum(cubeSet)
}

export const checkNarcissisticNumber = (n) => n === getCubeSum(`${n}`) 

const getNarcissisticNumber = (range) => {
  const result = []
  const strRange = range.split(' ')
  const numberRange = convertNumberType(strRange)
  const [start, end] = numberRange
  for (let i = start; i <= end; i++) {
    if (checkNarcissisticNumber(i)) {
      result.push(i)
    }
  }
  return result.join(' ')
}

export default getNarcissisticNumber
