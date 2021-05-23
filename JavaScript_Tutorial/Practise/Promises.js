
/*

Promises : 
- resolve
- reject
- pending
*/

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const error = true;
            if (!error) {
                console.log("Function : Your promises has been resolved.");
                resolve();
            }
            else {
                console.log("Function : Your promises has been rejected.");
                reject("Sorry Rejected.");
            }
        }, 2000);
    });
}

func1().then(function() {
    console.log("Pramod : Thanks for resolving.")
}).catch(function(error) {
    console.log("Pramod : Sorry bro, bad luck !!!" + " " + "Reason : " + error);
});

