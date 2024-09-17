class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

class Library {
    constructor() {
        this.books = {};
    }

    addBook(book) {
        this.books[book.title] = {'author': book.author, 'pages': book.pages, 'isTaken': false};
    }

    findBooksByAuthor(author) {
        let booksByAuthor = [];
        for (let bookTitle in this.books) {
            if (this.books[bookTitle]['author'] === author) {
                booksByAuthor.push(bookTitle);
            }
        }
        return booksByAuthor;
    }

    listAllBooks() {
        let allBooks = [];
        for (let bookTitle in this.books) {
            allBooks.push(bookTitle);
        }
        return allBooks;
    }
}

class LibraryUser {
    constructor(name) {
        this.name = name;
        this.takenBooks = [];
        this.takenCount = 0;
    }

    borrowBook(library, book) {
        if (this.takenCount < 3) {
            if (library.books.hasOwnProperty(book.title)) {
                if (library.books['isTaken'] === false) {
                    library.books['isTaken'] = true;
                    this.takenBooks.push(book);
                    this.takenCount += 1;
                } else {
                    console.log(`The book <${book.title}> is already taken`);
                }
            } else {
                console.log(`There is no book <${book.title}> in the library`);
            }
        } else {
            console.log(`The user <${this.name}> has run out of the limit of taken books. He can't take the book <${book.title}>`);
        }
    }

    returnBook(library, book) {
        library.books['isTaken'] = false;
        for (let i = 0; i < this.takenBooks.length; i++) {
            if (this.takenBooks[i] === book) {
                delete this.takenBooks[i];
            }
        }
        this.takenCount -= 1;
    }
}

let book1 = new Book('book1', 'author1', 100);
let book2 = new Book('book2', 'author1', 100);
let book3 = new Book('book3', 'author1', 100);
let book4 = new Book('book4', 'author2', 100);

let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
console.log(library.findBooksByAuthor('author1'));
console.log(library.listAllBooks());

let libraryUser = new LibraryUser('user');
libraryUser.borrowBook(library, book1);
libraryUser.borrowBook(library, book2);
libraryUser.borrowBook(library, book3);
libraryUser.borrowBook(library, book4);
libraryUser.returnBook(library, book1);
libraryUser.borrowBook(library, book2);
console.log(libraryUser.takenBooks);