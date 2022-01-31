import React from 'react'
import Shop from '../img/shop.png'
import Mern from '../img/mernstack.png'
import Landing from '../img/landingpage.png'
import Citas from '../img/citasreact.png'
import Gastos from '../img/gastos.png'
import Criptos from '../img/criptos.png'
import Crm from '../img/crm.png'
import Musica from '../img/musica.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { motion } from 'framer-motion'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'

const Proyectos = () => {
  const proyects = [
    {
      id: 1,
      nombre: 'React Shop',
      foto: Shop,
      link: 'https://www.reactshop.xyz/'
    },
    {
      id: 2,
      nombre: 'Mern stack',
      foto: Mern,
      link: 'https://mern-proyect.netlify.app'
    },
    {
      id: 3,
      nombre: 'Landing Page',
      foto: Landing,
      link: 'https://landin-pages.netlify.app/'
    },
    {
      id: 4,
      nombre: 'Citas React',
      foto: Citas,
      link: 'https://citas-react-g.netlify.app/'
    },
    {
      id: 5,
      nombre: 'Planificador de Gastos',
      foto: Gastos,
      link: 'https://plan-gastos.netlify.app/'
    },
    {
      id: 6,
      nombre: 'Cotizador de Criptomonedas',
      foto: Criptos,
      link: 'https://cotizador-criptos.netlify.app/'
    },
    {
      id: 7,
      nombre: 'Crm Clientes',
      foto: Crm,
      link: 'https://crm-cli.netlify.app/clientes'
    },

    {
      id: 8,
      nombre: 'Buscador de Musica',
      foto: Musica,
      link: 'https://musica-info.netlify.app/'
    },
    {
      id: 9,
      nombre: 'React Shop',
      foto: Shop,
      link: 'https://www.reactshop.xyz/'
    }
  ]
  const proyects1 = [
    {
      id: 1,
      nombre: 'React Shop',
      foto: Shop,
      link: 'https://www.reactshop.xyz/'
    },
    {
      id: 2,
      nombre: 'Mern stack',
      foto: Mern,
      link: 'https://mern-proyect.netlify.app'
    },
    {
      id: 3,
      nombre: 'Landing Page',
      foto: Landing,
      link: 'https://landin-pages.netlify.app/'
    }
  ]
  const proyects2 = [
    {
      id: 4,
      nombre: 'Citas React',
      foto: Citas,
      link: 'https://citas-react-g.netlify.app/'
    },
    {
      id: 5,
      nombre: 'Planificador de Gastos',
      foto: Gastos,
      link: 'https://plan-gastos.netlify.app/'
    },
    {
      id: 6,
      nombre: 'Cotizador de Criptomonedas',
      foto: Criptos,
      link: 'https://cotizador-criptos.netlify.app/'
    }
  ]
  const proyects3 = [
    {
      id: 7,
      nombre: 'Crm Clientes',
      foto: Crm,
      link: 'https://crm-cli.netlify.app/clientes'
    },

    {
      id: 8,
      nombre: 'Buscador de Musica',
      foto: Musica,
      link: 'https://musica-info.netlify.app/'
    },
    {
      id: 9,
      nombre: 'React Shop',
      foto: Shop,
      link: 'https://www.reactshop.xyz/'
    }
  ]

  return (
    <div className="container">
      <h1 className="text-white text-2xl lg:text-5xl font-extrabold text-center py-10">
        Mis proyectos
      </h1>
      <div className="flex justify-center lg:visible invisible lg:w-auto w-0 lg:h-auto h-0">
        <div className="grid lg:grid-cols-3 lg:grid-rows-3 gap-10 justify-center items-center justify-items-center  ">
          {proyects.map((proyect) => (
            <a
              href={proyect.link}
              className="lg:w-72 lg:h-72 hover:scale-125 duration-200 bg-gray-800 opacity-80 hover:opacity-100 rounded-3xl flex flex-col justify-between items-center py-5 text-white font-bold h-0 w-0' cursor-pointer  ">
              <h2>{proyect.nombre}</h2>
              <img
                src={proyect.foto}
                className="w-60 h-32 rounded-xl border-2 border-neutral-500"
              />

              <a>{proyect.link}</a>
            </a>
          ))}
        </div>
      </div>
      <div className=" lg:invisible lg:w-0 lg:h-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          {proyects1.map((proyect) => (
            <SwiperSlide>
              <div className=" flex justify-center 	">
                <div className="w-60 h-60  bg-gray-800 opacity-80 rounded-3xl flex flex-col justify-between items-center py-5 text-white font-bold">
                  <h2>{proyect.nombre}</h2>
                  <img
                    src={proyect.foto}
                    className="w-48 h-24 rounded-xl border-2 border-neutral-500"
                  />

                  <a href={proyect.link}>{proyect.link}</a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="p-5"></div>
        </Swiper>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          {proyects2.map((proyect) => (
            <SwiperSlide>
              <div className=" flex justify-center">
                <div className="w-60 h-60 bg-gray-800 opacity-80 rounded-3xl flex flex-col justify-between items-center py-5 text-white font-bold">
                  <h2>{proyect.nombre}</h2>
                  <img
                    src={proyect.foto}
                    className="w-48 h-24 rounded-xl border-2 border-neutral-500"
                  />

                  <a href={proyect.link}>{proyect.link}</a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="p-5"></div>
        </Swiper>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          {proyects3.map((proyect) => (
            <SwiperSlide>
              <div className=" flex justify-center">
                <div className="w-60 h-60 bg-gray-800 opacity-80 rounded-3xl flex flex-col justify-between items-center py-5 text-white font-bold">
                  <h2>{proyect.nombre}</h2>
                  <img
                    src={proyect.foto}
                    className="w-48 h-24 rounded-xl border-2 border-neutral-500"
                  />

                  <a href={proyect.link}>{proyect.link}</a>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="p-5"></div>
        </Swiper>
      </div>
    </div>
  )
}

export default Proyectos
