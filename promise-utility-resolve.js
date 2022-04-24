const cache = { userId: 1, id: 1, title: 'data from cache', completed: false }

getJson('https://jsonplaceholder.typicode.com/todos/1')
.then(data => {
	console.log('Fetch Response#1 : ', data)
})	
.catch(error => {
	console.log('Error: ', error.message)
})

function getJson(url) {
	if(cache) {
		return Promise.resolve(cache)
	}

	return fetch(url)
	.then( res => res.json() )
}
