console.log("Hello World");
let para = document.getElementById("para");
let button = document.getElementById("toggleButton");

button.addEventListener("click", function() {
    if (para.style.display === "none") {
        para.style.display = "block";
        button.innerText = "Hide";
        button.style.backgroundColor = "green";
        button.style.color = "white";
    } else {
        para.style.display = "none";
        button.innerText = "Show";
        button.style.backgroundColor = "red";
        button.style.color = "white";
        button.style.border = "none";
    }
});