// console.log("Hello World");
let h1 = document.getElementById("heading");
let button = document.getElementById("changeButton");

button.addEventListener("click", function() {
    if (h1.innerText === "Hello World") {
        h1.innerText = "Welcome, Taoshiflex!";
        h1.style.color = "blue";
        button.innerText = "Revert";
    } else {
        h1.innerText = "Hello World";
        h1.style.color = "black";
        button.innerText = "Change";
    }
});