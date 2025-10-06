
import './App.css'
import { Suspense } from 'react'
import Countries from './components/Countries/Countries'

// created a simplest promise to fetch all data/country
const countriesPromise = fetch("https://openapi.programming-hero.com/api/all").then(res => res.json())

function App() {

  return (
    <>

      <h1>React Rest Countires</h1>
      
      {/* passing the promise in <Countries /> inside Suspense with a fallback */}
      <Suspense fallback={<h3>Countries are loading...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>


    </>
  )
}

export default App
