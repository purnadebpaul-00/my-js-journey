//  ================ JavaScript Array filter() =====================


// --The filter() method creates a new array filled with elements that pass a test provided by a function.
// --The filter() method does not execute the function for empty elements.
// --The filter() method does not change the original array.

// const students = [10, 20, 18, 47, 19, 42, 10, 17, 50, 12]
// const audultstudents = students.filter( (ages) => {
//     return ages >=18;
// } )
// console.log(audultstudents);


const arrr = [50, 40, 10, 19, 14, 2, 71, 18, 12, 45, 14]
const newarrr = []
arrr.forEach( (val) => {
    if(val >= 18){
        newarrr.push(val)
    }
} )
// console.log(newarrr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userfilter = books.filter( (val) => {
    return val.genre === "Science"
  } )

  userfilter = books.filter( (val) => {
    return val.edition >=2005 && val.publish >=1995 && val.genre === "Science"
  } )
  userfilter = books.filter((valll)=>{
    return valll.publish >=1995 && valll.edition >=2000 && valll.genre === "History"
  })
  console.log(userfilter);