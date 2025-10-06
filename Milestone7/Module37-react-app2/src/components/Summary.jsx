/***
  * Components
  * JSX
  * Props
  * State
  * Events
  * [Conditional Rendering]
  * 
 */

// This is how we fetch data in vanilla JS,check <Users></Users> for more

// 1. API URL: https://jsonplaceholder.typicode.com/users

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => res.JSON())
//     .then(data => console.log(data));


// const loadData = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = res.JSON();
//     return data;
// }


/***
 *  Now wei'll use ->
  * 1. just write a simple fetch with json conversion
  * 2. Wrap the data loading component under suspense
  * 
  *  
 */