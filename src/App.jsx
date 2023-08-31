import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'

function App() {

  const cards = data.map(card => {
    return (
      <Card 
        key={card.id} 
        {...card}
      />
    )
  })
  return (
    <>
      <Navbar />
      <Hero />
      <section className='cardContainer'>
        {cards}
      </section>
    </>
  )
}

export default App
