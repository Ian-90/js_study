# 부분문자열

## 문제 설명
아래의 예시와 같이 입력받은 문자열의 부분문자열을 모두 출력하는 프로그램을 작성하세요.

예시&#41; 문자열 ACE가 입력되었을 때
A
AC
ACE
가 출력되어야 합니다.

## 입력
임의의 문자열(최대 100자)

## 출력
부분 문자열 출력

## 입/출력 예시
입력           | 출력 
------------- | ---------
abcdefg | a<br>ab<br>abc<br>abcd<br>abcde<br>abcdef<br>abcdefg
ABC | A<br>AB<br>ABC

## solution 1
```javascript
const isString = (str) => typeof str === 'string'
const checkStrLength = (str) => str.length < 100

const getSubStr = (str) => {
  if (!isString(str)) return '문자열을 입력해주세요'
  if (!checkStrLength(str)) return '문자열의 길이를 100이하로 입력해주세요'
  return str.split('').reduce((acc, cur, idx) => {
    const isLastIdx = str.length - 1
    return acc += `${str.substr(0, idx + 1)}${isLastIdx === idx ? '' : '\n'}`
  },``)
}
```

* 문자열을 부분적으로 출력하기 위해서 slice나 substr함수를 활용하려고 생각했다. 규칙을 보면 메소드의 start와 end를 적용시, 길이가 3인 문자열은 (0,1),(0,2),(0,3)의 index쌍을 가진다. 그래서 string에서 반복문을 만들기 위해, string을 배열로 변환 후, reduce를 활영했다.
