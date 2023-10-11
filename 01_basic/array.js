/*


// creating the object with object literals
const students = {
    name : "sanju paul",
    department : "CSE",
    roll : "22070",
    active : true,
    location : "Dhaka",
    "birth year" : "2002",
    mail : "plsanju64@gmail.com"
}

// access object
console.log(students["birth year"]);
console.log(students.name);

// change value

students.mail = "sanjupaul126@gmail.com"
console.log(students.mail);

// fixed an object
Object.freeze(students)
students.mail = "xyz@gmail.com"
console.log(students.mail);

// Adding function in object
students.wellcome = function(){
    console.log(`Hello ${this.department} Studest's`);
}
console.log(students.wellcome());
*/

// object nasting with objects
const User = {
    nameinfo : {
        firstname : "sanju",
        lastname : "paul",
        usernameinfo : {
            username : "plsanju64",
        }
    },
    locationinfo : {
        currentlocation : "Dhaka",
        permalocation : "Dhanmondi"
    }
}
console.log(User);
console.log(User.nameinfo);
console.log(User.nameinfo.usernameinfo);
console.log(User.nameinfo.usernameinfo.username);
console.log(User.locationinfo.permalocation);
