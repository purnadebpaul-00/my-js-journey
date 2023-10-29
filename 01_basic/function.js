// =============== Function Declarations ======================

/*

function function_name(parameters){
    // code to be executed
}

// === EXM ===
function myFunction(a, b) {
  return a * b;
}

console.log(myFunction(4,5))

*/

// ================= Function Expressions ======================

/*
const function_name = function(parameters){
    // code to be executed
}

// === EXM ===

const myFunction = function (a, b){
    return a * b
}

console.log(myFunction(2,4))
*/

// ==================== Arrow Functions =========================

/*
const function_name = (parameters) => {
    // code to be executed
}

// === EXM ===

const myFunction = (a,b) => {
    return a * b
}
console.log(myFunction(5,6));

*/

// ===================== implicit return ========================

/*
const myFunction = (a,b,c,d) => (a+b+c+d)
console.log(myFunction(1,2,3,4));

// +++++++ we need to write return if we use curly braces and we don't need to write return if we use normal brace ++++++++++++++

*/

// ================== Self-Invoking Functions =====================

/*

(function xyz(parameters) {
    let x = "Hello!!";  // I will invoke myself
    console.log(x);
  })(arguments); //semicolon is must (for end the invoking)


(function() {
    let x = "Hello!!";  // I will invoke myself
    console.log(x);
  })(); 

(()=>{
    let y = "sanju paul"
    console.log(y);
})();

((x,y)=>{
    console.log(x * y);
})(5,6);

*/







