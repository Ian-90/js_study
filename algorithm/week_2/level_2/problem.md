# 3개의 숫자를 더하여 술래가 원하는 숫자를 만드세요

## 문제 설명
우아한형제들의 주문팀은 팀워크 향상을 위하여 가평으로 워크숍을 가게 됐습니다.
주문팀 팀원 A는 워크숍에서 팀원들끼리 같이 할 수 있는 게임을 생각하던 중 숫자를 이용한 게임을 떠올리게 됩니다.
0-20까지의 숫자 중 무작위로 하나가 적힌 종이를 바닥에 여러 장 뿌려놓고 술래가 숫자 하나를 크게 외칩니다.
술래를 제외한 나머지 팀원들은 바닥에 뿌려진 종이 중 3장을 집어 종이에 적힌 숫자의 합이 술래가 외친 숫자와 같다면 게임에서 승리하게 됩니다.


## 입력
1. 표준입력으로 첫 번째 줄에는 0에서 20까지의 int형 숫자들이 공백으로 구분되어 최대 20개까지 주어집니다.
2. 최대 20개의 숫자는 중복되어 주어질 수 있고, 정렬되지 않았습니다.
3. 표준입력으로 두 번째 줄에는 술래가 외친 숫자 하나가 주어집니다.

## 출력
1. 결괏값으로 3개의 숫자는 왼쪽부터 오름차순으로 출력되어야 합니다. 1 3 2가 답이라면 1 2 3으로 출력해야 합니다.
2. 결괏값으로 3개의 숫자는 아래로 오름차순으로 출력되어야 합니다. 1 5 2, 1 3 4이 결괏값이라면 1 3 4를 먼저 출력해야 합니다.
3. 결괏값으로 3개 숫자의 조합 중 같은 조합이 여러 개 존재한다면 한 번만 출력해야 합니다. 1 2 3, 1 2 3이 결괏값이라면 1 2 3 한 번만 출력되어야 합니다.
4. 결괏값이 없다면 NO를 출력합니다.

## 입/출력 예시
입력           | 출력 
------------- | ---------
1 2 3 4 5<br>8 | 1 2 5<br>1 3 4    
1 2 3 4 5<br>3 | NO

## solution 1
```javascript
const getNumberCombination = (numSet) => {
	const result = []
	for (let i = 0; i < (numSet.length - 2); i++) {
		for (let j = 1; j < (numSet.length - 1); j++) {
			for (let k = 2; k < numSet.length; k++) {
				if ((i < j) && (j < k)) {
					result.push(`${numSet[i]} ${numSet[j]} ${numSet[k]}`)
				}
			}
		}
	}
	return result
}

const uniqStrSet = (strSet) => strSet.reduce((acc, cur) => {
	if (acc.indexOf(cur) === -1) {
		return acc.concat(cur)
	}

	return acc
}, [])

const sum = (str) => Number(str[0]) + Number(str[2]) + Number(str[4])

const getRightAnswerFilter = (arr, answer) => arr.filter((str) => sum(str) === answer)

const getThreeNumberHideAndSeek = (strLine) => {
	const [inputNumSet, answer] = strLine.split('\n')
	const sortedNumSet = inputNumSet.split(' ').sort((a, b) => Number(a) - Number(b))
	const numberCombination = getNumberCombination(sortedNumSet)
	const uniqCombination = uniqStrSet(numberCombination)
	const filterAnswer = getRightAnswerFilter(uniqCombination, Number(answer))

	if (filterAnswer.length === 0) {
		return 'NO'
	}
	return filterAnswer.join('\n')
}
```

* 정답을 구하기 위해서 먼저 모든 숫자 3개의 조합을 구하려고 생각했다. 1 2 3 4 5가 입력되어 있으면 [1, 2, 3], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5], [1, 4, 5], [2, 3, 4], [2, 3, 5], [2, 4, 5], [3, 4, 5] 총 10개이다. getNumberCombination 함수로 순서대로 입력하여 구하였다. 그리고 결과값이 오름차순으로 구해야 했기 때문에 입력값에서 먼저 오름차순으로 정렬을 했다. 그리고 1 1 2 3 4 5를 입력했다면, getNumberCombination에서 중복이 생기기 때문에, 중복을 제거하는 uniqStrSet 함수를 만들었다. 그리고 여기서 정답과 일치하는 조합을 찾기위해 getRightAnswerFilter 함수를 만들어서 답을 구하였다.