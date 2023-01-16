const add = document.querySelector("#add");
const bookTable = document.querySelector(".book-display");
const title = document.querySelector("#title");
const author = document.querySelector("#author");

let bookList;
export class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addToHtml(newBook) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td style="width:90%">${newBook.title} by ${newBook.author}</td>
    <td><button id="${bookList.length}" class="remove" onclick="Book.removeBook(this)">Remove</button></td>`;
    bookTable.appendChild(tableRow);
  }

  static removeBook(e) {
    e.target.parentElement.parentElement.remove();
    if (bookList.length > e.target.id) {
      bookList.splice(e.target.id, 1);
    } else {
      bookList.splice(-1, 1);
    }
    localStorage.setItem("books", JSON.stringify(bookList));
  }

  static loadBooksInStorage() {
    const data = JSON.parse(localStorage.getItem("books"));
    if (data) {
      bookList = [...data];
      bookList.forEach((book) => Book.addToHtml(book));
    } else {
      bookList = [];
    }
  }

  static clearInputFields() {
    title.value = "";
    author.value = "";
  }
}

const addBook = () => {
  // triggered when the add button is clicked
  add.addEventListener("click", () => {
    const newBook = new Book(title.value, author.value);
    Book.addToHtml(newBook);
    bookList.push(newBook);
    localStorage.setItem("books", JSON.stringify(bookList));
    Book.clearInputFields();
  });

  // removing book using event propogation
  bookTable.addEventListener("click", Book.removeBook);
};

export default addBook;
