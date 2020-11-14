# 헷갈리는 작대기

## 문제 설명
이 세상에는 서로 비슷하게 생겨서 구분이 힘든 문자들이 있습니다. 가령 숫자 0과 알파벳 O가 그렇죠. 하지만 이보다 더 심한 건 작대기입니다. 숫자 일 <kbd>1</kbd>, 알파벳 대문자 아이<kbd>I</kbd>, 알파벳 소문자 엘<kbd>l</kbd>, 그리고 or 기호<kbd>|</kbd>는 모두 비슷하게 생겨서 코딩하다가 실수하는 경우도 발생합니다.

다른 프로그래머가 코딩하다가 실수하는 일이 없도록 이들을 구분해주는 프로그램을 만들어줍시다! 문자열 S가 주어질 때 이 문자열에 들어있는 <kbd>1, I, l, |</kbd>의 개수를 각각 구해주세요.

## 입력
첫 줄에 길이 5000 이하의 문자열 S가 주어진다. 이 문자열에는 공백이나 특수문자(!, @, #, $ 등)가 들어있을 수 있다.

## 출력
4개의 줄에 걸쳐서 각 줄에 순서대로 <kbd>1</kbd>의 개수, <kbd>I</kbd>의 개수, <kbd>l</kbd>의 개수, <kbd>|</kbd>의 개수를 출력한다.

## 입/출력 예시
입력           | 출력 
------------- | ---------
We wi1l we wi&#124;I rock you! | 1<br>1<br>1<br>1
xl30gjdhaI1gdfkl&#124;dlh;&#40;rn4ky1kgndlIIldfl&#124;ld&#124;dBjfHd | 2<br>3<br>7<br>3
~&#93;I=-f&#123;UX5%X<&#93;&#96;kQl8?O^UDflq=2&#96;;1LM7a/74&#40;&#91;&#124;8qAO<.CJY>i_'\n*A-q&#40;QWFgBL+&#125;RU&#40;ZITZL:\0?FWb1+bUeP0/Y%"1IB\ | 3<br>3<br>2<br>1


## solution 1
```javascript
const excludeSeparator = (str, s) => str.split(s).join('')

const countSticking = (str) => {
  const result = SEPARATORS.map((seperator) => {
    return str.length - excludeSeparator(str, seperator).length
  })
  return result.join('\n')
}
```

* split과 join을 이용하여, 기존 str에서 막대기를 제거하는 아이디어를 생각했다. 그렇다면 전체 str길이에서 막대기를 제외한 길이를 뺀다면, 막대기의 개수를 구할 수 있다.
다른 방법으로 떠오른건 str을 배열로 만들어서 filter를 이용하거나, matchAll을 이용한 정규표현식을 이용하는 것이다.

