import React from "react"
import {Routes, Route} from 'react-router-dom'
import Accueil from "./Accueil.1"
function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Accueil/>} />
      <Route path='/' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
