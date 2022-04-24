Promise.all([
	getJson('https://jsonplaceholder.typicode.com/todos/1'),
	getJson('https://jsonplaceholder.typicode.com/todos/2'),
	getJson('https://jsonplaceholder.typicode.com/todos/3')
])
.then(data => {
	console.log('Promise All Response: ', data)	
})	
.catch(error => {
	console.log('Error: ', error.message)
})

function getJson(url) {
	return fetch(url)
	.then( res => res.json() )		
}

/*
* The Promise.all() method takes an iterable of promises as an input, 
* and returns a single Promise that resolves to an array of the results of the input promises. 

* This returned promise will resolve when all of the input's promises have resolved, 
* or if the input iterable contains no promises. 

* It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, 
* and will reject with this first rejection message / error.
*/
