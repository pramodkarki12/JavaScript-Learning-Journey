let today = new Date();
console.log(today)

// let otherDate = new Date("8-4-2020 05:23:12")
// otherDate = new Date(12/12/2020);
// // otherDate = new Date(0);
console.log(today.toDateString())
a = today.getDate();
a = today.getMonth();
console.log(a);

today.setDate(23)
today.setMonth(2)

console.log(today)
