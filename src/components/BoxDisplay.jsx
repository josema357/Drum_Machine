import React from 'react'
import '../styles/BoxDisplay.scss'
import { powerToogle } from '../reducers/powerSlice'
import { soundToogle } from '../reducers/soundSlice'

const BoxDisplay = ({dispatch,statePower,stateSound}) => {
  const handleSound=()=>{
    if(statePower){
      dispatch(soundToogle());
    }
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
            }}
            style={statePower?{backgroundColor:"#35cac5"}:{backgroundColor:"#ac0410"}}></div>
        </div>
      </div>
      <div id="display">displayfffheeeeeerrrrrrrrrrrrrrrrrrr</div>
      <div className='volume'>
        <input type="range" max="1" min="0" step="0.01" defaultValue="0.3"/>
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