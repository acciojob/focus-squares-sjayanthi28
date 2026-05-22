let square1 = document.getElementById("square1");
let square2 = document.getElementById("square2");
let square3 = document.getElementById("square3");

square1.addEventListener("mouseover", () => {
    square2.classList.add("coffee");
    square3.classList.add("coffee");
});

square1.addEventListener("mouseout", () => {
    square2.classList.remove("coffee");
    square3.classList.remove("coffee");
});

square2.addEventListener("mouseover", () => {
    square1.classList.add("coffee");
    square3.classList.add("coffee");
});

square2.addEventListener("mouseout", () => {
    square1.classList.remove("coffee");
    square3.classList.remove("coffee");
});

square3.addEventListener("mouseover", () => {
    square1.classList.add("coffee");
    square2.classList.add("coffee");
});

square3.addEventListener("mouseout", () => {
    square1.classList.remove("coffee");
    square2.classList.remove("coffee");
});