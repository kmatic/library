let myLibrary = [];

const addBtn = document.querySelector('.btn');
const cardContainer = document.querySelector('.main')

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    toggleStatus() {
        if (this.status === 'NOT READ') {
            this.status = 'READ';
        } else {
            this.status = 'NOT READ';
        }
    }
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
    cardContainer.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const newCard = document.createElement('div');
        const newTitle = document.createElement('h2');
        const newAuthor = document.createElement('p');
        const newPages = document.createElement('p');
        const readBtn = document.createElement('button');
        const delBtn = document.createElement('button');

        newTitle.textContent = myLibrary[i].title;
        newAuthor.textContent = `Author: ${myLibrary[i].author}`;
        newPages.textContent = `Pages: ${myLibrary[i].pages}`;
        readBtn.textContent = myLibrary[i].status;
        delBtn.textContent = 'DELETE';
        delBtn.dataset.indexNumber = i;

        newCard.classList.add('book-card');
        readBtn.classList.add('read-btn');
        delBtn.classList.add('del-btn');

        newCard.appendChild(newTitle);    
        newCard.appendChild(newAuthor);    
        newCard.appendChild(newPages);    
        newCard.appendChild(readBtn);
        newCard.appendChild(delBtn);
        cardContainer.appendChild(newCard);

        delBtn.addEventListener('click', () => {
            let index = delBtn.dataset.indexNumber;
            myLibrary.splice(index, 1);
            displayBook();
        });

        readBtn.addEventListener('click', () => {
            myLibrary[i].toggleStatus();
            displayBook();
        })
    }
}

addBtn.addEventListener('click', () => addBookToLibrary());
