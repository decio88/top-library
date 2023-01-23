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

// function to add book divs
function displayBook(book) {
  const bookContainer = document.querySelector('.books-container');
  const bookCard = document.createElement('div');
  bookCard.classList.add('book');
  const bookContent = document.createElement('div');
  bookContent.classList.add('book-content');
  const title = document.createElement('h3');
  title.classList.add('title');
  const author = document.createElement('p');
  author.classList.add('author');
  const pages = document.createElement('p');
  pages.classList.add('pages');
  const readStatus = document.createElement('p');
  readStatus.classList.add('read-status');
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-book');
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  if (book.readStatus === 'yes') {
    readStatus.textContent = 'Already read';
  } else {
    readStatus.textContent = 'Not yet read';
  }
  deleteBtn.textContent = 'Remove book';
  bookContent.appendChild(title);
  bookContent.appendChild(author);
  bookContent.appendChild(pages);
  bookContent.appendChild(readStatus);
  bookCard.appendChild(bookContent);
  bookCard.appendChild(deleteBtn);
  bookContainer.appendChild(bookCard);
}
function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
  displayBook(book);
}

// function updateBooks() {
//   myLibrary.forEach((book) => displayBooks(book));
// }

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
  document.querySelector('form').reset();
  // need to refresh book display after display
}
// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 256, 'yes');

// console.log(theHobbit.info());
