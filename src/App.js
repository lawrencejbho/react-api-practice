import React, {useEffect, useState} from "react"
import WindowTracker from "./WindowTracker.js"


function App() {

  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  const [window, setWindow] = useState(true)

  function toggle() {
    setWindow(prevValue => !prevValue)
}

// pull our star wars Data from an API 
// uses a dependency array so that it will only run when count is modified

  useEffect(() => {
    console.log(starWarsData)
    fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
      }, [count]);


  
  return (
    <div>
      <pre>{JSON.stringify(starWarsData,null,2)}</pre>
      <button onClick={() => setCount(prevValue => (prevValue + 1))}>Get New Character</button>
      <button onClick={toggle}>Toggle WindowTracker</button>
      {window && <WindowTracker />}
    </div>
  );
}

export default App;
