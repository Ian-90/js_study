# 재정 위기

## 문제 설명
철수네 회사가 큰 재정 위기를 맞았습니다. 위기를 극복할 방법으로 전체 회사 인력의 2/3을 감축하는 방안을 채택할 수 밖에 없었다고 하는데요.

3명이 입력되면 그 중에 연봉이 가장 높은 사람과 가장 낮은 사람이 회사에서 나가야 한다고 합니다. 인사팀인 철수를 도와주는 프로그램을 작성하십시오.

## 입력
3명의 연봉 (만원, 순서에 상관없이)

## 출력
회사에 남는 사람의 연봉

## 입/출력 예시
입력           | 출력 
------------- | ---------
5000 12000 8000 | 8000
2000 4000 3000 | 3000


## solution 1
```javascript
const getMax = (arr) => Math.max(...arr)
const getMin = (arr) => Math.min(...arr)

const finacialCrisis = (salarys) => {
  const salaryArr = salarys.split(' ').map((salary) => Number(salary))
  const maxSalary = getMax(salaryArr)
  const minSalary = getMin(salaryArr)
  const remainSalaryFilter = salaryArr.filter((salary) => (salary < maxSalary) && (salary > minSalary))

  return remainSalaryFilter.join('')
}
```

* 최대연봉과 최소연봉을 Math.max와 Math.min함수를 이용하여 구한다음 filter를 걸었다.

