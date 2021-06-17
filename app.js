function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
	}
}


function addBook(title, author, pages, read) {
	books.push(new Book(title, author, pages, read));
	console.table(books)
}

function removeBook(book) {
	myBooks.splice(book, 1);
}
function showBook(book) {
	//display book on a card on the page
}

const books = [];

//make query listeners to add books to the page

const btn = document.querySelector('.btn') 
btn.addEventListener('click', addBook);


