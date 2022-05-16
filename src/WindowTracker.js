import React, {useState, useEffect} from "react"

function WindowTracker() {

    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        function watchWidth() {
            setWidth(window.innerWidth)
        }
    
    window.addEventListener("resize", watchWidth)

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