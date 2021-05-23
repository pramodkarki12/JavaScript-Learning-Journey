/*
let myBtn = document.getElementById('myBtn');

// div with the id content
let content = document.getElementById('content');

function getData() {
    console.log("Started getData");
    url = 'pramod.txt';
    fetch(url).then((response) => {
        console.log("Inside first then")
        return response.text();
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);
    }); 
}

console.log("Before running getData");
getData();
console.log("After running getData");

*/


let myBtn = document.getElementById('myBtn');

// div with the id content
let content = document.getElementById('content');

function getData() {
    console.log("Started getData");
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        console.log("Inside first then")
        return response.json();
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);
    }); 
}



function postData() {
    console.log("Started getData");
    url = "http://jsonplaceholder.typicode.com/posts";
    data =  {"name" : "pramod", "salary" : "1245454", "age" : "23"};
    params = {
        mehtod : "post", 
        headers : {
            'Content-Type' : 'application/json'
        },

        // If data was string then we donot need to do JSON.stringify(data) because convert this into JSON string.
        body : data
    }
    fetch(url.params).then((response) => response.json())
    .then((data) => console.log(data)); 
}

// console.log("Before running getData");
// getData();
// console.log("After running getData");

postData();