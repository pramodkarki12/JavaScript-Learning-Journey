
// async returns the promise

async function display() {
    console.log("Inside a display function");
    url = 'https://api.github.com/users';
    const response = await fetch(url);
    console.log("Before response");
    const users = await response.json();
    console.log("Users successfully resolved.")
    return users;
    // return "Hi Pramod";
}

console.log("Before calling p");
let p = display();
console.log("After calling p")
console.log(p);
p.then((data) => console.log(data));
console.log("Last line of this js file")
