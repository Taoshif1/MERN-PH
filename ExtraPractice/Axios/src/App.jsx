import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Users from './components/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Axios</h1> */}
      <Navbar></Navbar>
      <Users></Users>

    </>
  )
}

export default App
