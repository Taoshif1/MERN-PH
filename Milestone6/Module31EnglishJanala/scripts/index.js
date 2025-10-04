// alert("Hello, World!");
// load/fetch("https://openapi.programming-hero.com/api/levels/all")
const allLevels = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") // Promise of response
    .then((response) => response.json()) // Promise of json data
    .then((json) => displayLessons(json.data))
    .catch((error) => {
      console.error("Error fetching all levels:", error);
    });
};

const removeActive = () => {
  const lessonBtns = document.getElementsByClassName("lesson-btn");
  // console.log(lessonBtns);
  for (let btn of lessonBtns) {
    btn.classList.remove("active");
  }
};

// load/fetch words by level
const loadWords = (levelNo) => {
  // Get the default text container by its ID
  const defaultTextContainer = document.getElementById("default-text");
  // Add the 'hidden' class to hide it
  defaultTextContainer.classList.add("hidden");

  const url = `https://openapi.programming-hero.com/api/level/${levelNo}`;
  // console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // json.data.forEach(word => console.log(word));
      removeActive();
      const clickBtn = document.getElementById(`lesson-btn-${levelNo}`);
      // console.log(clickBtn);
      clickBtn.classList.add("active");
      displayLevelWords(json.data);
    })
    .catch((error) => {
      console.error("Error fetching words for level " + levelNo + ":", error);
    });
};

// display words by level
const displayLevelWords = (words) => {
  // console.log(words);
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = ""; // empty the container

  if (words.length === 0) {
    wordContainer.innerHTML = `
      <div class="lg:col-span-3 flex flex-col justify-center items-center bg-gray-100 font-bangla my-3 p-10">
        <img src="./assets/alert-error.png" alt="">
        <p class="text-xl mt-2">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <p class="text-3xl font-bold mt-2 p-2">নেক্সট Lesson এ যান</p>
      </div>
    `;
    return; // Stop the function here since there are no words to display
  }

  for (let word of words) {
    const wordDiv = document.createElement("div");
    wordDiv.innerHTML = `
            <div class="card bg-base-200 shadow-xl m-4">
        <div class="card-body text-center">
            <h2 class="card-title justify-center text-2xl font-bold">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
            <p class="italic mt-2 text-gray-600 font-bold">Meaning / Pronunciation</p>
            <p class="font-bangla text-gray-800">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায়নি"}"</p>

            <div class="flex justify-between mt-6">
                <button onClick="loadWordDetail(${word.id})" class="btn btn-circle">
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
};

// load/fetch word details by id for modal
const loadWordDetail = async (wordId) => {
  const url = `https://openapi.programming-hero.com/api/word/${wordId}`;
  console.log(url);
  const res = await fetch(url);
  const data = await res.json();
  displayWordDetails(data.data);
};
// display word details in modal
const displayWordDetails = (word) => {
  console.log(word);
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
    <div class="text-center text-2xl">
      <h3 class="text-3xl font-bold">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h3>
    <p class="py-4 italic mt-2 text-gray-600 font-bold">Meaning / Pronunciation</p>
    <p class="font-bangla text-gray-800 p-3">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায়নি"}"</p>
    <p class="py-4 italic mt-2 text-gray-600 font-bold">Example</p>
    <p class="font-bangla text-gray-800 p-2">"${word.example ? word.example : "উদাহরণ পাওয়া যায়নি"}"</p>
    </div>
  `;
  document.getElementById("my_modal_5").showModal();
};

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
            <button id="lesson-btn-${lesson.level_no}" onClick="loadWords(${lesson.level_no})" class="btn btn-outline btn-primary text-2xl font-bold lesson-btn">
                <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
            </button>
        `;

    // step 4 - append child into container
    levelContainer.appendChild(btnDiv);
  }
};

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
