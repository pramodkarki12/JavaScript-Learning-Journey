// let str = 'python';
// let links = document.links;
// console.log(links);
// let href;
// Array.from(links).forEach(function(element) {
//     href = element;
//     if(href.includes(str)) {
//         console.log(href);
//     }
// });


let handler;
handler = document.querySelector('.rounded-circle');
handler.addEventListener('click', function (e) {
    console.log('Clicked');
    const elements = document.createElement('p');
    elements.id = 'mytext'
    let txt = createTextNode = "This is just for fun."
    elements.appendChild(txt);

    handler.appendChild(elements);
})