// ============== FOR OF LOOP ================

// for (const iterator of object) {
    
// }
const arr = [1, 2, 3, 4, 50, 25, 78, 94]

for (const i of arr) {
    // console.log(i);
}

const myname = "sanju PAUL"
for (const i of myname) {
    // console.log(i);    
}


// ================= FOR OF LOOP OF MAPS =====================
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.
const amrmap = new Map()

amrmap.set('BD', "Bangladesh")
amrmap.set('IND', "India")
amrmap.set('SL', "Sri Lanka")
amrmap.set('FR', "France")
amrmap.set('FR', "France")  //it takes all unique value

// console.log(amrmap);

for (const i of amrmap) {
    // console.log(i);
}
for (const [i,j] of amrmap) {
    // console.log(`${i} is the short of ${j}`);   // i is key and j is value
}


// ================= FOR OF LOOP for OBJECT ===================== (can't work)

// const myobj = {
//     game1 : "efootball",
//     game2 : "clashofclans",
// }

// for (const [key,value] of myobj) {
//     // console.log(key,value);
// }


// ================= FOR in LOOP for OBJECT ===================== (can work)

const myyyobj = {
    "js" : "javasctipt",
    "cpp" : "c++",
    "cp" : "compititive programming"
}

// for (const key in myyyobj) {
//     console.log(myyyobj[key]);
// }

// for (const key in myyyobj) {
//     console.log(`${key} shortcut for ${myyyobj[key]}`);
// }

// ================= FOREach LOOP for ARRAY ====================
// const myarr = ["js", "rubby", "py", "cpp", "java"]
// myarr.forEach( (v, i, a) => {
//     console.log(v, i, a);
// } )


// ================= FOREach LOOP for object under array ====================

const myooobj = [
    {
        languagename : "javascript",
        filename : "js"
    },
    {
        languagename : "python",
        filename : "py"
    },
    {
        languagename : "Hyper text markup language",
        filename : "html"
    },
]

myooobj.forEach( (value) => {
    console.log(value.filename, value.languagename);
} )
// myooobj.forEach( (value) => {
//     console.log(value.languagename);
// } )