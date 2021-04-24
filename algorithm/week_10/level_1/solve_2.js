export const getQuotient = (number, divider) => Math.floor(number / divider)
export const getReminder = (number, divider) => number % divider

const getQuotientAndRemainder = (numberAndDivider) => {
  const [number, divider] = numberAndDivider.split(' ')
  const Q = getQuotient(Number(number), Number(divider))
  const R = getReminder(Number(number), Number(divider))
  return `${Q} ${R}`
}

export default getQuotientAndRemainder
