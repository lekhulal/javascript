const results = getData()


results.then( data => {
	console.log('results', data)
})

async function getData() {
	try {
		const dat = await fetch("https://jsonplaceholder.typicode.com/todos/5");
		console.log('dat', dat)
		const jsonData = await dat.json()
		console.log('jsonData', jsonData)
		return jsonData
	} catch(e) {
		console.log(e.message)
		throw e.message
	}
}