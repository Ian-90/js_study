# 완전 제곱수

## 문제 설명
완전 제곱수란 1<sup>2</sup> = 1, 2<sup>2</sup> = 4, 3<sup>2</sup> = 9 와 같이 어떤 정수를 제곱하여 만들어지는 수를 말합니다.

입력된 여러 개의 수 중에서 완전제곱수의 개수를 출력하는 프로그램을 작성하십시오.

## 입력
첫 줄에 입력할 수의 총 개수

줄바꿈으로 구분하여 총 개수 만큼 숫자 입력

## 출력
완전 제곱수의 개수

## 입/출력 예시
입력           | 출력 
------------- | ---------
5<br>1<br>35<br>25<br>55<br>44 | 2
3<br>81<br>1<br>49 | 3

## solution
```javascript
const checkPerpectSquare = (n) => Number.isInteger(Math.sqrt(n))

const getPerpectSquareCount = (input) => {
  const numArr = input.split(`\n`).map((n) => Number(n))
  return numArr.filter((n) => checkPerpectSquare(n)).length
}
```

* Math.sqrt와 Number.isInteger를 이용하여 완전제곱수를 판별하는 함수를 만들었습니다. 완전제곱수의 개수를 구하는것은 filter를 이용하여 구했습니다.
