
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

function enrolledStudent(student, callback) {
    setTimeout(function () {
            students.push(student);
            console.log(`${student.name} has been successfully added`);
            callback();
        }, 1000);
}

function getStudent() {
    setTimeout(function() {
        let str = "";
        students.forEach((student) => {
            str += `<li>${student.name}</li>`;
        });
        document.getElementById('std-info').innerHTML = str;
        console.log("Student has been successfully displayed.");
    }, 5000);
}

let newStudent = {name : "Harry", skill : "Python"};
enrolledStudent(newStudent, getStudent);
