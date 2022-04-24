export function changeBackground() {
	console.log('Animation Start');
	document.body.style.background = "red";
}

export function resetBackground() {
	console.log('Animation Stop');
	document.body.style.background = "none";
}