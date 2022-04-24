function calcSum(...numbers) {
	console.log(numbers)
	const total = numbers.reduce((sum, num) => sum + num)
	return total;
}

function sum(...numbers) {
	console.log(numbers)
	const total = numbers.reduce((sum, num) => sum + num)
	return total;
}	

function showFirstTwoNumbers(first, second,...remain) {
	console.log(first, second, remain)
}

const values = [2,4,7,12,6];
const sum_ar = calcSum(...values)
console.log(`Array Sum: ${sum_ar}`)

const total = calcSum(2,5,9)
console.log(`Sum: ${total}`)

showFirstTwoNumbers(5, 9, 8, 9, 6)
