import React from 'react'
import '../styles/ButtonsBox.scss'
import { textDisplay } from '../reducers/displaySlice'

const ButtonsBox = ({dispatch,statePower,stateSound,textToDisplay}) => {
    const handleClickSound=(event)=>{
        if(statePower){
            dispatch(textDisplay(event.target.id))
        }
    }
    return (
        <div className='buttons-box'>
            <div className='drum-pad' id={stateSound==false?'Heater-1':'Chord-1'} onClick={handleClickSound}>
                <audio className='clip' id='Q' src={!stateSound ? "../assets/audios/HeaterKit/Heater-1.mp3" : "../assets/audios/SmoothPianoKit/Chord_1.mp3"}></audio>
                {"Q"}
            </div>
            <div className='drum-pad' id={stateSound==false?'Heater-2':'Chord-2'} onClick={handleClickSound}>
                <audio className='clip' id='W' src=""></audio>
                {"W"}
            </div>
            <div className='drum-pad' id={stateSound==false?'Heater-3':'Chord-3'} onClick={handleClickSound}>
                <audio className='clip' id='E' src=""></audio>
                {"E"}
            </div>
            <div className='drum-pad' id={stateSound==false?'Heater-4':'Shaker'} onClick={handleClickSound}>
                <audio className='clip' id='A' src=""></audio>
                {"A"}
            </div>
            <div className='drum-pad' id={stateSound==false?'Clap':'Open-HH'} onClick={handleClickSound}>
                <audio className='clip' id='S' src=""></audio>
                {"S"}
            </div>
            <div className='drum-pad' id={stateSound==false?'Open-HH':'Closed-HH'} onClick={handleClickSound}>
                <audio className='clip' id='D' src=""></audio>
                {"D"}
            </div>
            <div className='drum-pad' id={stateSound==false?"Kick-n'-Hat":'Punchy-Kick'} onClick={handleClickSound}>
                <audio className='clip' id='Z' src=""></audio>
                {"Z"}
            </div>
            <div className='drum-pad' id={stateSound==false?'Kick':'Side-Stick'} onClick={handleClickSound}>
                <audio className='clip' id='X' src=""></audio>
                {"X"}
            </div>
            <div className='drum-pad' id={stateSound==false?'Closed-HH':'Snare'} onClick={handleClickSound}>
                <audio className='clip' id='C' src=""></audio>
                {"C"}
            </div>
        </div>
    )
}

export default ButtonsBox