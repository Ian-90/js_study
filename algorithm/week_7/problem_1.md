# Min 함수

## 문제 설명
함수의 정의와 호출을 실습할 수 있는 아주 간단한 문제입니다. 서로 다른 두 정수를 비교하여 더 작은 값을 출력해내는 Min 함수를 작성하시면 됩니다.

## 입력
서로 다른 두 정수

## 출력
두 정수 중 값이 작은 정수

## 입/출력 예시
입력           | 출력 
------------- | ---------
10 20 | 10
-5 -30 | -30


## solution 1
```javascript
const getMin = (input) => {
  const numSet = input.split(' ').map((strN) => Number(strN))
  return Math.min(...numSet)
}
```

* Math.min 함수를 이용하면 간단히 구할 수 있다.
