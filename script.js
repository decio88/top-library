const myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  this.info = function info() {
    if (this.readStatus === 'yes') {
      return `${this.title} by ${this.author}, ${this.pages} pages, already read.`;
    }
    return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
  };
}

function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
}

function loopBooks() {
  myLibrary.forEach((book) => console.log(book.info()));
}

function validateForm(event) {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const checkbox = document.querySelector('#isRead');
  let isRead;
  if (checkbox.checked) {
    isRead = 'yes';
  } else {
    isRead = 'no';
  }
  addBookToLibrary(title, author, pages, isRead);
}
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 256, 'yes');

// console.log(theHobbit.info());
