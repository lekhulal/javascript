const arr = [
	{
		name: 'Lek',
		age: 31
	},
	{
		name: 'Ranju',
		age: 31
	},
	{
		name: 'Ritu',
		age: 3
	}
]

// console.log(arr)

let filterResult = arr.filter((item, index) => {
	return item.age === 31
})

if(filterResult) {
console.log(filterResult)
} else {
console.log('Not found')
}

/*
* ----------------------------------------------------------------------------------------
* The filter() method creates a new array filled with elements that pass a test provided by a function.
* The filter() method does not execute the function for empty elements.
* The filter() method does not change the original array.
* ----------------------------------------------------------------------------------------
*/
