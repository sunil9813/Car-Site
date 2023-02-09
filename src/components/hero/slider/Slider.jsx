import React from "react"
import { hero } from "../../assets/data/data"
//import logo from "../../assets/images/login.svg"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div onClick={onClick} className='absolute top-[50%]  z-20 left-0 text-green1 cursor-pointer'>
      <MdKeyboardArrowLeft size={50} />
    </div>
  )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div onClick={onClick} className='absolute top-[50%] right-0 z-20 text-green1 cursor-pointer'>
      <MdKeyboardArrowRight size={50} />
    </div>
  )
}
export const Sliders = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <>
      <section className='slider relative h-[70vh]'>
        <div className='containers flex justify-between py-10'>
          <div className='find shadow-shadow2 w-1/4 p-6 rounded-md py-5 bg-white relative z-10'>
            <h1 className='text-2xl text-black font-semibold'>Find your right car</h1>

            <div className='flex mt-6'>
              <button className='outline-btn'>New Car</button>
              <button className='outline-btn'>Used Car</button>
            </div>
            <div className='flex my-5'>
              <div className='radioBtn'>
                <input type='radio' className='mr-3' />
                <span>By Budget</span>
              </div>
              <div className='radioBtn ml-5'>
                <input type='radio' className='mr-3' />
                <span>By Brand</span>
              </div>
            </div>

            <div className='slectBox'>
              <select name='' id='' className='w-full p-4 border boder-2 border-gray-200 outline-none'>
                <option value=''>Select Budget</option>
                <option value=''>1 - 5 Lakh</option>
                <option value=''>5 - 10 Lakh</option>
                <option value=''>10 - 15 Lakh</option>
                <option value=''>20 - 25 Lakh</option>
              </select>
              <select name='' id='' className='w-full p-4 border boder-2 border-gray-200 outline-none'>
                <option value=''>All Vehicle Type</option>
                <option value=''>1 - 5 Lakh</option>
                <option value=''>5 - 10 Lakh</option>
                <option value=''>10 - 15 Lakh</option>
                <option value=''>20 - 25 Lakh</option>
              </select>
              <button className='primary-btn w-full my-5'>Search</button>
            </div>
          </div>
          <div className='images absolute top-0 left-0 w-full h-[70vh] '>
            <Slider {...settings}>
              {hero.map((item) => (
                <div className='img h-[70vh] bg-slate-200' key={item.id}>
                  <img src={item.cover} alt='cover' className='w-full h-full object-cover -z-10' />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}
