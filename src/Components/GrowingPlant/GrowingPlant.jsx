import React, { useState } from 'react'
import "./GrowingPlant.css"



const defaultData = {
  name : "DefaultName",
  size : 20,
  icon : "DefaultIcon"
}




function GrowingPlant({ plantData = defaultData }) {

  let { name , size, icon } = plantData;

  const handleClick = ()=>{
    console.log("Before Click : ", size);
    size = size + 20;
    console.log("After Click : ", size);
  }

  return (
    <div className='plant'>
      <h3>I'm a {name} </h3>
      <p>I'm Growing <span style={{fontSize:`${size}px`}}>{icon}</span>{name === "rose" ? '💛' : ''}</p>
      <button onClick={handleClick}>Growing</button>
    </div>
  )
}

export default GrowingPlant