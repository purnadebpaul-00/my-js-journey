/* ===========array declaration, index access, adding or changing values =========

let myarr = [10, 12, 18, 25, 34, null, false, "nothing"]
let myarr_1 = new Array(20,52,84,73)
// console.log(myarr, typeof myarr);
myarr[5]=56 // changing the value of an array
myarr[8]=100 //adding the value of an array
console.log(myarr[0]);
console.log(myarr[1]);
console.log(myarr[2]);
console.log(myarr[3]);
console.log(myarr[4]);
console.log(myarr[5]);
console.log(myarr[6]);
console.log(myarr[7]);

console.log(myarr, typeof myarr, myarr.length);
console.log(typeof myarr[6]);
console.log(myarr_1, typeof myarr_1);

*/


// ============= array methods =============== 



let num1 = [1, 2, 3, 4, 5]
let num2 = [6, 7, 8, 9, 10]

// Array length
console.log(num1.length);  //returns the length (size) of an array

// Array toString()
let a = num1.toLocaleString()  //converts an array to a string of (comma separated) array values
console.log(a, typeof a);  

// Array pop()
let b = num1.pop()   // change the real arry, removes the last element from an array, return the pop element
console.log(b, num1);   

num1[4]=5 // adding 5 because the real array is changed 
// console.log(num1);

// Array push()  
let c = num1.push("new value") // change the real arry, adds a new element to an array (at the end), return the new length
console.log(c, num1);

num1.pop()
console.log(num1);

// Array shift()
let d = num2.shift(); //change the real arry, removes the first array element and "shifts" all other elements to a lower index, return the pop element
console.log(d, num2); 

//Array unshift()
let e = num2.unshift(6); //change the real arry, adds a new element to an array (at the beginning), and "unshifts" older elements, return the new array length
console.log(e, num2);

// Array join()
console.log(num2.join(" - "));  // convert to string and joins all the array elements by a separator 

// Array delete()
// let f = delete num2[0]
// console.log(f, num2);

// Array concat()
let g = num1.concat(num2);  //creates a new array by merging (concatenating) existing arrays
console.log(g);

// Array flat()
let newarr = [1, 2, 3, [4, 5], 6, "sanju", ["paul", 10,200 ,10, 20], 40]  //creates a new array with sub-array elements concatenated to a specified depth
console.log(newarr.flat());

// Array slice()
let newar = [20, 10, 30, 50, 40]
let ab = newar.slice(0,2)
console.log(ab, newar);

// Array splice()
let splicearr = [10, 20, 30, 40, 50, 80]
let bc = splicearr.splice(0,2)
console.log(bc,splicearr);



// =========== Sorting an Array ==============

//sort() 
let arrr = [500, 10, 5, 411, 60, 87, 11, 25]
let gg = arrr.sort()
console.log(gg, arrr);   // sorts an array alphabetically, change the real array

// Reversing an Array
let ar_rr = [500, 10, 5, 411, 60, 87, 11, 25]
console.log(ar_rr.reverse());

// Numeric Sort
let ar_rr1 = [500, 10, 5, 411, 60, 87, 11, 25]
console.log(ar_rr1.sort(function name(a,b) {
    return a - b
}));

let ar_rr2 = [500, 10, 5, 411, 60, 87, 11, 25]
console.log(ar_rr1.sort(function name(a,b) {
    return b - a
}));


let isarray = [50, 24, 82, 20, 40, 62, "new", 8000, "sanju"]
let sortsthis = isarray.sort(function name(x,y) {
    return y-x 
})

console.log(isarray);







