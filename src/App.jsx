import React from "react"
import BoxDisplay from "./components/BoxDisplay"
import ButtonsBox from "./components/ButtonsBox"

function App() {

  return (
    <div id="drum-machine">
      <div className="containers">
        <ButtonsBox/>
        <BoxDisplay/>
      </div>
    </div>
  )
}

export default App
