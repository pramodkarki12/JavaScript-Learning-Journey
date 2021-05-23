// console.log("Welcome to the Notes App.");

showNotes(); // display the notes even after reloading

// IF a user add a note, it will store the note in local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes); // parse the string into array
    }
    notesObj.push(addText.value); // add the input string into notes
    localStorage.setItem("notes", JSON.stringify(notesObj)); // update the local Storage for storing string
    addText.value = ""; // clear the screen 
    // console.log(notesObj)
    showNotes();
});

/*
Function
to show elements
from 
LocalStorage
*/
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes); // parse the string into array
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
            `
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show Use "Add a Note" section above to add a Notes.`
    }
}

/*
Function
to delete 
notes from 
LocalStorage
*/
function deleteNote(index) {
    console.log("I am deleting." + index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes); // parse the string into array
    }
    notesObj.splice(index, 1);  // delete the only one element according to the index element 
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

let searchTxt = document.getElementById('searchTxt');
searchTxt.addEventListener("input", function() {
    let inputVal = searchTxt.value.toLowerCase();
    // console.log("Input event fired.", inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element, index) {
        let cardTxt = element.getElementsByTagName('p')[0].innerText;
        // console.log(cardTxt);
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });


})