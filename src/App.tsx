import { useState } from 'react'
import BarristaForm from './components/BaristaForm'

import './App.css'

function App() {


  return (
    <>
      <div className="title-container">
        <img src="https://quiet-macaron-ca013a.netlify.app/assets/omg-logo.79cdfddd.png" alt="coffee logo" />
        <h1 className="title">On my grind</h1>
        <p>So you think you can barrista? Let's put that to the test...</p>
      </div>
      <BarristaForm />
    </>
  )
}

export default App
