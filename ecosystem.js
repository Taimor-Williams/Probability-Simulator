console.log("hello");
// world building
function factorial(A) {
	if (A == 0)
		return 1;
	console.log("A: " + A)
	var list = [A];
	for (var i = 0; i < A; i++) {
		list.push(A - i - 1);
	}
	var value = 1
	for (var r = 0; r < A; r++) {
		value = value * list[r]
	}
	console.log(list)
	console.log(value)
	return value;
}

//Test case for function Factrorial
// exp_a = 120
// A = 5
// output = factorial(A)

// if (elsexp_a == output){
// 	print true
// }
// else{
// 	print false
// }
// Finds the factorial of whatever numbver you enter by creating an 
//array with the values of the factortial in each section then 
//multiplying the cells together
function combination(A, B) {
	if (A-B-1 <0)
		return "invalid result"
	var value = factorial(A) / (factorial(B) * (factorial(A - B)))
	return value
}
// finds the combination of the values A, B 


function permutation(A, B) {
	if (A-B-1 <0)
		return "invalid result"
	var value = factorial(A) / (factorial(A - B))
	return value
}


var submitButton = $(".submit")
// assign the value from jqueery 
submitButton.on("click", onSubmit)
// activates the ability to input wehen selected
function onSubmit(e) {
	console.log(e.target)
	console.log(e.type)
	e.preventDefault()
	var A = $(".A")[0].value
	var B = $(".B")[0].value
	// var A = document.getElementById("A").value;
	// var B = document.getElementById("B").value;
	console.log(A)
	console.log(B)
	C = combination(A, B)
	D = permutation(A, B)
	console.log(C)
	console.log(D)

	var thisguyC = `
	<div style="
    display: block;
    left: 25vw;
    background: linear-gradient(red, yellow);
    border-radius: 4px;
">the combination of ${A}, ${B} is ${C}  </div>`
	var thisguyD = `
	<div style="
    display: block;
    left: 25vw;
    background: linear-gradient(red, yellow);
    border-radius: 4px;
">the permutation of ${A}, ${B} is ${D}  </div>`



	$(document.body).append(thisguyC)
	$(document.body).append(thisguyD)
}
// assigns value of A to the html element with class A. That value is stored
//in the 0 first cell so grabv from there then repeat with B. 
//Assign the value of C, and D to the combination and permutation respectively.
//appends all the values to the documemnt body and arranges it nicely with CSS 


