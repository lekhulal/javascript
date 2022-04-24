const arr = [
	{
		name: 'Lek',
		age: 31
	},
	{
		name: 'Ranju',
		age: 31
	}
]

// console.log(arr)

let searchResult = arr.find((item, index) => {
	return item.name === 'Ranju'
})

if(searchResult) {
console.log(searchResult.name, searchResult.age)
} else {
console.log('Not found')
}

/*
* ---------------------------------------------------------------
* The find() method returns the value of the first element that passes a test.
* The find() method executes a function for each array element.
* The find() method returns undefined if no elements are found.
* The find() method does not execute the function for empty elements.
* The find() method does not change the original array.
* ------------------------------------------------------------------
*/