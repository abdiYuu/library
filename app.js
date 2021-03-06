class Book {
	constructor(title, author, pages, read) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
}

function toggleForm(){
	const form = document.querySelector('form');
	form.classList.toggle('visibility')
}

function getBookInfo() {
	const title = document.getElementById('title').value;
	const author = document.getElementById('author').value;
	const pages = document.getElementById('pages').value;
	const read = document.getElementById('read').checked;

	addBookToArray(title, author, pages, read)

	const form = document.querySelector('form');
	form.reset();
}

function addBookToArray(title, author, pages, read) {
	const new_book = new Book(title, author, pages, read);
	books.push(new_book)
	console.table(books);

	createBookCards()

}

function createBookCards() {
	const bookshelf = document.querySelector('.bookshelf')
	bookshelf.innerHTML = '';
	for(let book of books) {
		const card = document.createElement('div');
		const title = document.createElement('h3');
		const author = document.createElement('h4');
		const pages = document.createElement('h4');
		const read = document.createElement('p');
		const remove_button = document.createElement('button');

		title.innerText = book.title;
		author.innerText = book.author;
		pages.innerText = book.pages;
		if(book.read) {
			read.innerText = 'Read';
		} else {
			read.innerText = 'Unread';
		}
		remove_button.innerText = 'Remove Book';


		card.classList.add('book')
		card.setAttribute('data-index', books.indexOf(book));
		card.appendChild(title);
		card.appendChild(author);
		card.appendChild(pages);
		card.appendChild(read);
		card.appendChild(remove_button);

		displayBook(card)

		remove_button.classList.add('btn')
		remove_button.addEventListener('click', removeBook);
	}
}

function displayBook(card) {
	const bookshelf = document.querySelector('.bookshelf')
	bookshelf.appendChild(card);
}

function removeBook(e) {
	let book_card = e.target.parentNode;
	let index = book_card.dataset.index;

	if(confirm(`Are you sure you want to remove "${books[index].title}" from your bookshelf?`)) {
		books.splice(index, 1);
		const bookshelf = document.querySelector('.bookshelf');
		bookshelf.removeChild(book_card);
		createBookCards();
	} else {
		return;
	}
}

const books = [];

window.addEventListener('DOMContentLoaded', createBookCards);


const btn = document.querySelector('.add') 
btn.addEventListener('click', toggleForm);
