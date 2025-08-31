let btn = document.querySelectorAll(".btn");

btn.forEach(button => {
    button.addEventListener("click", () => {
        // const parent = button.parentElement;
        // const answer = parent.querySelector(".answer");
        const answer = button.previousElementSibling;  //Assumes the answer is right above the button

        if (answer.style.display === "none") {
            answer.style.display = "block"; // show the answer
            button.textContent = "Hide Answer";
        } else {
            answer.style.display = "none"; // hide the answer
            button.textContent = "Show Answer";
        }
    });
});
