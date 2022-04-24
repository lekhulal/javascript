const btn = document.createElement("button");
btn.innerHTML = "Click";
document.body.appendChild(btn);

const todoData = fetchData('https://jsonplaceholder.typicode.com/todos/1')

function fetchData(url) {
	return new Promise((resolve, reject) => {
		fetch(url)
		.then( res => res.json() )
		.then( data => { resolve(data) })
		.catch( error => { reject(error) })
	})	
}

function showResponse() {
	todoData.then(data => {
		console.log(data)
	},error => {
		console.log(error)
	})
}

btn.onclick = showResponse;
  
