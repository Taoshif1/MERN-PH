let h1 = document.getElementById("h1");
let para = document.getElementById("para");
let btn = document.getElementById("modeToggle");

btn.addEventListener('click', function(){
    if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "white";
        h1.style.color = "black";
        para.style.color = "black";
        btn.textContent = "Switch to Dark Mode";
    } else {
        document.body.style.backgroundColor = "black";
        h1.style.color = "white";
        para.style.color = "white";
        btn.textContent = "Switch to Light Mode";
    }
})