import React, {useState, useEffect} from "react"

function WindowTracker() {

    const [width, setWidth] = useState(window.innerWidth)

// useEffect to allow us to add a window event listener 
    useEffect(() => {

        // we create this function first so that we can use it for adding the event listener and cleanup
        function watchWidth() {
            setWidth(window.innerWidth)
        }
    // add the event listener
    window.addEventListener("resize", watchWidth)

    // cleanup function, every time the windowtracker gets removed it will run this 
    return function() {
        window.removeEventListener("resize", watchWidth)
    }

    }, [])

    return (
        <div>
            <h1>Window width: {width}</h1>
        </div>
    )
}

export default WindowTracker