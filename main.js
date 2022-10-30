const menu = document.querySelector(".principal-nav");
const openMenuBtn = document.querySelector(".btn-open");
const openMenuBtn2 = document.querySelector(".btn-open-two");
const closedMenuBtn = document.querySelector(".btn-closed");



function toggleMenu() {
    menu.classList.toggle("menu_open");
}

openMenuBtn.addEventListener("click", toggleMenu);
openMenuBtn2.addEventListener("click", toggleMenu);
closedMenuBtn.addEventListener("click", toggleMenu);

const accounts = document.querySelector(".accounts");
const openAccount = document.querySelector(".secondary-img-footer")

function toggleMenutwo() {
    accounts.classList.toggle("accounts_open");
}

openAccount.addEventListener("click", toggleMenutwo)