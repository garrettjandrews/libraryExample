class Book {
  constructor(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
  }

  toggleStatus() {
    if (this.readStatus === "Read") {
      this.readStatus = "Not Read"
    } else {
      this.readStatus = "Read"
    }
  }
}

/* replaced with class syntax above
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

Book.prototype.toggleStatus = function() {
  if (this.readStatus === "Read") {
    this.readStatus = "Not Read"
  } else {
    this.readStatus = "Read"
  }
}
*/

function addBookToLibrary(book, library) {
  library.push(book);
  book.index = library.indexOf(book)
  console.log("Book added in position " + book.index)
}

function stopDisplayingLibrary() {
  let libraryContainer = document.querySelector('.library');
  while (libraryContainer.firstChild) {
    libraryContainer.removeChild(libraryContainer.firstChild)
  }
}

function displayLibrary(library) {
  let libraryContainer = document.querySelector('.library');
  library.forEach((book) => {
    newLibraryCard = document.createElement('div');
    newLibraryCard.classList.add('library-card');

    newCardTitle = document.createElement('p');
    newCardTitle.textContent = `Title: ${book.title}`;
    newLibraryCard.appendChild(newCardTitle);

    newCardAuthor = document.createElement('p');
    newCardAuthor.textContent = `Author: ${book.author}`;
    newLibraryCard.appendChild(newCardAuthor);

    newCardPages = document.createElement('p');
    newCardPages.textContent = `Pages: ${book.pages}`;
    newLibraryCard.appendChild(newCardPages);

    newCardReadStatus = document.createElement('p');
    newCardReadStatus.textContent = `Read Status: ${book.readStatus}`;
    newLibraryCard.appendChild(newCardReadStatus);

    newCardChangeStatusButton = document.createElement('button');
    newCardChangeStatusButton.classList.add("change-status-button");
    newCardChangeStatusButton.textContent = "Change Read Status";
    newCardChangeStatusButton.fontWeight = "bold";

    newCardChangeStatusButton.addEventListener("click", () => {
      book.toggleStatus();
      stopDisplayingLibrary();
      displayLibrary(library);
    })

    newLibraryCard.appendChild(newCardChangeStatusButton);

    newCardRemoveButton = document.createElement('button');
    newCardRemoveButton.classList.add("remove-button");
    newCardRemoveButton.textContent = "Remove Card";

    newCardRemoveButton.addEventListener("click", () => {
      console.log(library.indexOf(book))
      library.splice(library.indexOf(book), 1);
      stopDisplayingLibrary();
      displayLibrary(library);
    })

    newLibraryCard.appendChild(newCardRemoveButton);

    libraryContainer.appendChild(newLibraryCard);
  })
}

function openBookForm() {
  addBookForm = document.querySelector(".add-book-form")
  addBookForm.style.display = "flex";
  addBookForm.style.flexDirection = 'column';
}

function closeBookForm() {
  addBookForm = document.querySelector(".add-book-form")
  addBookForm.style.display = "none";
}


let addBookButton = document.getElementById('add-book-button');
addBookButton.addEventListener('click', () => {
  openBookForm()
})

let submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', () => {
  let newTitle = document.getElementById('inputted-title').value;
  let newAuthor = document.getElementById('inputted-author').value;
  let newPages = document.getElementById('inputted-pages').value;
  let newReadStatus = document.getElementById('inputted-read').value;
  let newBook = new Book(newTitle, newAuthor, newPages, newReadStatus);
  addBookToLibrary(newBook, myLibrary);
  stopDisplayingLibrary();
  displayLibrary(myLibrary);
  closeBookForm()
})

let myLibrary = [];

harryPotter1 = new Book("Harry Potter", "JK Rowling", 300, "Read");
addBookToLibrary(harryPotter1, myLibrary);

harryPotter2 = new Book("Paradise Lost", "Milton", 500, "Read");
addBookToLibrary(harryPotter2, myLibrary);

harryPotter3 = new Book("The Iliad", "Homer", 723, "Read");
addBookToLibrary(harryPotter3, myLibrary);


displayLibrary(myLibrary)