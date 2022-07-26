let myLibrary = [];

const addBtn = document.querySelector('.btn');
const cardContainer = document.querySelector('.main')

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    const myTitle = document.querySelector('#title').value;
    const myAuthor = document.querySelector('#author').value;
    const myPages = document.querySelector('#pages').value;
    const readStatus = document.querySelector('#read').value;

    const newBook = new Book(myTitle, myAuthor, myPages, readStatus);
    myLibrary.push(newBook);
    displayBook();
}

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        const newCard = document.createElement('div');
        const newTitle = document.createElement('p');
        const newAuthor = document.createElement('p');
        const newPages = document.createElement('p');
        const newRead = document.createElement('p');

        newTitle.textContent = myLibrary[i].title;
        newAuthor.textContent = myLibrary[i].author;
        newPages.textContent = myLibrary[i].pages;
        newRead.textContent = myLibrary[i].status;

        newCard.classList.add('book-card');
        newCard.appendChild(newTitle);    
        newCard.appendChild(newAuthor);    
        newCard.appendChild(newPages);    
        newCard.appendChild(newRead);
        cardContainer.appendChild(newCard);    
    }
}

addBtn.addEventListener('click', () => addBookToLibrary());
