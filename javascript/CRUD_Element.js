let element = document.createElement('li')
let text = document.createTextNode("Hello this is created from javascript.")
element.append(text)

// Add a class Name to the li element
element.className = 'child1'
element.id = 'createdLi'
element.setAttribute('title', 'mytitle')
// element.innerHTML = "<b>Hello this is created from javascript.</b>"


// inserting it into the html 
let ul = document.querySelector('ul.this')
ul.appendChild(element)
console.log(ul)
console.log(element)

/*
Replacing an element
*/
let elem2 = document.createElement('h3')
elem2.id = 'elem2'
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode)
// element.replaceWith(elem2);
let rep = document.querySelector('div.no');
rep.replaceWith(elem2);

let myul = document.querySelector('#myul');
myul.replaceChild(element, document.getElementById('fui'))

/*
Removing the element
*/
myul.removeChild(document.getElementById('lui'));