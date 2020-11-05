# 잘 모르거나 기억하면 좋은 것들

## 20. 비동기 프로그래밍
* 순차적 언어는 입출력을 블록(block) 방식으로 처리
* 동시성 - 동시에 여러 가지 일을 할 수 있음
  * 동일한 유형(homogeneous)의 동시성 - 비슷한 많은 동작이 같은 시간에 처리
  * 서로 다른 유형(heterogeneous)의 동시성 - 각각 서로 다른 책임을 지는 특별한 프로세스들의 협업
* 스레드
  * 가장 오래된 동시성 기법
  * 실제 혹은 가상의 CPU로서 메모리를 공유하며 동시에 실행됨
  * 순수함수와 잘맞음
  * 스레드 간 경쟁으로 디버깅 하기 힘든 에러가 발생 할 수 있음
    * 상호 배제(mutual exclusion)으로 위험도를 낮출 수 있다.
  * 상호 배제(mutual exclusion) - 메모리의 임계 구역(critical region)을 잠그고, 스레드를 차단하고, 서로 경쟁하는 코드 실행을 막는 것
  * Javascript는 스레드를 위와 같은 방식으로 쓰지 않기 때문에, 동시성을 더 나은 방법으로 구현 가능
* 비동기 함수는 호출하면 해야하는 일을 다 끝내지 않아도 반환
* 비동기 프로그래밍의 근간은 콜백 함수와 프로세싱 루프(processing loop)
  * 콜백 함수
    * 어떤 활동을 표현하는 객체에 연결
    * 기대하는 일
      * 메세지가 도착함
      * 어떤 작업이 온료됨
      * 사용자가 프로그램과 상호 작용함
      * 센서가 특정 이벤트를 관측함
      * 시간이 흐름
      * 무언가가 잘못됨
  * 프로세싱 루프
    * 이벤트 루프(event loop) 또는 메시지 루프(message loop)라고도 함
    * 이벤트 루프는 큐(queue)에서 가장 높은 우선순위를 가지는 이벤트 혹은 메세지를 가져와서 해당 이벤트나 메세지를 처리하도록 등록된 콜백 함수를 호출. 콜백 함수가 작업을 완료하면 반환. 이러한 이유 때문에 콜백 함수는 메모리 잠금이나 상호 배제가 필요없음
    * 콜백 함수가 끝나면 프로세싱 루프는 큐에서 그다음 이벤트나 메세지를 꺼내와서 등록된 콜백 함수를 호출하고, 이 과정을 계속 반복
    * 프로세싱 루프가 관리하는 큐를 이벤트 큐 혹은 메세지 큐라고 불림
    * 자바스트립트 프로그램과 메인 스레드 간에 통신하는 방법이 큐이다
* 자바스트립트의 스레드 상태 값은 대부분 스택이 아닌 해당 함수의 클로저에 저장되기 때문에, 예외가 발생하여도 동작이 계속 진행 될 수 있다.
* 프로세싱 루프의 한 반복은 턴(turn)이라고 부름
* 턴의 법칙
  * 함수는 어떤 일이 일어나길 마냥 기다리면 안된다
  * 메인 스레드를 블록해서는 안된다
  * 빨리 끝내야 된다.
* 프로세스는 스레드와 비슷하지만 메모리를 공유하지 않음
* 리퀘스터 - 콜백 함수를 인자로 전달 받고, 호출 즉시 반환되지만 작업은 바로 끝나지 않고 미래의 언젠가 끝나는 함수
  * 콜백함수는 value와 reason 인자를 받는다
  * 작업이 완료되면 value는 결과값이, 실패하면 undefined
  * reason은 작업이 실패 했을 때 원인에 대한 내용
* Parseq 라이브러리를 구현부는 어려워서 이해불가.. 계속 읽다보면 언젠간 이해를 할지도..?
* 프로세싱 루프와 관련해서 이벤트 루프를 검색해서 공부해보면 좋을 것 같다

## 21. Date
* 태양년 365.242188792..
  * 그레고리력
    * 100으로는 나누어 떨어지지 않지만 4로 나누어 떨어지는 해에는 하루를 더한다. 하지만 400으로 나누어 떨어지는 해에는 무조건 하루를 더한다.
    * 평균 364.2425일

  * 더 나은 알고리즘(태양년에 더 가까움)
    * 128로는 나누어 떨어지지 않지만 4로 나누어 떨어지는 해에는 하루를 더한다.
    * 평균 365.2421875일

* Date 함수
  * getYear나 setYear 대신 getFullYear와 setFullYear를 사용

* ISO 8601 - 날짜와 시간을 나타내는 국제표준