import React from 'react'
import '../styles/BoxDisplay.scss'

const BoxDisplay = () => {
  return (
    <div className='display-box'>
      <div className='power'>
        <p>Power</p>
        <div className='btn-change'>
          <div className='switch'></div>
        </div>
      </div>
      <div id="display">displayfffheeeeeerrrrrrrrrrrrrrrrrrr</div>
      <div className='volume'>
        <input type="range" max="1" min="0" step="0.01" defaultValue="0.3"/>
      </div>
      <div className='power'>
        <p>Bank</p>
        <div className='btn-change'>
          <div className='switch'></div>
        </div>
      </div>
    </div>
  )
}

export default BoxDisplay