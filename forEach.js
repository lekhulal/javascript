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
//--fn in forEach
arr.forEach(function(item, index) {
	console.log(index, item.name)
})

//--Callback fn in forEach
arr.forEach((item, index) => {
	console.log(index, item.name)
})

/*
* -------------------------------------------------------------------
* The forEach() method calls a function for each element in an array.
* The forEach() method is not executed for empty elements.
* -------------------------------------------------------------------
*/