# 문자열 뒤집기

## 문제 설명
문자열의 앞뒤 순서를 반대로 변환하는 것, 다시말해 문자열 뒤집기 입니다. 입력된 문자열의 순서를 반대로 변환하는 프로그램을 작성하십시오.
예를 들어, "ABCDEFG"를 "GFEDCBA"로 변경합니다. "ABCDCBA"는 거꾸로해도 "ABCDCBA"이겠죠?

## 입력
첫 줄에 입력할 문자열의 길이를 입력
다음 줄에 문자열을 입력

## 출력
뒤집기가 완료된 문자열을 출력

## 입/출력 예시
입력           | 출력 
------------- | ---------
1234567 | 7654321     
string | gnirts

# solution
```javascript
const stringReverse = (str) => {
  const isString = typeof str === 'string'
  if (!isString) {
    return '문자열을 입력해주세요'
  }
  return str.split('').reverse().join('')
}
```

* 문자열을 거꾸로하는 메소드는 없지만 배열에는 reverse라는 메소드가 있다. 그렇기 때문에 string을 배열로 바꿔주면 된다. string을 배열로 바꾸는 메소드는 split이며,
배열을 다시 문자열로 바꾸는 메소드는 join이다.
