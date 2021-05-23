/*

FEW WAYS TO WRITE ASYNCHRONOUS CODE IN JAVASCRIPT
1. Async/await
2. Callbacks
3. Promises

*/

setTimeout(() => {
    for (let index = 0; index < 45; index++) {
        const element = index;
        console.log("This is the index number" + index);
    }
    
}, 5000);

console.log("Done Printing.")