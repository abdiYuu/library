function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
	};
}


function toggleForm(){
	if(hidden) {
		const form = document.querySelector('form');
		form.style.display = 'block';
		hidden=false;
	} else {
		const form = document.querySelector('form');
		form.style.display = 'none';
		hidden=true;
	}
}

function getBookInfo() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	const read = document.getElementById('read').checked;

	addBook(title, author, pages, read)
}

function addBook(title, author, pages, read) {
	books.push(new Book(title, author, pages, read));
	console.table(books);
}

function createBook() {
	const book = document.createElement('div')
	const title = document.creatElement('h3')
	const author = document.createElement('h4')
	const pages = document.createElement('h4')
	const read = document.createElement('read')
	book.classList.add('book')

	book.appendChild(title);
	book.appendChild(author);
	book.appendChild(pages);
	book.appendChild(read);
}

//function displayBook(
//	const bookshelf = document.querySelector('.bookshelf')
//	const book  = document.createElement('div')

//)

function removeBook(book) {
	myBooks.splice(book, 1);
}
function showBook(book) {
	//display book on a card on the page
}

const books = [];

//make query listeners to add books to the page

let hidden = true;
const btn = document.querySelector('.btn') 
btn.addEventListener('click', toggleForm);
