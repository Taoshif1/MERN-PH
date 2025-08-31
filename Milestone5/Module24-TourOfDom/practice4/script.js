let plus = document.getElementById('incrementBtn');
let minus = document.getElementById('decrementBtn');
let reset = document.getElementById('resetBtn');
let countDisplay = document.getElementById('count');
let count = 0;

plus.addEventListener('click', function(){
    count++;
    countDisplay.innerText = count;
})
minus.addEventListener('click', function(){
    count--;
    countDisplay.innerText = count;
})
reset.addEventListener('click', function(){
    count = 0;
    countDisplay.innerText = count;
})