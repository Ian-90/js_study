# 모양찍기

## 문제 설명
이 문제는 입력된 수 만큼

&#42;&#42;&#42;&#42;&#42;<br>
&#42;&#42;&#42;&#42;<br>
&#42;&#42;&#42;<br>
&#42;&#42;<br>
&#42;

형태로 '&#42;'를 출력하는 프로그램을 작성하십시오.
위의 그림은 5를 입력했을 경우입니다. 입력한 수가 출력될 삼각형의 층(Level)이라고 생각하시면 될 것 같습니다.

## 입력
100이하의 자연수

## 출력
입력에 맞는 층의 '*'로 이루어진 삼각형

## 입/출력 예시
입력           | 출력 
------------- | ---------
5 | &#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;<br>&#42;&#42;<br>&#42;     
7| &#42;&#42;&#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;&#42;<br>&#42;&#42;&#42;<br>&#42;&#42;<br>&#42;

## solution 1
```javascript
const reverseRange = (n) => {
  if (n <= 0) {
    return '0보다 큰 정수를 입력해주세요'
  }
  return Array.from({ length: n }, (v, i) => n - i)
}

const isNumber = (n) => typeof n === 'number' && !Number.isNaN(n)

const numberRangeCheck = (n) => {
  if (!isNumber(n)) {
    return false
  }
  const isInteger = Number.isSafeInteger(n)
  const inRangeToNaturalNumber = (n >= 1) && (n <= 100)
  return isInteger && inRangeToNaturalNumber
}

const printStar = (n) => {
  const star = `*`
  if (!numberRangeCheck(n)) {
    return '1과 100사이의 자연수를 입력해주세요'
  }

  const printStarNumSet = reverseRange(n)
  return printStarNumSet.reduce((acc, cur) => {
    const isLast = cur === 1
    return acc.concat(`${star.repeat(cur)}${isLast ? ``: `\n`}`)
  }, ``)
}
```

* String.repeat를 이용하려고 생각했다. repeat 메소드를 이용과 입력값부터 1까지 1씩 감소하는 숫자들이 필요했다. 그래서 Array.from을 이용하여 rangeReverse함수를 작성하였다.
* 입력값이 숫자인지 체크하는 함수와 범위를 체크하는 함수를 추가했다.
* rangeReverse로 생성된 String들을 합치기 위하여 reduce 메소드를 활용했다.