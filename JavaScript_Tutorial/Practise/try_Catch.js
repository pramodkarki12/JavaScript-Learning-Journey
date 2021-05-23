// Pretend that this data is coming from server as response


// let a = "Rajesh Dai";
// a = undefined;
// if (a == undefined) {
//     throw new Error("This data is undefined.");
// }

// else {
//     console.log("This is defined")
// }





try {
    console.log("I am inside the try method.");
    fakeFunction();

} catch (e) {
    console.log('Error Occured.');
    console.log(e);
    // console.log(e.name);
    // console.log(e.message);
} finally {
    console.log('Finally we will run this.');
    
}
console.log("Program continues....");
