# 최단거리

## 문제 설명
오름차순으로 정렬된 1차원의 점들이 주어져 있을 때, 그 중 거리가 가장 짧은 거리를 출력하는 프로그램을 작성하십시오.

예를 들어 [1, 5, 7, 8, 12, 16, 20]이 주어진다면 결과값은 1이 될 것입니다.

## 입력
첫 줄에 입력의 개수

다음 줄에 1차원 점들 공백으로 구분하여 입력( 1 이상 1,000,000 이하 )

## 출력
점들간 최소거리를 가진 한 쌍간 거리

## 입/출력 예시
입력           | 출력 
------------- | ---------
5<br>1 9 29 59 60 | 1
10<br>20 90 130 450 923 1020 2943 3920 9431 11309 | 40

## solution
```javascript
const getDistance = (a, b) => Math.abs((a - b))
const getDistanceBetweenPoint = (points) => points.reduce((acc, cur, idx) => {
  const isLast = idx === (points.length - 1)
  const next = points[idx + 1]
  if (isLast) {
    return acc
  }
  const distance = getDistance(cur, next)
  return acc.concat(distance)
})

const getMinimunDistance = (input) => {
  const strPointSet = input.split('\n')[1]
  const pointSet = strPointSet.split(' ').map((strN) => Number(strN))
  const getDistanceSet = getDistanceBetweenPoint(pointSet)

  return Math.min(...getDistanceSet)
}
```

* 각 점들 사이의 모든 거리를 구해서 최솟값을 구하였다.
