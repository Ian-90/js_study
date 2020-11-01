export const checkGrade = (score) => {
  if (score >= 90) return 'A'
  if (score >= 80) return 'B'
  if (score >= 70) return 'C'
  if (score >= 60) return 'D'
  return 'F'
}

export const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

export const average = (arr) => {
  const averageScore = sum(arr) / arr.length
  return averageScore.toFixed(2)
}

const getExamAverageAndGrade = (input) => {
  const scoreArr = input.split(' ').map((strN) => Number(strN))
  const Average = average(scoreArr)
  return `${Average} ${checkGrade(Average)}`
}

export default getExamAverageAndGrade
