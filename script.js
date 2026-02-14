const cardsContainer = document.querySelector(".cards");
const formWrapper = document.querySelector("#form-wrapper");
const addBookForm = document.querySelector(".post-form");
const closeTab = document.querySelector(".close-btn");
const submitBtn = document.querySelector(".submit-btn");

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

submitBtn.addEventListener("click", () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const status = document.querySelector("input[name='status']:checked");

  if (title && author && status) {
    const newBook = new Book(title, author, status.value);
    addBookToLibrary(newBook);

    createCard(newBook);

    // Clear form
    document.querySelector(".form-details").reset();

    // Close form
    formWrapper.classList.add("hidden");

  } else {
    alert("Please fill in all fields");
  }
});

cardsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("card-remove")) {
        const card = e.target.closest(".card");
        card.remove();
    }
})

const myLibrary = [];

class Book {
  #title;
  #author;
  #status;

  constructor(title, author, status) {
    this.#title = title;
    this.#author = author;
    this.#status = status;
  }

  get title() {
    return this.#title;
  }
  get author() {
    return this.#author;
  }
  get status() {
    return this.#status;
  }

  set status(value) {
    this.#status = value;
  }
}

function createCard(book) {

  // create new div element to add to HTML
  const div = document.createElement("div");
  const title = document.createElement("div");
  const author = document.createElement("div");
  const status = document.createElement("div");
  const removeBtn = document.createElement("button");

  div.classList.add("card");
  div.appendChild(title);
  title.classList.add("card-title");
  div.appendChild(author);
  author.classList.add("card-author");
  div.appendChild(status);
  status.classList.add("card-status");
  div.appendChild(removeBtn);
  removeBtn.classList.add("card-remove");

  let tempStatus = "";
  if (book.status === "1") {
    status.classList.add("unread");
    tempStatus = "UNREAD";
  } else if (book.status === "2") {
    status.classList.add("reading");
    tempStatus = "READING";
  } else if (book.status === "3") {
    status.classList.add("finished");
    tempStatus = "FINISHED";
  }

  title.textContent = book.title;
  author.textContent = book.author;
  status.textContent = tempStatus;
  removeBtn.textContent = "Remove";

  // Make status clickable to change it
  status.style.cursor = "pointer";
  status.addEventListener("click", () => {
    cycleStatus(book, status);
  });

  cardsContainer.appendChild(div);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function cycleStatus(book, statusElement) {
  if (book.status === "1") {
    book.status = "2";
  } else if (book.status === "2") {
    book.status = "3";
  } else if (book.status === "3") {
    book.status = "1";
  }

  statusElement.classList.remove("unread", "reading", "finished");
  
  let tempStatus = "";
  if (book.status === "1") {
    statusElement.classList.add("unread");
    tempStatus = "UNREAD";
  } else if (book.status === "2") {
    statusElement.classList.add("reading");
    tempStatus = "READING";
  } else if (book.status === "3") {
    statusElement.classList.add("finished");
    tempStatus = "FINISHED";
  }

  statusElement.textContent = tempStatus;
}

function displayBook() {
  cardsContainer.innerHTML = '';
  myLibrary.forEach((book) => {
    createCard(book);
  });
}

const book1 = new Book("Harry Potter", "JK Rowling", "3");
const book2 = new Book("Xiang Neng's Magical Journey", "Xiang Neng", "2");
const book3 = new Book("Xiang Neng's Files !?", "FBI", "1");
const book4 = new Book("Exploring XN's Island", "FBI", "1");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

displayBook();
