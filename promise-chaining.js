fetchData('https://jsonplaceholder.typicode.com/todos/1')
	.then(data => {
		console.log('Response Call#1 : ', data)
		return fetchData('https://jsonplaceholder.typicode.com/todos/2')
	})
	.then(data => {
		console.log('Response Call#2 : ', data)
		return fetchData('https://jsonplaceholder.typicode.com/todos/3')
	})
	.then(data => {
		console.log('Response Call#3 : ', data)
	})
	.catch(error => {
		console.log('Error: ', error)
	})

function fetchData(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
		.then( res => res.json() )
		.then( data => { resolve(data) })
		.catch( error => { reject(error) })
	})	
}

