'use strict'

const obj = {
	a:1,
	b:2,
	c: function(arg1, arg2) {
		console.log(`The given values are ${this.a} and ${this.b}. The arguments are ${arg1} and ${arg2}` )
	}
}
// obj.c(9,5)

// const x = obj.c;
// x(6, 7);

const x = obj.c;
x.apply(obj, [6, 7]);

/*
* ----------------------------------------------------------------------------------------------------
* The apply() method can be used to invoke (call) a method with an owner object as an argument (parameter).
* The apply() method takes arguments as an array.
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

----------------------------------------------------------------------------------------------------
The apply() method can be used to invoke (call) a method with an owner object as an argument (parameter).
The apply() method takes arguments as an array.
----------------------------------------------------------------------------------------------------

The difference is:

The call() method takes arguments separately.
The apply() method takes arguments as an array.

*/