import { useState } from 'react'
import BarristaForm from './components/BaristaForm'

import './App.css'

function App() {


  return (
    <>
      <div className="title-container">
        <h1 className="title">On my grind</h1>
        <p>So you think you can barrista? Let's put that to the test...</p>
      </div>
      <BarristaForm />
    </>
  )
}

export default App
