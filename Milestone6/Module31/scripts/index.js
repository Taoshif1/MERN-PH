// alert("Hello, World!");
const allLevels = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")     // Promise of response
        .then(response => response.json())                          // Promise of JSON data
        .then(data => data.data)                                   // Extract levels array)
        .then(levels => {
            displayLessons(levels);
        })
        .catch(error => {
            console.error("Error fetching all levels:", error);
        });
}

// print lessons
const displayLessons = (lessons) => {
    // console.log(lessons);

    // STEP 1 - get the container & EMPTY it
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = ""; // empty the container

    // step 2 - get into every lesssons
    for (let lesson of lessons) {

        // step 3 - create Element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
            <button href="#" class="btn btn-outline btn-primary text-2xl font-bold">
                <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
            </button>
        `;
    
        // step 4 - append child into container
        levelContainer.appendChild(btnDiv);

    }
    
}


allLevels();




















// ⚡ API Endpoints

// Get ⚡ All Levels
// https://openapi.programming-hero.com/api/levels/all

// Get ⚡ Words by Levels
// https:// openapi.programming-hero.com/api/level/{id}
// https://openapi.programming-hero.com/api/level/5

// Get ⚡ Words Detail
// https:// openapi.programming-hero.com/api/word/{id}
// https://openapi.programming-hero.com/api/word/5

// Get ⚡ All Words
// https://openapi.programming-hero.com/api/words/all