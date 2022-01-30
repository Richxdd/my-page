import React, { useState } from 'react'
import Menu from './../img/Menu.png'

const Header = () => {
  const [menu, setMenu] = useState(false)

  const handleClick = () => {
    setMenu(!menu)
  }

  return (
    <>
      <div className="container  flex justify-between  p-4 ">
        <button className="text-xs lg:text-xl text-white hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
          Ricardo
        </button>
        <div className="invisible lg:visible h-0 w-0 lg:w-auto lg:h-auto   lg:order-3">
          <div className=" flex gap-3 items-end flex-col lg:flex-row lg:visible  right-0">
            <button className="text-xs lg:text-xl text-white md:w-28 lg:w-auto hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
              Proyectos
            </button>
            <button className="text-xs lg:text-xl text-white  md:w-28 lg:w-auto hover:text-gray-800 font-extrabold hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
              Sobre mi
            </button>
            <button className="text-xs lg:text-xl text-white md:w-28 lg:w-auto hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
              Skills
            </button>
            <button className="text-xs lg:text-xl text-white  md:w-28 lg:w-auto  hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
              Contactarme
            </button>
          </div>
        </div>
        <div className="lg:invisible lg:h-0 lg:w-0">
          <img src={Menu} className=" w-7 h-7 " onClick={handleClick} />
        </div>
      </div>
      {menu ? (
        <div className="relative">
          <div className="bg-gray-800 rounded-xl w-3/8 absolute flex gap-3 items-end flex-col lg:flex-row lg:visible  right-0 p-5">
            <button className="text-xs lg:text-xl text-white  hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
              Proyectos
            </button>
            <button className="text-xs lg:text-xl text-white   hover:text-gray-800 font-extrabold hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
              Sobre mi
            </button>
            <button className="text-xs lg:text-xl text-white  hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
              Skills
            </button>
            <button className="text-xs lg:text-xl text-white    hover:text-gray-800 font-extrabold  hover:bg-white rounded-full py-1 px-3 text-center ease-in duration-300 ">
              Contactarme
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Header
