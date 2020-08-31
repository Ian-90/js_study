# 잘 모르거나 기억하면 좋은 것들

## 6. 불 타입
* falsy한 값(false처럼 동작하는 값)
  * false
  * null
  * undefined
  * ""(빈 문자열)
  * 0
  * NaN - 어떤 숫자를 어떤 비교 연산자를 사용해서 비교하더라고 false를 반환

## 7. 배열
* js의 배열은 객체이다
* length 속성(원소의 개수를 의미하지는 않음)을 가지고 있다
* 배열인지 확인하려면, [Array.isArray](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)로 확인
* shift와 unshift 메소드는 pop과 push에 비해 많이느리다
* map, reduce, filter는 배열의 끝에 도달하기 전에는 종료할 수 없다
* sort의 문제를 해결하는 복잡한 비교함수 
```javascript
const refine = (collecntion, path) => (
  path.reduce((refinement, element) => {
    try {
      return refinement[element]
    } catch (ignore) {}
  }, collection)
)

const by = (...keys) => {
  const paths = keys.map((element) => element.toString().split('.'))
  return function compare (first, second) {
    let first_value
    let second_value
    if (paths.every((path) => {
      first_value = refine(first, path)
      second_value = refine(second, path)
      return first_value === second_value
    })) {
      return 0
    }

    return (
      (
        typeof first_value === typeof second_value
        ? first_value < second_value
        : typeof first_value < typeof second_value
      )
      ? -1
      : 1
    )
  }
}
```
* 비순수 함수 - 배열의 원본을 바꿈
  * fill
  * pop
  * push
  * shift
  * splice
  * unshift
  * reverse
  * sort
  
## 8. 객체
* undefined를 저장하지 않는 것이 좋다
* js는 주어진 키와 속성이 같은지 === 연산자를 이용한다
* 객체의 복사는 [Object.assign](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)을 이용
* Object.create는 기존의 객체가 새로운객체의 prototype이 된다
* 아무것도 상속받지않는 객체를 만드는 방법 - Object.create(null)
* Object.create vs WeakMap - 똑같은 일을 하지만 Object.create는 키를 문자열만 허용하고, WeakMap은 키를 객체만 허용한다

## 9. 문자열
* 0 ~ 65535 사이의 크기를 가지는 부호가 없는 16비트 정수로 이루어진 불변 배열
* 정규표현식 객체로 JSON 텍스트를 분석 할 수 없다
* 템플릿 문자열은 문제점이 있다.

## 10. 빈 값
* 빈 값(bottom value)는 데이터 구조의 끝을 가리키거나 값이 없음을 뜻하는 특수한 값
* js에서의 빈 값은 null과 undefined