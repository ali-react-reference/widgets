import { useEffect, useState } from "react"

const Route = ({path, children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() =>{
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    // get a piece of state to rerender the route component

    // listen for the location change
    window.addEventListener('popstate', onLocationChange)

    return () => {
      // remove the event listener
      window.removeEventListener('popstate', onLocationChange)
    }
  }, []) // only run on the first render

  return currentPath ===path ? children : null
}



export default Route 