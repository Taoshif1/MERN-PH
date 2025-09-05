// alert("Hello, World!");
// load/fetch("https://openapi.programming-hero.com/api/levels/all")
const allLevels = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")     // Promise of response
    .then(response => response.json())                          // Promise of json data
        .then((json) => displayLessons(json.data))
        .catch(error => {
            console.error("Error fetching all levels:", error);
        });
}


// load/fetch words by level
const loadWords = (levelNo) => {
    const url = `https://openapi.programming-hero.com/api/level/${levelNo}`;
    // console.log(url);
        fetch(url)
        .then(response => response.json())
        .then((json) => {
            // json.data.forEach(word => console.log(word));
            displayLevelWords(json.data);
        })
        .catch(error => {
            console.error("Error fetching words for level " + levelNo + ":", error);
        });
}

// display words by level
const displayLevelWords = (words) => {
    // console.log(words);
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = ""; // empty the container
    
    for (let word of words) {
        const wordDiv = document.createElement("div");
        wordDiv.innerHTML = `
            <div class="card bg-base-200 shadow-xl m-4">
        <div class="card-body text-center">
            <h2 class="card-title justify-center text-2xl font-bold">${word.word}</h2>
            <p class="italic mt-2 text-gray-600 font-bold">Meaning / Pronunciation</p>
            <p class="font-bangla text-gray-800">"${word.meaning} / ${word.pronunciation}"</p>

            <div class="flex justify-between mt-6">
                <button class="btn btn-circle">
                    <i class="fa-solid fa-circle-info"></i>
                </button>
                <button class="btn btn-circle">
                    <i class="fa-solid fa-volume-high"></i>
                </button>
            </div>
        </div>
    </div>
        `;
        wordContainer.appendChild(wordDiv);
    }
}



// print/display lessons
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
            <button href="#" onClick="loadWords(${lesson.level_no})" class="btn btn-outline btn-primary text-2xl font-bold">
                <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
            </button>
        `;
    
        // step 4 - append child into container
        levelContainer.appendChild(btnDiv);
    } 
}



// function calls
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