# Substring

## 문제 설명
문자열을 입력하고, 문자열의 시작점과 시작점으로 부터 잘라낼 문자의 개수를 입력하면 잘라낸 새로운 부분 문자열을 만드는 프로그램을 작성하십시오.
예를 들어 'I Love Goorm !' 에서 3 번째 점 부터 10개의 문자를 잘라 새로운 문자열을 만들면 'Love Goorm'이 될 것 입니다.

## 입력
첫 줄에 문자열 입력
다음 줄에 시작점과 시작점으로 부터 자를 문자 수 입력

## 출력
Substring화 된 문자열 ( 잘라낸 새로운 문자열)

## 입/출력 예시
입력           | 출력 
------------- | ---------
I Love You<br>3 4 | Love
Goorm EDU<br>3 5| orm E


## solution 1
```javascript
const getSubString = (input) => {
  const [str, range] = input.split('\n')
  const [start, length] = range.split(' ').map((strN) => Number(strN))

  return str.substr(start - 1, length)
}
```

* [String.substr](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)을 이용하면, 간단히 해결 가능하다.
