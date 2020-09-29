# 최소값

## 문제 설명
배열에 들어있는 정수 중 최소값을 구하는 프로그램을 작성하십시오.

## 입력
첫 줄에 배열에 들어가는 정수의 개수(n) 입력
정수의 개수는 자연수만 가능
다음 줄에 공백으로 구분하여 n개의 정수 입력

## 출력
배열 내의 정수 중 최소값

## 입/출력 예시
입력           | 출력 
------------- | ---------
3<br>1 3 5 | 1
10<br>-1 -2 -3 -4 -5 1 2 3 4 5 | -5


## solution 1
```javascript
const getMinimum = (input) => {
  const numberList = input.split('\n')[1].split(' ').map((n) => Number(n))
  return Math.min(...numberList)
}
```

* [Math.min](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) 함수를 이용하면 간단히 구할 수 있다.
