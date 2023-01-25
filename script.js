let menuKnop = document.querySelector(".header-button");
menuKnop.addEventListener("click",toggleMenu);

function toggleMenu() {
    var menu = document.querySelector (".menu");
    menu.classList.toggle("wel-relevant");
}

console.log("test")
