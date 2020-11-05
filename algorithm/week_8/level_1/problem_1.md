# 공백 없애기

## 문제 설명
이 문제는 입력된 문자열에서 공백을 제거하여 출력하는 프로그램을 작성하는 것 입니다.

예를 들어 "This is Sparta !" 가 입력 되었다면 "ThisisSparta!"가 출력되도록 하면 되는 것 입니다.

## 입력
50자 이내의 문장

## 출력
입력에서 공백이 제거된 문장 ( 입출력 예시 참고 )

## 입/출력 예시
입력           | 출력 
------------- | ---------
I am Goorm ! | IamGoorm!
This is Sparta | ThisisSparta


## solution 1
```javascript
const removeBlank = (str) => str.split(' ').join('')
```

* 간단하게 split와 join을 이용하면 해결 할 수 있다.
