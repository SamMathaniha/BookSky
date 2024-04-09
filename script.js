// selecting popopbox, overlay and button
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popupBox");
var btnpopup = document.getElementById("add-popup-button");

btnpopup.addEventListener("click", function(){
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

// cancel button
var cancelbtn = document.querySelector(".cancelbtn");

cancelbtn.addEventListener("click", function(event){
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

// select container, add book, book title, book author, book description
var container = document.querySelector(".container");
var addbtn = document.querySelector(".addbtn");
var bookTitle = document.getElementById("book-title-input");
var bookAuthor = document.getElementById("book-Author-input");
var bookDescription = document.getElementById("book-description-input");
var bookForm = document.getElementById("book-form"); // Reference to the form

addbtn.addEventListener("click", function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `<h2>${bookTitle.value}</h2>
    <h5>${bookAuthor.value}</h5>
    <p>${bookDescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`;

    container.appendChild(div);
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";

    // Clear the form fields after adding a book
    bookTitle.value = "";
    bookAuthor.value = "";
    bookDescription.value = "";
});

function deletebook(event){
    event.target.parentElement.remove();
}
