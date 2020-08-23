# 3과 5의 배수

## 문제 설명
N(1000이하의 자연수)을 입력하고 N 이하의 자연수중 3의 배수, 5의 배수의 합을 구하는 프로그램을 작성하십시오.

## 입력
1000 이하 자연수

## 출력
N이하의 자연수중 모든 3의 배수 그리고 5의 배수의 합

## 입/출력 예시
입력           | 출력 
------------- | ---------
1000 | 234168     
50| 593

## solution 1
```javascript
const range = (n) => {
  if (n <= 0) {
    return '0보다 큰 정수를 입력해주세요'
  }
  return Array.from({ length: n }, (v, i) => i + 1)
}

const getMultipleCount = (n, multiple) => Math.floor(n / multiple)

const getRangeSum = (rangeSet) => rangeSet.reduce((acc, cur) => acc + cur, 0)

const getMultipleSum = (multiple, multipleCount) => getRangeSum(range(multipleCount)) * multiple

const getThreeAndFiveMultipleSum = (n) => {
  if ((n <= 0) || n > 1000) {
    return '1000이하의 자연수를 입력해주세요'
  }
  const threeCount = getMultipleCount(n, 3)
  const fiveCount = getMultipleCount(n, 5)
  const commonCount = getMultipleCount(n, 15)
  const threeMultipleSum = getMultipleSum(3, threeCount)
  const fiveMultipleSum = getMultipleSum(5, fiveCount)
  const commonMutipleSum = getMultipleSum(15, commonCount)
  return threeMultipleSum + fiveMultipleSum - commonMutipleSum
}
```

* 3의 배수의 합과 5의 배수의 합을 구해서, 공통된 배수의 합을 뺴는 형식으로 계산하려고 했습니다
* 각 배수의 합을 구하는 함수 작성
  * 예를 들어, 10까지 3의 배수는 3,6,9이고 합을 구하는 공식은 3 + 6 + 9 입니다. 이것을 3으로 묶으면, 3 * (1 + 2 + 3) 입니다.
  * 입력한 값의 배수의 개수를 구하는 getMultipleCount 함수 구현(ex. 3, 6, 9)
  * 배수의 개수를 이용하여, 1부터 n까지 1식 증가하는 배열을 구하는 range 함수 구현(ex. 배수의 개수가 3이면, [1, 2, 3] 생성)
  * 배열의 원소의 합을 구하는 getRangeSum 함수 구현(ex. [1, 2, 3]이면 1 + 2+ 3)
  * 최종적으로 위의 예를 든 3 * (1 + 2 + 3)을 구하기 위해 commonMutipleSum 함수 구현

## solution 2
```javascript
const getMultipleCount = (n, multiple) => Math.floor(n / multiple)

const getRangeSum = (n) => n * (n + 1) / 2 
const getMultipleSum = (multiple, multipleCount) => getRangeSum(multipleCount) * multiple

const getThreeAndFiveMultipleSum = (n) => {
  if ((n <= 0) || n > 1000) {
    return '1000이하의 자연수를 입력해주세요'
  }
  const threeCount = getMultipleCount(n, 3)
  const fiveCount = getMultipleCount(n, 5)
  const commonCount = getMultipleCount(n, 15)
  const threeMultipleSum = getMultipleSum(3, threeCount)
  const fiveMultipleSum = getMultipleSum(5, fiveCount)
  const commonMutipleSum = getMultipleSum(15, commonCount)
  return threeMultipleSum + fiveMultipleSum - commonMutipleSum
}
```

* 위와 접근법은 비슷합니다.
  * 고등학교 수학에서 [등차수열](https://ko.wikipedia.org/wiki/%EB%93%B1%EC%B0%A8%EC%88%98%EC%97%B4)을 알고 있다면, 1부터 n까지의 합공식을 적용 할 수 있습니다. 그래서 1 + 2 + 3 + &mldr;	+ n = n * (n + 1) / 2 입니다. 이 공식을 이용한다면, 배수의 합을 구하기 편합니다.