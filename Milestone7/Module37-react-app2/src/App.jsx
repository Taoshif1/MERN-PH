import './App.css'
import Counter from './components/Counter'
import Batsman from './components/Batsman'
import Users from './components/Users'
import Posts from './components/Posts'
import { Suspense } from 'react'

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json());  // simple fetch/promise

const fetchPosts = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
} 

function App() {

  const postsPromise = fetchPosts(); 

  function handleClick(){        // way 1 - normal function
    alert("I am Clicked")
  }
  const handleClick3 = () => {    // way 2 - arrow function
    alert("I am Clicked 3")
  }
  const handleAdd5 = (num) =>{
    const newNum = num + 5;
    alert(`5 added with ${num} = ${newNum}`)
  }

  return (
    <>    

      <h3>Vite + React</h3>


      <Suspense fallback={<h3>Users Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h3>Posts are loading...</h3> }>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>

      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick} >Click Me</button> <br />
      <button onClick={
        function handleClick2(){      // way 3 - func inside onClick
          alert("I am Clicked 2")
        }
      } >Click Me 2</button> <br />
      <button onClick={handleClick3}>Click Me 3</button> <br />
      <button onClick={()=>{alert("I am Clicked 4")}    // way 4 - arrow func inside onClick
      } >Click Me 4</button> <br />

      <button onClick={() => handleAdd5(9)}>Click to ADD 5</button>

    </>
  )
}

export default App
