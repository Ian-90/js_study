export const getDistance = (a, b) => Math.abs((a - b))

export const getSquare = (n) => Math.pow(n, 2)

export const convertNumberArr = (arr) => arr.map((strN) => Number(strN))

const getDistanceCoordinatePlan = (coordinateSet) => {
  const [point1, point2] = coordinateSet.split(`\n`)
  const [x1, y1] = convertNumberArr(point1.split(' '))
  const [x2, y2] = convertNumberArr(point2.split(' '))
  const horizontalDistance = getDistance(x1, x2)
  const verticalDistance = getDistance(y1, y2)
  const pythagoras = getSquare(horizontalDistance) + getSquare(verticalDistance)
  
  return Number(Math.sqrt(pythagoras).toFixed(2))
}

export default getDistanceCoordinatePlan
