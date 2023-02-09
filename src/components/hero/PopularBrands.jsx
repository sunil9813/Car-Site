import React from "react"
import { HiArrowLongRight } from "react-icons/hi2"
import { NavLink } from "react-router-dom"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { popularBrands } from "../assets/data/data"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div onClick={onClick} className='absolute top-[45%]  z-20 -left-5 text-black w-12 h-12 rounded-full bg-white shadow-shadow3 cursor-pointer flex place-items-center justify-center'>
      <MdKeyboardArrowLeft size={30} />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div onClick={onClick} className='absolute top-[45%]  z-20 -right-5 text-black w-12 h-12 rounded-full bg-white shadow-shadow3 cursor-pointer flex place-items-center justify-center'>
      <MdKeyboardArrowRight size={30} />
    </div>
  )
}

export const PopularBrands = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <section className='filter-card py-12'>
        <div className='containers bg-white border border-1 border-gray-200'>
          <div className='p-5'>
            <h1 className='text-xl font-medium mb-4 capitalize'>Popular Brands </h1>

            <div className='mt-5 text-center'>
              <Slider {...settings}>
                {popularBrands.map((car) => (
                  <div className='box border border-gray-200 rounded-md items-center p-5' key={car.id}>
                    <img src={car?.cover} alt='cover' />
                    <h3 className=' py-3'>{car?.name}</h3>
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className='see-all border-t-2 border-gray-200 mt-5 p-3'>
            <NavLink className='text-green2 flex items-center text-sm'>
              View All Car <HiArrowLongRight className='ml-3' size={22} />
            </NavLink>
          </div>
        </div>
      </section>
    </>
  )
}
