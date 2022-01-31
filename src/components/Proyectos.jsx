import React from 'react'
import Shop from '../img/shop.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Proyectos = () => {
  const proyectos = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <div className="container">
      <h1 className="text-white text-2xl lg:text-5xl font-extrabold text-center py-10">
        Mis proyectos
      </h1>
      <div className="flex justify-center lg:visible invisible lg:w-auto w-0 lg:h-auto h-0">
        <div className="grid lg:grid-cols-3 lg:grid-rows-3 gap-10 justify-center items-center justify-items-center  ">
          {proyectos.map((proyecto) => (
            <div className="lg:w-72 lg:h-72 bg-gray-800 opacity-80 rounded-3xl flex flex-col justify-between items-center py-5 text-white font-bold h-0 w-0'">
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
          {[1, 2, 3].map((proyecto) => (
            <SwiperSlide>
              <div className=" flex justify-center">
                <div className="w-60 h-60 bg-gray-800 opacity-80 rounded-3xl flex flex-col justify-between items-center py-5 text-white font-bold">
                  <h2>React Shop</h2>
                  <img
                    src={Shop}
                    className="w-48 h-24 rounded-xl border-2 border-neutral-500"
                  />

                  <a href="https://www.reactshop.xyz">
                    https://www.reactshop.xyz/
                  </a>
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
          {[1, 2, 3].map((proyecto) => (
            <SwiperSlide>
              <div className=" flex justify-center">
                <div className="w-60 h-60 bg-gray-800 opacity-80 rounded-3xl flex flex-col justify-between items-center py-5 text-white font-bold">
                  <h2>React Shop</h2>
                  <img
                    src={Shop}
                    className="w-48 h-24 rounded-xl border-2 border-neutral-500"
                  />

                  <a href="https://www.reactshop.xyz">
                    https://www.reactshop.xyz/
                  </a>
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
          {[1, 2, 3].map((proyecto) => (
            <SwiperSlide>
              <div className=" flex justify-center">
                <div className="w-60 h-60 bg-gray-800 opacity-80 rounded-3xl flex flex-col justify-between items-center py-5 text-white font-bold">
                  <h2>React Shop</h2>
                  <img
                    src={Shop}
                    className="w-48 h-24 rounded-xl border-2 border-neutral-500"
                  />

                  <a href="https://www.reactshop.xyz">
                    https://www.reactshop.xyz/
                  </a>
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
