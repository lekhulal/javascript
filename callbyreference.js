'use strict'

function one() {
	var a = {
		value: 100
	}
	two(a)
	console.log(`One ${a.value}`);
}

function two(a) {
	a.value = a.value + 1;
	console.log(`Two ${a.value}`)
}

one();

/*
* Object / Array / Asting / Set
*/

/*
--------------
|one:a = 101 | => address 123
--------------
|Heap Memory|
--------------

--------------
|two:a = &123| 101
--------------
|one:a = &123| 101
--------------
|Stack Memory|
--------------
*/