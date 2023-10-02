const num = 440
console.log(num);

const numb = new Number(50000)
console.log(numb);

// toString
console.log(num.toString());

// toFixed
console.log(numb.toFixed(2)); //Returns a number written with a number of decimals

//toExponential
console.log(num.toExponential());  //Returns a number written in exponential notation
console.log(num.toExponential(10));

//toPrecision
console.log(numb.toPrecision(5)); //Returns a number written with a specified length

//ValueOf
console.log(num.valueOf()); //Returns a number as a number

// parseInt & parseFloat
const newnum = 20.41
console.log(parseInt(newnum));  //Parses its argument and returns a whole number
console.log(parseFloat(newnum));  //Parses its argument and returns a floating point number
