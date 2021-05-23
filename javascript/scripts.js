console.log("How are you?");
console.log({pramod:'this', marks:34});
console.table({pramod:'this', marks:34});
console.warn({pramod:'this', marks:34});
//console.clear();

console.timeEnd();

console.assert(200 > 189, 'This is not possible')
console.error('This is an error.')
// console.clear()


/*
    Variables declaration 

    // var, let, const
*/

//var
var name = `Pramod's`
console.log(name)

var marks = 45;
var channels;
channels = "Codewithharry"
console.log(marks)
console.log(channels)

/*
Rules for creating JavaScript variables
1. cannot start with the numbers
2. can start with letter, numbers or $
3. Case Sensitive
*/

var $city = 'Kathmandu';
console.log($city)

// const
const OwnersName = 'Hari Ram';
// OwnersName = "Shyam"
console.log(OwnersName) 
const fruit = 'Orange';
console.log(fruit)


// let
let city = 'Pokhara'
{
    let city = 'Nepalgunj'
    console.log(city)
}
city = "Surkhet"
console.log(city)


const arr1 = [12, 2, 4,5, 6];
arr1.push(23);
console.log(arr1)
/*  Most common Programming case types :
    1. camelCase 
    2. kebab-case 
    3. snake_case     
    4. PascalCase 
*/
console.clear();



/*
    DATA TYPE(string, numbers, boolean, null, undefined, symbol), 
    AND REFERENCES TYPE(Arrays, objects literals, functions, dates)
*/

// String 
let userName = "Pramod";
console.log(userName);
console.log("UserName type is " + (typeof(userName)));

//Numbers
let num = 32
console.log(num)
console.log("DataType type is " + (typeof(num)));

// Boolean
let isDriver = true;
console.log(isDriver)
console.log("DataType type is " + (typeof(isDriver)));

// null
let nullVar = null;
console.log(nullVar)
console.log("DataType type is " + (typeof(nullVar)));  // Primitive type

// undefined
let undef = undefined;
console.log(undef)
console.log("DataType type is " + (typeof(undef)));

// Arrays
myarr = [1,3,5,6, false, "String"];
console.log(myarr);
console.log("DataType type is " + (typeof(myarr)));

// Objects Literals
let rollNo = {
    harry: 34, 
    pramod : 40, 
    kishwor : 44
}
console.log(rollNo)
console.log("DataType type is " + (typeof(rollNo)));

// Functions
function findName() {
}
console.log("DataType type is " + (typeof(findName)));

// Date
let date = new Date()
console.log(typeof(date))
console.clear()
