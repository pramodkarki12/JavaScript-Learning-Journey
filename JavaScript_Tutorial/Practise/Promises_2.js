
// Pretend that this data comes from the server.
const students = [
    {
        name : "John",
        skill : "Python"
    },
    {
        name : "Mary",
        skill : "Java"
    }
]

function enrolledStudent(student) {
    return new Promise(function(resolve, reject) {
        setTimeout(function () {
            students.push(student);
            const error = false;
            if (!error) {
                console.log(`${student.name} has been successfully added`);
                resolve();
            }
            else {
                reject();
            }
        }, 4000);
    });
    
}

function getStudent() {
    setTimeout(function() {
        let str = "";
        students.forEach((student) => {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('std-info').innerHTML = str;
        console.log("Student has been successfully displayed.");
    }, 1000);
}
/*
let newStudent = {name : "Harry", skill : "Python"};
enrolledStudent(newStudent).then(function() {
    getStudent();
}).catch(function() {
    console.log("Some error occured.")
});

*/


let newStudent = {name : "Harry", skill : "Python"};
enrolledStudent(newStudent).then(getStudent).catch(function() {
    console.log("Some error occured.")
});