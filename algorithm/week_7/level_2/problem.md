# 최댓값

## 문제 설명
여러개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 값이 몇 번째 수인지를 구하는 프로그램을 작성하십시오.

예를 들어, 서로 다른 7개의 자연수가 각각 49, 62, 18, 37, 75, 33, 85 라면, 이 중 최댓값은 85이고, 이 값은 7번째 수 입니다.

## 입력
첫째 줄에 서로 다른 자연수의 개수 입렵

둘째 줄에 서로 다른 자연수 값들을 입력

## 출력
최댓값과 최댓값이 몇 번째 수인지를 순서대로 출력한다. 

## 입/출력 예시
입력           | 출력 
------------- | ---------
7<br>49 62 18 37 75 33 85 | 85 7
9<br>3 29 38 12 57 74 40 99 61 | 99 8

## solution
```javascript

```

* 최댓값을 구하기 위해서 [Math.max](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max)를 활용했고, 순서를 구하기 위해서 [Array.indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)를 활용했다.
