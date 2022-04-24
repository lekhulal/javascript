getJson('https://jsonplaceholder.typicode.com/todos/1')
.then(data => {
	console.log('Fetch Response#1 : ', data)
	return getJson('https://jsonplaceholder.typicode.com/todos/2')	
})	
.then(data => {
	console.log('Fetch Response#2 : ', data)	
})
.catch(error => {
	console.log('Error: ', error.message)
})

function getJson(url) {
	return fetch(url)
	.then( res => res.json() )		
}
