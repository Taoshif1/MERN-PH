let bulb = document.getElementById("bulb");
let toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function() {
    if (bulb.src.includes("bulboff")) {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        toggleBtn.textContent = "Turn Off";
    } else {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        toggleBtn.textContent = "Turn On";
    }
});