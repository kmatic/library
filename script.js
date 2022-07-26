let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    let title = prompt('title');
    let author = prompt('author');
    let pages = prompt('pages');
    let status = prompt ('read');

    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    displayBook();
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary);
    }
}
