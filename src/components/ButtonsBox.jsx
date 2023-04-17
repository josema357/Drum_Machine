import React from 'react'
import '../styles/ButtonsBox.scss'

const ButtonsBox = ({dispatch,statePower,stateSound}) => {

  return (
    <div className='buttons-box'>
        <div className='drum-pad' id={stateSound==false?'Heater-1':'Chord-1'}>
            <audio className='clip' id='Q' src=""></audio>
            {"Q"}
        </div>
        <div className='drum-pad' id={stateSound==false?'Heater-2':'Chord-2'}>
            <audio className='clip' id='W' src=""></audio>
            {"W"}
        </div>
        <div className='drum-pad' id={stateSound==false?'Heater-3':'Chord-3'}>
            <audio className='clip' id='E' src=""></audio>
            {"E"}
        </div>
        <div className='drum-pad' id={stateSound==false?'Heater-4':'Shaker'}>
            <audio className='clip' id='A' src=""></audio>
            {"A"}
        </div>
        <div className='drum-pad' id={stateSound==false?'Clap':'Open-HH'}>
            <audio className='clip' id='S' src=""></audio>
            {"S"}
        </div>
        <div className='drum-pad' id={stateSound==false?'Open-HH':'Closed-HH'}>
            <audio className='clip' id='D' src=""></audio>
            {"D"}
        </div>
        <div className='drum-pad' id={stateSound==false?"Kick-n' -Hat":'Punchy-Kick'}>
            <audio className='clip' id='Z' src=""></audio>
            {"Z"}
        </div>
        <div className='drum-pad' id={stateSound==false?'Kick':'Side-Stick'}>
            <audio className='clip' id='X' src=""></audio>
            {"X"}
        </div>
        <div className='drum-pad' id={stateSound==false?'Closed-HH':'Snare'}>
            <audio className='clip' id='C' src=""></audio>
            {"C"}
        </div>
    </div>
  )
}

export default ButtonsBox