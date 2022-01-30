import React from 'react'
import Shop from '../img/shop.png'

const Proyectos = () => {
  const proyectos = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="container">
      <h1 className="text-white text-5xl font-extrabold text-center py-10">
        Mis proyectos
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-10 justify-center items-center justify-items-center  ">
          {proyectos.map((proyecto) => (
            <div className="w-72 h-72 bg-gray-800 opacity-80 rounded-3xl flex flex-col justify-between items-center py-5 text-white font-bold">
              <h2>React Shop</h2>
              <img
                src={Shop}
                className="w-60 h-32 rounded-xl border-2 border-neutral-500"
              />

              <a href="https://www.reactshop.xyz">https://www.reactshop.xyz/</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Proyectos
