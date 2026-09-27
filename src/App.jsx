import React from 'react'
import Mouse from './components/Mouse'
import Hero from './components/Hero'
import './App.css'
import Content from './components/Content'


function App() {


  return (
    <>
      <Mouse />
      <div className="container">
        <Hero />
        <Content />
      </div>
      
    </>
  )
}

export default App
