export const getDistance = (a, b) => Math.abs((a - b))
export const getDistanceBetweenPoint = (points) => points.reduce((acc, cur, idx) => {
  const isLast = idx === (points.length - 1)
  const next = points[idx + 1]
  if (isLast) {
    return acc
  }
  const distance = getDistance(cur, next)
  return acc.concat(distance)
}, [])

const getMinimunDistance = (input) => {
  const strPointSet = input.split('\n')[1]
  const pointSet = strPointSet.split(' ').map((strN) => Number(strN))
  const getDistanceSet = getDistanceBetweenPoint(pointSet)

  return Math.min(...getDistanceSet)
}

export default getMinimunDistance
