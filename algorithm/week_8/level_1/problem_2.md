# 홀짝 판별

## 문제 설명
입력된 숫자가 홀수인지 짝수인지를 판별하는 것이 목표입니다. 홀수인 경우 'odd', 짝수인 경우 'even'을 출력하는 프로그램을 작성하십시오.

## 입력
자연수 입력

## 출력
홀수일 경우 odd, 짝수일 경우 even 출력

## 입/출력 예시
입력           | 출력 
------------- | ---------
5 | odd
10 | even


## solution 1
```javascript
const oddEvenNumberCheck = (n) => ((n % 2) === 0 ? 'even' : 'odd')
```

* 간단하게 split와 join을 이용하면 해결 할 수 있다.
