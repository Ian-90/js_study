# 잘 모르거나 기억하면 좋은 것들

## 11. 문장
* 프로그래밍 언어는 표현 언어(expression language)와 문장언어(statement language)로 나뉘며, 문장 언어는 문장과 표현식을 가지고 있고, 표현 언어는 표현식만 가지고 있다. 자바스트립트는 문장언어이다.
* 선언문 
  * let, const, function
  * let - 초기화하지 않을 경우 변수의 초기 값은 undefined이며, 각각의 변수를 한 개씩 선언 하는것이 권장 사항
* 표현식 
  * 문장이 올 자리에 쓰기 좋은 세 가지 표현식은 할당문, 호출문, delete
* 분기
  * switch문 대신 객체를 써서 case를 객체의 키로 사용하면, switch문을 대체 가능
  * if문에서 els if보다는 else 블록안에 if문을 넣는 것이 좋다.
  * 순수 함수 스타일로 코드를 작성할 것이라면, 삼항 연산자를 사용
* 구두법
  * 항상 블록을 사용하는 것이 좋다

## 12. 함수
* 함수가 호출되면 활성 객체(activation object)가 만들어진다. 활성 객체는 숨겨진 데이터 구조로서 호출된 함수의 반환 주소와 실행에 필요한 정보를 저장하고 호출된 함수에 바인딩해준다.
* 자바스크립트의 활성객체는 힙에 저장되고, 함수가 종료된다고 자동으로 비활성화를 하진 않고, 가비지 컬렉터에 의해 처리된다.
* 활성객체가 가진 정보
  * 함수 객체에 대한 참조
  * 함수를 호출한 측의 활성 객체에 대한 참조
  * 함수 호출이 끝난 뒤 실행을 재개하기 위해 필요한 정보
  * 인자에 의해 초기화되는 함수 매개변수
  * undefined로 초기화된 함수 변수들
  * 함수가 복잡한 표현식을 계산하기 위해 임시로 사용하는 변수들
  * 함수 객체가 메서드로서 호출되었을 때 사용할 수 있는 this 참조
* 함수가 중첩되어 내부 함수 객체가 생성되면, 자신을 생성 한 외부 함수에 대한 활성 객체의참조를 가지게 되며, 이러한 방식을 클로저라고 한다.

## 13. 제너레이터
* function* 몸체로 만들어진 next 메서드를 포함하는 객체를 만드는것이 ES6의 generator이다
* yeild - return과 비슷하지만 기대한 값을 만들진 않고, value 속성을 가진 객체를 만듬
* generator보다는 값을 반환하는 함수(클로저)를 만드는 것이 간단하다
* 더 나은 방법으로 만든 함수들은 많이 읽어보고 이해해야겠다..

## 14. 예외
* 하나의 함수에서 try를 두 번 이상 쓰지 않도록 주의
* 되감기
  * 자바스크립트 컴파일러는 컴파일하는 모든 함수에 대한 캐치맵(catchmap)을 만들고, 예외가 발생하면 현재함수에 대한 캐치맵을 참조
* 비동기 프로그래밍에서의 예외 처리
  * 예외 처리는 스택을 거꾸로 되감으면서 진행

## 15. 프로그램
* 좋은 프로그래밍은 좋은 모듈 설계에 달려있다
* 좋은 모듈
  * 응집도(Cohesion)가 높다
  * 약하게 결합(Coupling)되어 있다
* 나쁜 모듈
  * 너무 많은 일을 하려고 하다 보니 응집도가 낮다
* 좋은 모듈을 만들기 위해서는 ?
  * 모듈 인터페이스를 간단 명료하게 만들기
  * 의존성을 최소화하기
  * 프로그램이 커지기위한 좋은 구조
