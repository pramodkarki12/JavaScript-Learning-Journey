/*
    Type Conversion and Coercion
*/
console.log("Welcome to the Tutorial 5")

let myVar;
myVar = 34
// convert into number into string
myVar = String(34)
console.log(myVar, typeof(myVar))

let booleanVar = true;
// convert into boolean into string
booleanVar = String(booleanVar);
console.log(booleanVar, typeof(booleanVar));

let dateVar = new Date();
// convert into date into string
dateVar = String(dateVar);
console.log(dateVar, typeof(dateVar));

let arr = String([1,2,3,4,5]);
// convert into array into string
// arr = String(arr);
console.log(arr.length, typeof(arr));

let i = 8;
console.log(i.toString())

// Number Function
let str1 = Number("1234")
str1 = Number(true)
str1 = Number(['2','3'])
console.log(str1, typeof(str1));

let num1 = parseInt('23.45')
console.log(num1, typeof(num1));

let num2 = parseFloat('23.9032');
console.log(num2, typeof(num2));

console.log(num2.toFixed(2), typeof(num2));  // prints the 2 digits floating number


/*
    Type Coercion
*/
let myString = "546"
let myNum = 32;
console.log(myString + myNum);

console.clear()


console.log("Welcome to the Tutorial 6.")


const person = "Harry";
const greeting = "Good Morining";
console.log(person + ' ' + greeting);
// Concat
let html = "<h1>This is the heading.</h1>" + 
            "<p>This is my paragraph</p>.";

html = html.concat("this",'str2');
console.log(html);

console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

// Indexing
console.log(html[10]);

console.log(html.indexOf('heading'));
console.log(html.lastIndexOf('<'));

// slicing
console.log(html.charAt(7));

console.log(html.endsWith('hdaskhf'));
console.log(html.includes('ing'));
console.log(html.substring(0, 4))

console.log(html.slice(0,10))
console.log(html.split('.'))
console.log(html.replace('is the', 'it'))


let fruit1 = 'Orange';
let fruit2 = "Mango";
let myHtml = `Hello ${name}
                <h1> This is a "heading". </h1>
                <p> You like ${fruit1} and ${fruit2}</p>`;
document.body.innerHTML = myHtml;                
