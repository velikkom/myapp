import React from 'react'
import Welcome from './Welcome'

export const Greetings = () => {
  return (
    <div>
        <Welcome firstName="John" lastName="Doe"/>
        <Welcome firstName="Veli" lastName="Kara" textColor="blue"/>

    </div>
  )
}
