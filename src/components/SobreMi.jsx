import React from 'react'
import Foto from '../img/foto.jpg'

const SobreMi = () => {
  return (
    <div className="container flex flex-col  lg:flex-row flex-1 items-center lg:justify-between gap-12">
      <img
        src={Foto}
        className="rounded-full w-[20rem] lg:w-[35rem] border-8 border-gray-800"
      />
      <div className="flex flex-col  gap-14 ">
        <h1 className="text-white text-4xl lg:ext-6xl font-extrabold text-center">
          Sobre Mi
        </h1>
        <p className="text-white text-xl lg:text-2xl font-bold text-center px-8">
          Soy desarrollador de software, residente en Perú, amante de la
          tecnología. Mi propósito principal es construir soluciones
          tecnológicas que ayuden a facilitar la vida de las personas.
        </p>
      </div>
    </div>
  )
}

export default SobreMi
