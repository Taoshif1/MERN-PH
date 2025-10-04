const dataInput = document.getElementById('dataInput');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');
const clearButton = document.getElementById('clearButton');
const setObjectToLocalStorage = document.getElementById('setObjectToLocalStorage');
const output = document.getElementById('output');

saveButton.addEventListener('click', () => {
    const data = dataInput.value;
    localStorage.setItem('myData', data);
    dataInput.value = '';
    output.textContent = 'Data saved to local storage.';
    });

loadButton.addEventListener('click', () => {
    const data = localStorage.getItem('myData');
    // const parsedData = JSON.parse(data);
    // console.log(parsedData.name);
    output.textContent = data ? `Loaded from local storage: ${data}` : 'No data found.';
    });

// Storing an object/non-primitive in local storage
setObjectToLocalStorage.addEventListener('click', () => {
    const obj = { name: 'Taoshif', age: 20, city: 'Dhaka' };
    const customerJson = JSON.stringify(obj);
    localStorage.setItem('myData', customerJson);
})

clearButton.addEventListener('click', () => {
    localStorage.removeItem('myData');
    output.textContent = 'Local storage cleared.';
    });