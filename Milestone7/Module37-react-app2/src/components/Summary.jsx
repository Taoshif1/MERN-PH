/***
  * Components
  * JSX
  * Props
  * State
  * Events
  * [Conditional Rendering]
  * 
 */

// 1. API URL: https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.JSON())
    .then(data => console.log(data));

const loadData = async() => {
    const res = fetch("https://jsonplaceholder.typicode.com/users");
    const data = res.JSON();
    return data;
}