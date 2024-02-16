import React from 'react'
import Family from './Family'

function Join() {
  return (
    <>
    <div style={{bordercolor: 'black',margin: '100px'}} className="d-flex justify-content-center align-items-center flex-column container">
        <h2 id="joinh1" style={{color: '#B93D46'}}>Join Us Safely This Holiday Season</h2>
        <p style={{marginLeft: '150px',marginRight: '150px',marginTop: '20px',textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim porro exercitationem repellat obcaecati odio corrupti voluptatibus voluptatem deserunt magnam quos ullam numquam necessitatibus ex quibusdam quo, sit quis atque! Debitis.Enim porro exercitationem repellat obcaecati odio corrupti voluptatibus voluptatem deserunt magnam quos ullam numquam necessitatibus ex quibusdam quo, sit quis atque! Debitis.</p>
        <button id='btn2' className='btn' style={{borderColor: '#3A8274'}}>Safety Regulations</button>
    </div>
    <Family />
    </>
  )
}

export default Join