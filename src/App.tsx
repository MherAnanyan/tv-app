import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchDataAndDispatch } from "./asyncActions"
import { BackgroundScreen } from "./components/Background/Background"
import LeftMenu from "./components/LeftMenu/LeftMenu"

import "./App.scss"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetchDataAndDispatch(dispatch)
      .then(data => {
        console.log("Fetched data:", data)
      })
      .catch(error => {
        console.error("Error:", error.message)
      })
  }, [dispatch])

  return (
    <div className="App">
      <LeftMenu />
      <BackgroundScreen />
    </div>
  )
}

export default App
