const ar = new Array('str1', 1, 2, 3, [4, 5, 3, 'name'])
// console.log(ar)

container = document.getElementById('container');
ar[3] = "Pramod"
container.innerHTML = ar[3]

console.log(typeof(ar))

console.log(ar.length)
console.log(Array.isArray(ar))
// Accessing the index of elements
let index = ar.indexOf('Pramod')
console.log("The index is  : " + index)


ar.push('Last');
ar.unshift('First')
console.log(ar);

ar.pop();
ar.shift();
console.log(ar);


array = ['Orange', 'Apple', 'Mango']
ar[3] = array
console.log(ar)

ar.splice(1, 3, 'This is the replacement array elements')
ar.reverse()
console.log(ar)


name = ['Pramod', 'Harry', 'Subash']
cast = ['Karki', 'Khadka', 'Regmi']
num1 = [1, 3, 4, 5]
num2 = [4, 5, 6, 2]
console.log(name + " " + cast)

num1 = num1.concat(num2);
console.log(num1)

console.log(num1.sort())

myobj = {
    name : 'Pramod Karki',
    address : 'Nepalgunj',
    postal : 12345,
    contact : 983472364
}

for (let key in myobj) {
    console.log(`Key is : ${key} and its value is : ${myobj[key]}`)
}

fruit = ['Orange', 'Apple', 'Mango']
len = fruit.length
let txt;
for (i = 0; i < len; i++) {
    txt += `<ul><li>${fruit[i]}</li></ul>`
    document.getElementById('container').innerHTML = txt;
}


console.clear();

var person = ['Shyam', 'Hari', 'Ram', 'Sita', 'Gita']
person.forEach(myFunction);

function myFunction(item, index) {
    document.querySelector('.loop').innerHTML += index + ":" + item + '<br>'
}

var number = [1, 3, 5, 6, 7];
number.forEach(myfunc);

function myfunc(item, index, array) {
    array[index] = item * 10;
    // array[index] = item
}
document.querySelector('.loop').innerHTML = number;


// OBJECTS 
const persons = {
    fName : 'Pramod', 
    lName : 'Karki',
    id : 2324,
    fullName : function(age) {
        return this.fName + " " + this.lName + ' and age is : ' + age;
    }
}
name = persons.fullName(20);
console.log(name);


// String
const str = 'My name is Pramod Karki.'
console.log(str.search('Pramod'))

// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

console.log(str.slice(2, 7))
console.log(str.substring(3, 7))
console.log(str.substr(3, 10))
console.log(str.substr(-7))

str1 = 'Hello World'
console.log(str.replace(str, str1))
console.log(str.replace('Karki', 'Kharel'))

text = 'Orange, Apple, Mango';
text2 = text.toLowerCase();
console.log(text2)
console.log(text2.toUpperCase())

console.log(text.split(','))
p = 'Pramod'
s = p.split("")
console.log(s);
j = s.join("");
console.log(j);