fetch('https://jsonplaceholder.typicode.com/todos/1')
.then( res => res.json() )	
.then(data => {
	console.log('Response#1 : ', data)
	return fetch('https://jsonplaceholder.typicode.com/todos/2')
	.then( res => res.json() )
})	
.then(data => {
	console.log('Response#2 : ', data)	
})
.catch(error => {
	console.log('Error: ', error)
})