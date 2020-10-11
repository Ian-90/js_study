export const isMultipleOfFour = (n) => (n % 4) === 0
export const isMultipleOfOneHundred = (n) => (n % 100) === 0
export const isMultipleOfFourHundred = (n) => (n % 400) === 0

const checkLeapYear = (year) => {
  const isLeapYear = (isMultipleOfFour(year) && !isMultipleOfOneHundred(year)) || isMultipleOfFourHundred(year) 

  if (isLeapYear) {
    return 'Leap Year'
  }

  return 'Not Leap Year'
}

export default checkLeapYear
