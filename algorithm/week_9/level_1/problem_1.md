# 3의 배수 게임

## 문제 설명
구름이는 친구들과 3의 배수 게임을 즐겨하는데, 구름이가 게임을 잘 하지 못해서 계속 벌칙을 받고 있습니다.

구름이가 3의 배수 게임에서 패배하지 않도록 하게 해주는 프로그램을 작성하십시오.

3의 배수 게임이란?

여러 사람이 순서를 정해 순서대로 수를 부르는 게임이다.
만약 3의 배수를 불러야 하는 상황이라면, 그 수 대신 "박수" 를 친다

## 입력
정수 n ( 1 ≤ n ≤ 1000 )

## 출력
1부터 n까지 순서대로 공백을 두고 수를 출력하는데, 3의 배수인 경우
그 수 대신 영문 대문자 X(박수) 를 출력

## 입/출력 예시
입력           | 출력 
------------- | ---------
9 | 1 2 X 4 5 X 7 8 X
17 | 1 2 X 4 5 X 7 8 X 10 11 X 13 14 X 16 17


## solution 1
```javascript
const isThreeOfMultiples = (n) => (n % 3) === 0

const threeOfMultiplesGame = (n) => {
  const changeX = Array.from({ length: n }, (v, i) => {
    if (isThreeOfMultiples(i + 1)) {
      return 'X'
    }

    return i + 1
  })
  return changeX.join(' ')
}
```

* Array.from으로 1부터 n까지 구하는 배열을 구하는 함수에서 3의 배수이면 X로 변환하는 로직을 추가했다.
