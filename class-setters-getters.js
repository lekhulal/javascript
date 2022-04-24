class Button {
	name;
	constructor(name) {
		this.name = name;
		this.btn = document.createElement("button");
		this.btn.innerHTML = this.name;
		document.body.appendChild(this.btn);
	}

	set width(w) {
		this.btn.style.width = w + 'px'
	}

	set height(h) {
		this.btn.style.height = h + 'px'
	}

	get width() {
		return this.btn.style.width
	}

	get height() {
		return this.btn.style.height
	}
}

const btn = new Button("Click Me");
btn.width = 100;
btn.height = 100;

console.log(btn.width);
console.log(btn.height);

/*
* -----------------------------------------------------------
* ECMAScript 5 (ES5 2009) introduced Getter and Setters.
* Getters and setters allow you to define Object Accessors
* -----------------------------------------------------------
*/