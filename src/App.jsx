import React from "react"
import BoxDisplay from "./components/BoxDisplay"
import ButtonsBox from "./components/ButtonsBox"
import logo from './assets/images/logo.svg'
import { useDispatch, useSelector } from "react-redux"

function App() {
  const dispatch=useDispatch();
  const {power}=useSelector(state=> state.power);
  return (
    <div id="drum-machine">
      <div className="containers">
        <ButtonsBox/>
        <BoxDisplay dispatch={dispatch} statePower={power}/>
        <img className="logo" src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default App
