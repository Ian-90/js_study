# 시험성적 평균과 등급 구하기

## 문제 설명
구름이는 자신의 국어 수학 영어 3 과목의 시험 성적을 확인했습니다. 평균과 등급을 알고 싶어하는 구름이를 도와줄 수 있는 프로그램을 작성하십시오.
**평균은 소수점 2 번째 자리까지만(3 번째 자리에서 반올림)** 출력하며 등급은 평균 90점 이상일 경우 A, 90점 미만 80점 이상인 경우 B, 80점 미만 70점 이상이 C, 70점 미만 60점 이상이 D이고 60점 미만으로는 F입니다.

## 입력
국어 영어 수학 순으로 점수 입력(각 과목 당 100점 만점)

## 출력
평균, 등급

## 입/출력 예시
입력           | 출력 
------------- | ---------
100 100 98 | 99.33 A
100 100 100 | 100.00 A


## solution 1
```javascript
const checkGrade = (score) => {
  if (score >= 90) return 'A'
  if (score >= 80) return 'B'
  if (score >= 70) return 'C'
  if (score >= 60) return 'D'
  return 'F'
}

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

const average = (arr) => {
  const averageScore = sum(arr) / arr.length
  return averageScore.toFixed(2)
}

const getExamAverageAndGrade = (input) => {
  const scoreArr = input.split(' ').map((strN) => Number(strN))
  const Average = average(scoreArr)
  return `${Average} ${checkGrade(Average)}`
}

```

* 등급을 구하는 함수와 평균을 구하는 함수를 나누었다.
