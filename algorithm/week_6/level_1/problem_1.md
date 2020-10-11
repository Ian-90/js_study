# 윤년(Leap Year)

## 문제 설명
아래의 조건을 만족하는 해는 윤년(leap year)이라고 합니다.

1. 서력기원으로 연수가 4로 나누어 떨어지는 해는 윤년으로 한다.(2004년, 2008년, 2012년, 2016년, 2020년…)
2. 이 중에서 100으로 나누어 떨어지는 해는 평년으로 한다.(1900년, 2100년, 2200년, 2300년…)
3. 그중에 400으로 나누어 떨어지는 해는 윤년으로 둔다.(1600년, 2000년, 2400년 …)

연도를 입력받고 윤년인지 아닌지를 결정하는 프로그램을 작성하십시오.

## 입력
년도(0년 이상)

## 출력
윤년일 경우 Leap Year

평년일 경우 Not Leap Year

## 입/출력 예시
입력           | 출력 
------------- | ---------
2016 | Leap Year
2018 | Not Leap Year


## solution 1
```javascript
const isMultipleOfFour = (n) => (n % 4) === 0
const isMultipleOfOneHundred = (n) => (n % 100) === 0
const isMultipleOfFourHundred = (n) => (n % 400) === 0

const checkLeapYear = (year) => {
  const isLeapYear = (isMultipleOfFour(year) && !isMultipleOfOneHundred(year)) || isMultipleOfFourHundred(year) 

  if (isLeapYear) {
    return 'Leap Year'
  }

  return 'Not Leap Year'
}
```

* 4의 배수이면서 100의 배수가 아니거나 또는 400의 배수인것들을 윤년으로 판단하였다. 배수인지 판단하는 각 함수를 만들었다.
