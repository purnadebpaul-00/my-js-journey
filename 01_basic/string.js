/* =========== string interpolation =========

let FirstName = "Sanju";
let LastName = "Paul";
let Age = 22;
let Study = "Computer Science and Engineering";
let School = "IST";

console.log(`Hello my name is ${FirstName} ${LastName} currently i'm ${Age} and study in ${Study} at ${School}`);

*/

/* =============== some string methods ==================

const FirstName = "sanjupaul";
console.log(FirstName.length);
console.log(FirstName.toUpperCase());
console.log(FirstName.indexOf("j"));
console.log(FirstName.charAt(5));


const specialfortrim = "  sanju  ";
console.log(specialfortrim);
console.log(specialfortrim.trim());  //trim is only work to remove whitespaces


const url ="https://sanjupaul.com/sanju%20paul";
const NewUrl ="https://sanjupaul.com/sanju%20paul%20blog%20readmore";
console.log(url);
console.log(url.replace("%20", "-"));
console.log(NewUrl);
console.log(NewUrl.replace(/%20/g, "-"));

*/

// ============= some string methods ================

let StringOne = "institute of science and technology";
let StringTwo = "New Model Degree Collage"

// length
console.log(StringOne.length)

// Slice 
console.log(StringOne.slice(0,5));  //The last index to be given will be counted up to one index earlier

// Substring
console.log(StringTwo.substring(0,9)); //same as slice

// Substr
console.log(StringOne.substr(0,9)); //The difference is that the second parameter specifies the length of the extracted part.

// Replace
console.log(StringTwo.replace(" ", "-"));

// ReplaceAll
console.log(StringTwo.replaceAll(/ /g, "-"));

// toUpperCase
console.log(StringOne.toUpperCase());

// toLowerCase
console.log(StringTwo.toLowerCase());

// concat
console.log(StringOne.concat(StringTwo)); //concat() joins two or more strings:

// trim
let ajaira = "    sanju paul    "
console.log(ajaira.trim())  //The trim() method removes whitespace from both sides of a string:

// charAt
console.log(StringOne.charAt(2));  //The charAt() method returns the character at a specified index (position) in a string:

// charCodeAt
console.log(StringTwo.charCodeAt(0));  //The charCodeAt() method returns the unicode of the character at a specified index in a string:

// split
console.log(StringOne.split(" "));  //A string can be converted to an array with the split() method:
                                    //If the separator is "", the returned array will be an array of single characters:

// indexOf
console.log(StringOne.indexOf("t"));  //The indexOf() method returns the index (position) the first occurrence of a string in a string:

// lastIndexOf
console.log(StringOne.lastIndexOf("te"));  //The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

// search
console.log(StringOne.search("te")); //The search() method searches a string for a string (or a regular expression) and returns the position of the match:

// match
console.log(StringOne.match("te"));

// startsWith
console.log(StringTwo.startsWith("New"));

// endsWith
console.log(StringTwo.endsWith("model"));









