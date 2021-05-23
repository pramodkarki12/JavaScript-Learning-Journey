/*
let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont.childNodes);
// console.log(cont.children)
let nodeName = cont.childNodes[5].nodeName;
let nodeType = cont.childNodes[5].nodeType;

console.log(nodeType)

*/

let container = document.querySelector('div.container')
// console.log(container.children[1].children[2].innerText)
// console.log(container.firstElementChild)
// console.log(container.lastElementChild)
// console.log(container.childElementCount)

console.log(container.firstElementChild.parentNode)
console.log(container.firstElementChild.nextElementSibling.nextElementSibling)