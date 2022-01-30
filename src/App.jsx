import { useState } from 'react'
import Header from './components/Header'
import Inicio from './components/Inicio'

const App = () => {
  return (
    <>
      <div className="home__bg flex flex-1 flex-col">
        <Header />
        <Inicio />
      </div>
    </>
  )
}

export default App
