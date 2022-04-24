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


var totalAge = arr.reduce((total, item, index) => {
	return total + item.age
}, 0)

console.log(totalAge)
