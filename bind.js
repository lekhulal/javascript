'use strcit'
 
const obj = {
	a:1,
	b:5,
	c: function(arg1, arg2) {
		console.log(this)
		console.log(`The given values are ${this.a} and ${this.b}. Arguments are ${arg1} and ${arg2}  `)
	}
}
// const x = obj.c;
// x(10,12);

const x = obj.c.bind(obj)
x(10,12);
 
/*
* ----------------------------------------------------------------------------------------------------
* With the bind() method, an object can borrow a method from another object.
* Bind returns a new function, allowing you to pass in a this array and any number of arguments.
* ----------------------------------------------------------------------------------------------------
*/

/*
The this keyword refers to different objects depending on how it is used:
-In an object method, this refers to the object.
-Alone, this refers to the global object.
-In a function, this refers to the global object.
-In a function, in strict mode, this is undefined.
-In an event, this refers to the element that received the event.
-Methods like call(), apply(), and bind() can refer this to any object.
-------------------------------------------------------------------------------------------
With the bind() method, an object can borrow a method from another object.
Bind returns a new function, allowing you to pass in a this array and any number of arguments.
-------------------------------------------------------------------------------------------
*/
