export const listLink = document.querySelector(".list-link");
const inputField = document.querySelector(".input-field");
export const addLink = document.querySelector(".add-link");
const books = document.querySelector(".books");
const contact = document.querySelector(".contact");
export const contactLink = document.querySelector(".contact-link");

class Navigation {
  static listDisplay() {
    books.style.display = "block";
    contact.style.display = "none";
    inputField.style.display = "none";
  };
  static addDisplay() {
    inputField.style.display = 'flex';
    books.style.display = 'none';
    contact.style.display = 'none';
  };
  static contactDisplay() {
    contact.style.display = "block";
    inputField.style.display = "none";
    books.style.display = "none";
  }
}


const navLink = () =>{
    addLink.addEventListener('click', Navigation.addDisplay);
    contactLink.addEventListener('click', Navigation.contactDisplay);
    listLink.addEventListener('click', Navigation.listDisplay);
};

export default navLink;