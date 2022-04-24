Promise.race([
	getJson('https://jsonplaceholder.typicode.com/todos/5'),
	getJson('https://jsonplaceholder.typicode.com/todos/2'),
	getJson('https://jsonplaceholder.typicode.com/todos/6')
])
.then(data => {
	console.log('Promise Race Response: ', data)	
})	
.catch(error => {
	console.log('Error: ', error.message)
})

function getJson(url) {
	return fetch(url)
	.then( res => res.json() )		
}

/*
* The Promise.race() method returns a promise that fulfills or 
* rejects as soon as one of the promises in an iterable fulfills or rejects,
* with the value or reason from that promise.
*/
