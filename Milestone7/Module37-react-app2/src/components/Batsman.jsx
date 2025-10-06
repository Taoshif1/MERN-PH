import { useState } from "react"

export default function Batsman(){
    
    let [runs, setRuns] = useState(0);

    const handleSingles = () => {
        const newRun = runs + 1;
        setRuns(newRun)
    }
    const handleDoublesles = () => {
        const newRun = runs + 2;
        setRuns(newRun)
    }
    const handleFour = () => {
        const newRun = runs + 4;
        setRuns(newRun)
    }
    const handleSix = () => {
        const newRun = runs + 6;
        setRuns(newRun)
    }
    
    return (
        <div>
            <h1>Hi, i am bangla batsman</h1>
            {
                runs > 50 && <h2>Congo!! U scored half century!!!</h2>
            }
            <h3>Score: {runs}</h3>
            <button onClick={handleSingles}>Single</button>
            <button onClick={handleDoublesles}>Double</button>
            <button onClick={handleFour}>4</button>
            <button onClick={handleSix}>6</button>
        </div>
    )
}

