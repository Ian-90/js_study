export const isThreeOfMultiples = (n) => (n % 3) === 0

const threeOfMultiplesGame = (n) => {
  const changeX = Array.from({ length: n }, (v, i) => {
    if (isThreeOfMultiples(i + 1)) {
      return 'X'
    }

    return i + 1
  })
  return changeX.join(' ')
}

export default threeOfMultiplesGame
