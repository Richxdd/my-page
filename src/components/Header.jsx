import React from 'react'

const Header = () => {
  return (
    <div className="container flex justify-between p-4">
      <button className="text-white hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
        Ricardo
      </button>
      <div className="flex gap-3">
        <button className="text-white hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
          Proyectos
        </button>
        <button className="text-white hover:text-gray-800 font-extrabold hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
          Sobre mi
        </button>
        <button className="text-white hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
          Skills
        </button>
        <button className="text-white hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
          Contactarme
        </button>
      </div>
    </div>
  )
}

export default Header
