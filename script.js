
const cardsContainer = document.querySelector(".cards");
const formWrapper = document.querySelector("#form-wrapper")
const addBookForm = document.querySelector(".post-form");
const closeTab = document.querySelector(".close-btn");

addBookForm.addEventListener("click", () => {
    formWrapper.classList.remove("hidden"); // remove hidden to show
});

closeTab.addEventListener("click", () => {
    formWrapper.classList.add("hidden"); // add hidden to hide
});

formWrapper.addEventListener("click", (e) => {
    if (e.target === formWrapper) {
        formWrapper.classList.add("hidden");
    }
});

const myLibrary = [];

class Book {
    constructor(title, id) {
        this.title = title;
        this.id = id;
    }
}

function addBookToLibrary(title) {
    let newBook = new Book(title, crypto.randomUUID())
    myLibrary.push(newBook);
    console.log(`Book: ${title}, added to Library`);
}

function displayBook() {
    myLibrary.forEach((book) => {

        // create new div element to add to HTML
        const div = document.createElement("div");
        div.classList.add("card");
        div.textContent = book.title;
        cardsContainer.appendChild(div);

        console.log("Title: " + book.title);
        console.log("Id: " + book.id);
    });
}

function addNewBook() {
}

addBookToLibrary("Harry Potter");
addBookToLibrary("Intro to JS");
addBookToLibrary("C++ for Beginners");

displayBook();