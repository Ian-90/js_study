export const strConvertArr = (str, seperator) => str.split(seperator)
export const getTestCases = (testCaseSet) => testCaseSet.map((testCase) => strConvertArr(testCase, ' '))
export const convertAbsoluteNumber = (strNum) => Math.abs(Number(strNum))
export const checkedDestination = (testCase) => {
  const [X, Y, N] = testCase
  const absoluteX = convertAbsoluteNumber(X)
  const absoluteY = convertAbsoluteNumber(Y)
  const absoluteN = convertAbsoluteNumber(N)
  const checkingNumber = absoluteN - absoluteX - absoluteY
  if (checkingNumber < 0) return 'NO'
  return (checkingNumber % 2) === 0 ? 'YES' : 'NO'
}

const getAICleanerTest = (input) => {
  const inputArr = strConvertArr(input,'\n')
  const testCases = getTestCases(inputArr.slice(1))
  return testCases.map((testCase) => checkedDestination(testCase)).join('\n')
}

export default getAICleanerTest
