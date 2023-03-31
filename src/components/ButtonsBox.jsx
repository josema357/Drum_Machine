import React from 'react'
import '../styles/ButtonsBox.scss'

const ButtonsBox = () => {
  return (
    <div className='buttons-box'>
        <div className='drum-pad' id='Heater-1'>
            <audio className='clip' id='Q' src=""></audio>
            {"Q"}
        </div>
        <div className='drum-pad' id='Heater-2'>
            <audio className='clip' id='W' src=""></audio>
            {"W"}
        </div>
        <div className='drum-pad' id='Heater-3'>
            <audio className='clip' id='E' src=""></audio>
            {"E"}
        </div>
        <div className='drum-pad' id='Heater-4'>
            <audio className='clip' id='A' src=""></audio>
            {"A"}
        </div>
        <div className='drum-pad' id='Clap'>
            <audio className='clip' id='S' src=""></audio>
            {"S"}
        </div>
        <div className='drum-pad' id='Open-HH'>
            <audio className='clip' id='D' src=""></audio>
            {"D"}
        </div>
        <div className='drum-pad' id="Kick-n'-Hat">
            <audio className='clip' id='Z' src=""></audio>
            {"Z"}
        </div>
        <div className='drum-pad' id='Kick'>
            <audio className='clip' id='X' src=""></audio>
            {"X"}
        </div>
        <div className='drum-pad' id='Closed-HH'>
            <audio className='clip' id='C' src=""></audio>
            {"C"}
        </div>
    </div>
  )
}

export default ButtonsBox