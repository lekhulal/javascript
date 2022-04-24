const obj = {
	name: 'Lekz',
	age: 31,
	address: {
		place: 'Kochi',
		country: 'India'
	}
}

const { name, address: { country } } = obj;
console.log(name, country)

/*
* Lodash pkg will useful for complicated destructuing
*/