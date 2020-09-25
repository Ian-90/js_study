# 암스트롱 수(Narcissistic Number)

## 문제 설명
암스트롱 수는 각 자리 수를 3 제곱 한 결과의 합이 자신과 같은 수를 일컫습니다. [ ex&#41; 153 = 1&#42;1&#42;1 + 5&#42;5&#42;5 + 3&#42;3&#42;3 ]
나열해 보면 0, 1 153, 370,  371, 407 ... 입니다.
특정 수의 범위가 입력되면 범위 내의 암스트롱 수를 출력하는 프로그램을 작성하십시오.

## 입력
시작 수, 마지막 수(최대 3000)

## 출력
범위 내의 암스트롱 수

## 입/출력 예시
입력           | 출력 
------------- | ---------
100 500 | 153 370 371 407 
100 300 | 153 

## solution
```javascript
const convertNumberType = (arr) => arr.map((strN) => Number(strN))

const convertCube = (arr) => arr.map((digit) => Math.pow(digit, 3))

const arraySum = (arr) => arr.reduce((acc, cur) => acc + cur, 0)

const getCubeSum = (strN) => {
  const strDigits = strN.split('')
  const numberDigits = convertNumberType(strDigits)
  const cubeSet = convertCube(numberDigits)
  return arraySum(cubeSet)
}

const checkNarcissisticNumber = (n) => n === getCubeSum(`${n}`) 

const getNarcissisticNumber = (range) => {
  const result = []
  const strRange = range.split(' ')
  const numberRange = convertNumberType(strRange)
  const [start, end] = numberRange
  for (let i = start; i <= end; i++) {
    if (checkNarcissisticNumber(i)) {
      result.push(i)
    }
  }
  return result.join(' ')
}
```

* 암스트롱수를 확인하는 함수를 만들려고 생각했다. 그래서 입력범위를 바꾸기위해 필요한 함수들을 만들었다. 그리고 입력범위의 모든 숫자를 반복문을 이용하여 순회해가지고, 암스트롱수를 모두 구했다.
