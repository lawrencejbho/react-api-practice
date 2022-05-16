import React, {useEffect, useState} from "react"



function App() {

  const [starWarsData, setStarWarsData] = useState({})
  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log(starWarsData)
    fetch(`https://swapi.dev/api/people/${count}`)
        .then(res => res.json())
        .then(data => setStarWarsData(data))
      }, [count]);

// uses a dependency array so that it will only run when count is modified

    


  return (
    <div>
      <pre>{JSON.stringify(starWarsData,null,2)}</pre>
      <button onClick={() => setCount(prevValue => (prevValue + 1))}>Get New Character</button>
    </div>
  );
}

export default App;
