import React from 'react'
import '../styles/BoxDisplay.scss'
import { powerToogle } from '../reducers/powerSlice'
import { soundToogle } from '../reducers/soundSlice'
import { textDisplay } from '../reducers/displaySlice'
import { useDispatch } from 'react-redux'
import { setVolume } from '../reducers/volumenSlice'

const BoxDisplay = ({dispatch,statePower,stateSound,textToDisplay}) => {
  const handleSound=()=>{
    if(statePower){
      dispatch(soundToogle());
      dispatch(textDisplay(stateSound ? "Heater Kit" : "Smooth Piano Kit"))
    }
  }
  const handleVolumeChange=(event)=>{
    const newVolume=parseFloat(event.target.value);
    dispatch(setVolume(newVolume))
  }
  return (
    <div className='display-box'>
      <div className='power'>
        <p>Power</p>
        <div className='btn-change' style={statePower?{justifyContent:'right'}:{justifyContent:'left'}}>
          <div 
            className='switch' 
            onClick={()=>{
              dispatch(powerToogle());
              dispatch(textDisplay(statePower ? "OFF" : "ON"))
            }}
            style={statePower?{backgroundColor:"#35cac5"}:{backgroundColor:"#ac0410"}}></div>
        </div>
      </div>
      <div id="display">{textToDisplay}</div>
      <div className='volume'>
        <input type="range" max="1" min="0" step="0.01" defaultValue="0.3" onChange={handleVolumeChange}/>
      </div>
      <div className='power'>
        <p>Bank</p>
        <div className='btn-change' style={stateSound?{justifyContent:'right'}:{justifyContent:'left'}}>
          <div className='switch' onClick={handleSound}></div>
        </div>
      </div>
    </div>
  )
}

export default BoxDisplay