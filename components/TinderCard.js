import Image from 'next/image'
import React, { useState } from 'react'
import TinderCards from "react-tinder-card"

function TinderCard() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://images.pexels.com/photos/8474464/pexels-photo-8474464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Jeff Bezos",
      url: "https://images.unsplash.com/photo-1553644446-9f8f2762ea42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8amVmZiUyMGJlem9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    }
  ])

  const swiped = (direction, nameToDelete) => {
    console.log("Removing " + nameToDelete);
    // setLastDirection(direction)s
  }

  const outOfFrame = (name) => {
    console.log(name + " left the screen")
  }
 

  return (
    <div className='flex-1 bg-red-400 px-3'>
      <h1>TinderCards</h1>
      {/* {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={["up", "down"]}
          onSwipe={(dir) => swiped(dir, person.name)}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >

        </TinderCard>
      ))} */}
    </div>
  )
}

export default TinderCard