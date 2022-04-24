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
}

const btn = new GreenButton('Clickme')
btn.onClick(function() {			
	console.log('Clicked')
})

/*
* @ USECASE
* Parent class named as Button
* Without make any changes on Parent class, 
* Change the button background color 
* while clicking on the button
*/