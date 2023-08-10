import React from 'react'
import GrowingPlant from '../GrowingPlant/GrowingPlant'


const rose = {
    name : 'rose',
    size : 50,
    icon : '🌹'
}

const sunFlower = {
  name : 'Sun Flower',
  size : 50,
  icon : '🌻'
}

function Home() {
  return (
    <div>
        <h1>Welcome To Home</h1>
        <GrowingPlant plantData={rose}/>
        <GrowingPlant plantData={sunFlower}/>
        <GrowingPlant/>
    </div>
  )
}

export default Home