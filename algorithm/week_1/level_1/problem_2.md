# 비트연산 기본 2

## 문제 설명
비트 연산의 꽃이라고 할 수 있는 시프트(Shift) 연산에 대해 배우고 실습하는 문제입니다. 시프트(Shift)의 결과값이 출력되는 프로그램을 작성하십시오.

비트 값(열)을 지시한 만큼 왼쪽이나 오른쪽으로 이동시키는 연산자 입니다. 많은 상황에서 효율적으로 사용될 수 있으므로 잘 익혀두시길 바랍니다.

1. Right Shift ( >> )
오른쪽으로 특정 비트 수 만큼 이동하고 빈자리는 양수 일때는 0, 음수 일때는 1로 채운다.

2. Left Shift ( << )
왼쪽으로 특정 비트 수 만큼 이동하고 빈자리는 0으로 채운다.

## 입력
두개의 수 a, b

## 출력
첫 줄에 a >> b의 결과
다음 줄에 a << b의 결과

## 입/출력 예시
입력           | 출력 
------------- | ---------
5 3 | 0<br>40      
1 5| 0<br>32

## solution 1
```javascript
const shiftInputCheck = (input) => {
  const isString = typeof input === 'string'
  if (isString) {
    const includesSpace = input.includes(' ')
    const spaceOne = input.split(' ').length === 2
    const allNumberCheck = input.split(' ').every((el) => !isNaN(Number(el)) && typeof Number(el))

    return includesSpace && spaceOne && allNumberCheck
  }

  return false
}

const getLeftShift = (value, shiftAmount) =>  value * Math.pow(2, shiftAmount)
const getRightShift = (value, shiftAmount) => Math.floor(value / Math.pow(2, shiftAmount))

const getShift = (numStr) => {
  if (shiftInputCheck(numStr)) {
    const strNumSet = numStr.split(' ')
    const leftValue = Number(strNumSet[0])
    const rightValue = Number(strNumSet[1])
    return `${getRightShift(leftValue, rightValue)}\n${getLeftShift(leftValue, rightValue)}`
  }

  return 'number number형태로 입력값을 입력해주세요'
}
```

* input의 형식이 맞는 체크 함수를 작성
  * string인지 체크
  * string이라면 공백을 가지고 있는지 체크
  * 공백을 가졌다면, split 함수로 변환 후, 원소의 개수가 2개인지 체크
  * 모든원소가 숫자로 변경시, 숫자인지 체크

* 각 shift 연산을 구하는 함수 구현
  * [MDN Left Shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Left_shift)를 참고하여, 함수로 구현
  * [MDN Right Shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Right_shift)를 참고하여, 함수로 구현

* 결과를 나누어서 출력하는 getShift함수 구현
