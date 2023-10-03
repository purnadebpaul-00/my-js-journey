// JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

/*const myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());
*/

// const CreatedDate = new Date (year, month, day, hour, minute, second, milliseconds)

const CreatedDate = new Date(2026, 11, 18, 12, 57, 2, 55);
console.log(CreatedDate);
console.log(CreatedDate.toDateString());
console.log(CreatedDate.getDate());
console.log(CreatedDate.getDay());
console.log(CreatedDate.getMilliseconds());

console.log(Date.now());






