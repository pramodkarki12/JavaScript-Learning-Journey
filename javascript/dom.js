/*
Single Element Selector
Mulitiple Element Selector
*/

// Single Element Selector

// let head = document.getElementById('container');
// head = head.childNodes;
// console.log(head);

// let element = document.getElementById('myfirst');
// element = element.className
// element = element.childNodes;
// element = element.parentNode;
// element.style.background = 'blue'
// element.style.fontSize = '60px'
// element.innerText = "I am coding"
// element.innerHTML = "<b>I am coding</b>"
// console.log(element);

// let sel = document.querySelector('#myfirst')
// // sel = document.querySelector('.child')
// sel = document.querySelector('div')
// sel.style.color = 'green'

// console.log(sel)


// Multiple Element Selector
let element = document.getElementsByClassName('child')
// element = document.getElementsByClassName('container')
// element = document.getElementsByTagName('div')
// console.log(element)

Array.from(element).forEach(element => {
    console.log(element)
    element.style.color = 'green'
});