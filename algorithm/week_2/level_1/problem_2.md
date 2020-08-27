# 단어의 개수 세기

## 문제 설명
문자열 한 줄이 주어졌을 때, 해당 줄에 몇 개의 영단어가 존재하는지 계산하는 프로그램을 작성하시오. 문자열은 알파벳 대/소문자 및 공백으로 구성되어 있으며, 공백없이 하나 이상의 알파벳이 연속된 부분 문자열(Substring)을 단어(Word)로 정의한다.
예를 들어서 문자열 Goorm&#9;&#9;Edu 의 경우 두 개의 단어 Goorm, Edu가 존재한다. 

## 입력
한 줄에 공백과 알파벳을 포함하는 문자열이 주어진다. 문자열의 길이는 1글자 이상 1,000글자 이하로 주어진다. 

## 출력
 입력으로 주어진 문자열에 존재하는 영단어의 개수를 정수로 출력하시오.

## 입/출력 예시
입력           | 출력 
------------- | ---------
Goorm&#9;&#9;Edu | 2     
&#9;goo&#9;r&#9;m&#9;e&#9;du | 5


## solution 1
```javascript
const getWordCount = (lineOfString) => {
  const isString = typeof lineOfString === 'string'
  if (!isString) {
    return '문자열을 입력해주세요'
  }

  return lineOfString.split(' ').filter((word) => word !== '').length
}
```

* 공백 기준으로 단어를 우선 나누려고, split을 이용했다. 하지만 공백이 여러개일 경우 공백이 split한 배열에 추가가 되어있다. 그래서 filter를 이용하여, 남은 공백을 제거하면 단어의 개수를 알 수 있다.