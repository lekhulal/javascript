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

let newMapArr = arr.map((item, index) => {
	return {
		...item,
		place: 'Kerala'
	}
})

if(newMapArr) {
	console.log(newMapArr)
} else {
	console.log('Not found')
}


/*
* --------------------------------------------------------------------------
* map() creates a new array from calling a function for every array element.
* map() calls a function once for each element in an array.
* map() does not execute the function for empty elements.
* map() does not change the original array.
* --------------------------------------------------------------------------
*/