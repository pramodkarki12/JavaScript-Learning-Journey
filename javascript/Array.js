console.log("Welcome to the Tutorial 7")

const m = [1, 2, 3, 5];
const f = ['orange', 'mango', 'apple'];
const mixed = ['str', 34, [3, 2]];

const array = new Array('str1', 12, 83, 93, 'PineApple');
console.log(mixed[2])
console.log(m)
console.log(f)

console.log(array.length)
console.log(Array.isArray(f))

array[0] = 'Pramod';
console.log(array)

let arrElement = array[0]
console.log("Elements is : " + arrElement);

let index = f.indexOf('apple');
console.log(index);

//Mutating or Modifying arrays
array.push('last'); // add elements at last
array.unshift('First'); // add elements at first
console.log(array);

m.pop(); // remove the last element
m.shift(); // remove the first element
console.log(m);

f.splice(1, 2); // remove the elements ranging between 1 and 2 indices
mixed.reverse(); // reverse the array
console.log(mixed);



let mark1 = [1, 3, 4, 5];
let mark2 = [34, 45];
mark1 = mark1.concat(mark2);
console.log(mark1);

let myobj = {
    'First name' : 'pramod', 
    channel : 'CodeWithHarry',
    isActive : 'true',
    markes : [1, 2, 4, 5]
}
console.log(myobj.isActive)
console.log(myobj['First name'])

for (let key in myobj) {
    console.log(`${key} or object is ${myobj[key]}`);
}
console.clear();