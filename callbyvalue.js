'use strict'

function one() {
	var a = 100;
	two(a)
	console.log(`One ${a}`);
}

function two(a) {
	a = a + 1;
	console.log(`Two ${a}`)
}

one();

/* integers */

/*
--------------
|two:a = 101 |
--------------
|one:a = 100 |
--------------
|Stack Memory|
--------------
*/