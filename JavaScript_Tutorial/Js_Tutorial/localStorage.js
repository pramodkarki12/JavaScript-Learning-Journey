localStorage.clear()
// const person1 = localStorage.setItem("name", ["Pramod", "Karki"])

// const getName = localStorage.getItem("name")
// console.log(typeof getName)

// Local Storage

const array = ['Name', 'Age', 12, 45, 89.56, true]
localStorage.setItem("check", JSON.stringify(array))  // Here the local storage converts this value into the string 
// JSON.parse() converts the string into array
value = JSON.parse(localStorage.getItem('check'))
console.log(value)
console.log(typeof value)

// Session Storage
const array1 = ['Name', 'Age', 12, 45, 89.56, true]
sessionStorage.setItem("scheck", JSON.stringify(array))  // Here the local storage converts this value into the string 
// JSON.parse() converts the string into array
value1 = JSON.parse(sessionStorage.getItem('scheck'))
console.table(value1)
console.log(typeof value1)