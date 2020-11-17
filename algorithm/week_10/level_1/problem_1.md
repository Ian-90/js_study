# 16진수

## 문제 설명
입력 받은 10진수를 16진수로 출력하는 프로그램을 작성하십시오.

## 입력
10 진수 형 정수

## 출력
16진수로 변환된 입력

## 입/출력 예시
입력           | 출력 
------------- | ---------
100 | 64
1000 | 3e8


## solution 1
```javascript
const convertHexaDecimal = (n) => Number(n.toString(16))
```

* toString 메소드를 이용하면 간단하다.
