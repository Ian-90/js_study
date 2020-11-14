export const getMax = (arr) => Math.max(...arr)
export const getMin = (arr) => Math.min(...arr)

const finacialCrisis = (salarys) => {
  const salaryArr = salarys.split(' ').map((salary) => Number(salary))
  const maxSalary = getMax(salaryArr)
  const minSalary = getMin(salaryArr)
  const remainSalaryFilter = salaryArr.filter((salary) => (salary < maxSalary) && (salary > minSalary))

  return remainSalaryFilter.join('')
}

export default finacialCrisis
