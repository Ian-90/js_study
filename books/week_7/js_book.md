# 잘 모르거나 기억하면 좋은 것들

## 24. 최적화
* 성능은 적절한 수준을 유지해야하지만, 최적화는 쉽게 상황을 악화 시킬 수 있다
* 괄목할 만한 향상이 있는 최적화가 아니면 시간낭비이다
* 측정 - 실행시간 측정이 의미가 없을 수도 있다. 그렇기 때문에 더 읽기 쉽고 더 유지보수 하기 쉬운 기능을 골라야 한다
* 다시 측정하기
  * 측정방법 - 최적화하고 싶은 코드의 성능을 측정 후, 최적화 후 다시 측정
  * 눈에 띌 정도로 향상이 없다면, 코드를 되돌리기
  * 최적화는 복잡성을 더하므로, 코드는 점점 커지고, 유지하기 어렵다. 그렇기 때문에 눈에 띌 정도로 속도가 향상되었어도, 코드가 복잡해지면 고민해봐야 한다
  * 깔끔한 코드를 포기해서는 안된다
* 시간을 갉아먹는 것들
  * 병렬화에 실패
  * 턴의 법칙 위반
  * 낮은 응집도
  * 강한 결합도
  * 잘못된 알고리즘
  * 스래싱(thrashing) - 계층적 메모리 구조에서 상위 메모리에 있어야 할 데이터가 없어서 하위 메모리에서 해당 데이터를 가져오느라 실제로 해야 할 일을 제대로 못하는 경우
  * 비대한 소프트웨어
  * 다른 사람이 만든 코드
* 언어
  * 최적화에 투자하는 가장 좋은 방법은 언어 엔진
  * 자바스크립트는 최적화가 안 된 느린 코드로 빨리 시작한 다음, 프로그램이 어떻게 동작하느냐에 따라 최적화한다는 복잡한 행동을 취함

## 25. 트랜스파일링
* 트랜스파일링 - 하나의 프로그래밍 언어를 다른 언어로 컴파일 하는 특별한 형태
* 트랜스파일러는 교육이나 연구 목적으로는 좋지만, 상용 생상 단계에서는 사용해서는 안된다
* Neo
  * 교육적인 목적의 트랜스파일 언어
  * 나머지는 Neo의 특징들과 자바스크립트와 다른 점들 설명..

## 26. 토큰화
* 프로그램을 만드는 첫 번째 단계는 소스를 토큰 단위로 쪼개는 것이다
* 토큰 - 연속된 문자열로 구성되며 소스에서 의미 있는 단어를 나타내는 단위
* 나머진 Neo에서 토큰 설명

## 27. 파싱
* 파싱 - 연속한 토큰 객체를 구문 트리 형태로 만들어 내는 과정
* 파싱 도중 에러를 찾을 수 있으며, 발견되는 경우 error함수를 사용해서 보고
* 나머진 Neo에서 파싱 설명
