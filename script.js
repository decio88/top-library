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
function displayBook(book, id) {
  const bookContainer = document.querySelector('.books-container');
  const bookCard = document.createElement('div');
  bookCard.classList.add('book');
  bookCard.setAttribute('data-id', id);
  const bookContent = document.createElement('div');
  bookContent.classList.add('book-content');
  const title = document.createElement('h3');
  title.classList.add('title');
  const author = document.createElement('p');
  author.classList.add('author');
  const pages = document.createElement('p');
  pages.classList.add('pages');
  const label = document.createElement('label');
  const readStatus = document.createElement('input');
  readStatus.classList.add('read-status');
  readStatus.setAttribute('type', 'checkbox');
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-book');
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  label.textContent = 'Have you read it?';

  if (book.readStatus === 'yes') {
    readStatus.checked = true;
  } else {
    readStatus.checked = false;
  }
  deleteBtn.textContent = 'Remove book';
  deleteBtn.setAttribute('data-id', id);
  deleteBtn.setAttribute('onclick', 'deleteBook(this.getAttribute("data-id"))');
  bookContent.appendChild(title);
  bookContent.appendChild(author);
  bookContent.appendChild(pages);
  bookContent.appendChild(label);
  bookContent.appendChild(readStatus);
  bookCard.appendChild(bookContent);
  bookCard.appendChild(deleteBtn);
  bookContainer.appendChild(bookCard);
}

function deleteBook(id) {
  // const bookDivs = document.querySelectorAll('.book');
  const bookDeleted = document.querySelector(`div[data-id="${id}"]`);
  bookDeleted.remove();
  myLibrary.splice(id, 1);
}

function addBookToLibrary(title, author, pages, readStatus) {
  const book = new Book(title, author, pages, readStatus);
  myLibrary.push(book);
  const id = myLibrary.indexOf(book);
  displayBook(book, id);
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
  document.querySelector('form').reset();
}

// update readStatus
