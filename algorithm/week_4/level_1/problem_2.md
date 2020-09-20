# 피라미드

## 문제 설명
이 문제는 반복문을 실습할 수 있는 피라미드 쌓기입니다. 입력한 수가 피라미드의 층수가 된다고 생각하고 '*'로 이루어진 피라미드 모양을 출력하는 프로그램을 작성하십시오.

## 입력
자연수 50이내

## 출력
입력한 층에 해당하는 피라미드 모양

## 입/출력 예시
입력           | 출력 
------------- | ---------
5 | &nbsp;&nbsp;&nbsp;&nbsp;&#42;<br>&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;<br>&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;
10| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#42;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&nbsp;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;&#42;


## solution 1
```javascript
const range = (n) => Array.from({ length: n }, (v, i) => i + 1)
const odd = (n) => (2 * n) - 1
const printRepeatStr = (n, printStr) => printStr.repeat(n)
const numberRangeCheck = (n) => Number.isInteger(n) && (n > 0) && (n < 51)

const pyramid = (n) => {
  if (!numberRangeCheck(n)) {
    return '0과 50사이에 자연수를 입력해주세요'
  }

  return range(n).reduce((acc, cur, idx) => {
    const isLast = idx === (n - 1)
    acc +=`${printRepeatStr((n - cur), ' ')}${printRepeatStr(odd(cur), '*')}${isLast ? `` : `\n`}`
    return acc
  }, '')
}
```

* 예시를 보면, 공백은 4, 3, 2, 1, 0이 되며, 별의 개수는 1, 3, 5, 7, 9가 된다. 공백은 4부터 1식 줄어들고 있고, 별의 개수는 홀수이다.
* 입력한 자연수값으로 반복문을 실행하기 위해서 range 함수를 만들었다.
* 별의 개수를 구하기 위해서, 홀수를 구하는 식을 만들었다.(등차수열을 이용)
* 공백이나 별을 반복해서 만들기위해서 printRepeatStr을 추가했다.
* range로 생성한 값의 원소들로, 구현된 함수들을 이용하여 공백과 별을 추가하였다

