import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contactarme from './components/Contactarme'
import Header from './components/Header'
import Inicio from './components/Inicio'
import Proyectos from './components/Proyectos'
import Skills from './components/Skills'
import SobreMi from './components/SobreMi'

const App = () => {
  return (
    <>
      <div className="home__bg flex flex-1 flex-col">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/sobremi" element={<SobreMi />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contactarme" element={<Contactarme />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
