'use strict'

class Button {
	constructor(name) {
		console.log('Parent Constructor')
		this.button = document.createElement('button')
		this.button.innerHTML = name
		document.body.appendChild(this.button)
	}

	onClick(fn) {
		console.log('Parent')
		this.button.onclick = fn
	}
}

class GreenButton extends Button {
	constructor(name) {
		super(name);
	}

	onClick(fn) {
		console.log('Child')
		super.onClick(function() {
			this.button.style.background = "green"
			fn()
		}.bind(this));		
	}

	printMe() {
		console.log('Printed!')
	}
}

const btn = new GreenButton('Clickme')
btn.onClick(function() {			
	console.log('Clicked')
})
btn.printMe();


/* --------------- Function Prototype -------------- */
//Parent
function Buttonfn(name) {
	this.buttonfn = document.createElement("button");
	this.buttonfn.innerHTML = name;
	document.body.appendChild(this.buttonfn);
}
//Parent onClick
Buttonfn.prototype.onClickfn = function (fn) {
	this.buttonfn.onclick = fn;
}

//Child
function GreenButtonfn(name) {
	Buttonfn.call(this, name);
}

//Inheritance concept
GreenButtonfn.prototype = Object.create(Buttonfn.prototype)

GreenButtonfn.prototype.gonClickfn = function(fn) {
	Buttonfn.prototype.onClickfn.call(this, () => {
		this.buttonfn.style.background = "green"
		fn()
	})
}

GreenButtonfn.prototype.printMe = () => {
	console.log('Printed Fn')
}

const gbtnfn = new GreenButtonfn('Click Fn')
gbtnfn.gonClickfn(function() {
	console.log('Clicked Fn')
})

gbtnfn.printMe();

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