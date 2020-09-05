export const getNumberCombination = (numSet) => {
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

export const uniqStrSet = (strSet) => strSet.reduce((acc, cur) => {
	if (acc.indexOf(cur) === -1) {
		return acc.concat(cur)
	}

	return acc
}, [])

export const sum = (str) => Number(str[0]) + Number(str[2]) + Number(str[4])

export const getRightAnswerFilter = (arr, answer) => arr.filter((str) => sum(str) === answer)

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

export default getThreeNumberHideAndSeek
