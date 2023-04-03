import React from "react"
import BoxDisplay from "./components/BoxDisplay"
import ButtonsBox from "./components/ButtonsBox"
import logo from './assets/images/logo.svg'

function App() {

  return (
    <div id="drum-machine">
      <div className="containers">
        <ButtonsBox/>
        <BoxDisplay/>
        <img className="logo" src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default App
