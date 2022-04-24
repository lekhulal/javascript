// Global declaration - global var variable stores in window object.
// var location = "hello"
// It will try to redirect to hello
// window.location = "hello"
/*
* var location is similar to window.location
* global var variable stores in window object.
* var declared inside the function stores in stack
* -----------------------------------------------------
* There is chance to corrupts the window object value
* @ let location = "hello"
* let will not corrupts the window object
* -----------------------------------------------------
*/

/*----------------------------------------------------------------------------*/

function useBfDeclaration() {
	// Hoisting
	// var num ===> js read as: the declared variable will put in top of the code, not values
	console.log(num)
	var num = 12;
	var num;
	var num;
}
useBfDeclaration()

function useAfDeclaration() { //---block start
	// console.log(num1)
	let num1 = 12;
	// let num1;
	// let num1;
} //--- block end
useAfDeclaration() // Cannot access 'num1' before initialization

/*
* var support hoisting
* let will not support
*/

/*
* var support multiple declaration in a scope due to hoisting
* let will not support multiple declaration in a scope
*/

/*
* var-function scope: scope of a var is function
* let-block scope: scope of a let is block - child block will get the scope
*/


/*----------------------------------------------------------------------------*/

