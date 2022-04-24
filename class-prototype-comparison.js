'use strict'
class Button {
	constructor(name) {
		this.button = document.createElement("button");
		this.button.innerHTML = name;
		document.body.appendChild(this.button);
	}

	onClick(fn) {
		this.button.onclick = fn;
	}
}

const btn = new Button('Click Me')
btn.onClick(function() {
	console.log('Clicked')
})

/* --------------- Function Prototype -------------- */

function Buttonfn(name) {
	this.button = document.createElement("button");
	this.button.innerHTML = name;
	document.body.appendChild(this.button);
}

Buttonfn.prototype.onClickfn = function (fn) {
	this.button.onclick = fn;
}

const btnfn = new Buttonfn('Click Fn')

btnfn.onClickfn(function() {
	console.log('Clicked Fn')
})

/*
* Any function can convert into construtor, for that
* create an object for the function with the help of "new"
* Function name will act as Class name, 
* code inside that fn considered as a constructor
*/

/*
* All function have prototype property
* If we add  any function into base fn with the help of prototype property,
* then that fn is similar to class methods
*/