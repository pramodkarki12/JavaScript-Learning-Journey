const text = document.createElement('div')
text.id = 'text'
const str = "This is the JS created div class.";

text.innerText = str

const heading = document.querySelector('#heading')
heading.appendChild(text);