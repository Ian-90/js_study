# 몫과 나머지

## 문제 설명
두 양의 정수를 입력하고 앞에 입력한 수를 뒤에 입력한 수로 나눈 몫과 나머지를 순서대로 출력하는 프로그램을 작성해보시오.

## 입력
양의 정수 A, B

## 출력
A를 B로 나눈 몫과 나머지

## 입/출력 예시
입력           | 출력 
------------- | ---------
10 2 | 5 0
10 4 | 2 2


## solution 1
```javascript
const getQuotient = (number, divider) => Math.floor(number / divider)
const getReminder = (number, divider) => number % divider

const getQuotientAndRemainder = (numberAndDivider) => {
  const [number, divider] = numberAndDivider.split(' ')
  const Q = getQuotient(Number(number), Number(divider))
  const R = getReminder(Number(number), Number(divider))
  return `${Q} ${R}`
}
```

* 몫을 구하는 함수와 나머지를 구하는 함수를 나누어서 구현하였다.
