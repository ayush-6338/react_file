import React from 'react'
import './Container.css'

const Container = () => {
  
  return (
    <div className='bodycont'>
        <h1>Body Contanent</h1>
        <p>This is Card from the component section navbar.jsx</p>
        <label>Enter you age</label>
        <input type = "number" ></input>
        <button className='btn'>click me to submit</button>   
    </div>
    
  )
}

export default Container
