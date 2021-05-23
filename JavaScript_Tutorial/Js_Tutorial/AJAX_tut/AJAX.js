/*
AJAX stands for Asynchronous JSON and XML

WHY USE AJAX?
1. no page reload/refresh
2. better user experience
3. saves network bandwith
4. very interactive

HOW IT WORKS?
1. AJAX uses XMLHttpRequest object(also called xhr object) to achieve this.
2. Data can be transferred in any format and protocol.(Not always https necessarily.)

*/


let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log("You have clicked the buttonClickHandler")
    // Instiantiate an xhr object
    const xhr = new XMLHttpRequest();


    /*
    (GET) request => send the url and do the task accordingly
    (POST) request => send the url along with some data and respond accordingly with that data.
    */

    //open the object

    /* Get request */
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    /* Post request */
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-Type', 'application/json')

    
    //what to do on progress (optional)
    xhr.onprogress = function() {
        console.log('On progresss');
    }

    // xhr.onreadystatechange= function () {
    //     console.log('ready state is ', xhr.readyState);
    // }

    // what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) { // 200 is HTTP request code
            console.log(this.responseText);
        }
        else {
            console.log("Some error occured.")
        }
    }

    // send the request

    params = `{"name":"test","salary":"123","age":"23"}`;
    xhr.send(params);

    /*
    console.log("I am printing before the http Request because this is asynchronous programmes and http request takes time to load so this line prints at first and then it waits to load the https request and print it.")
    */


}

let popBtn = document.getElementById('populateBtn');
popBtn.addEventListener('click', popClickHandler);

function popClickHandler() {
    console.log("Pop Click Handler");

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    xhr.onload = function () {
        if (this.status === 200) { // 200 is HTTP request code
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj) {
                str += `<li>${obj[key].employee_name}</li>`;
            }
            list.innerHTML = str;
        }
        else {
            console.log("Some error occured.")
        }
    }

    xhr.send();
    console.log("We are done fetching employees");
}




