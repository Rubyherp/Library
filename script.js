
const cardsContainer = document.querySelector(".cards");

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