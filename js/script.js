"use strict";

const input = document.getElementById("input"), // input/output button
    numbers = document.querySelectorAll(".numbers div"), // number buttons
    operators = document.querySelectorAll(".operators div"), // operator buttons
    result = document.getElementById("result"), // equal button
    clear = document.getElementById("clear"); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed



numbers.forEach(function(number){
    number.addEventListener("click", function(e) {
        input.innerHTML += this.innerHTML;
    })  
})

// clear the input on press of clear

clear.addEventListener('click', function() {
    input.innerHTML = " ";
})

operators.forEach(function(operator) {
    operator.addEventListener("click", function() {
        // should not be possible for one operator to immediately follow the next 
        input.innerHTML += this.innerHTML; 
    })
})
 
// remove operators 
// convert numbers to Numbers 
// put into an array 
// remove numbers 
// put operators into an array 
// assign functions to each operator and have results of those functions build onto result total 







// numbers is a NodeList object, we need to make it into an array first, then we can map through it...

// adding click handlers to the calculation buttons

// on click of 'equal' button, perform the mathematical operation

