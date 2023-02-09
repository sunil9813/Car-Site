import React from "react"
import appstore from "../assets/images/appstore.png"
import playstore from "../assets/images/playstore.webp"
import f1 from "../assets/images/f1.svg"
import f2 from "../assets/images/f2.svg"
import f3 from "../assets/images/f3.svg"
import f4 from "../assets/images/f4.svg"
import { NavLink } from "react-router-dom"
import { footerBottom, footerTop } from "../assets/data/data"
import { BsFacebook } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai"

export const Footer = () => {
  return (
    <>
      <footer className='border-t bottom-1 border-gray-200 p-3 bg-white'>
        <div className='footer-top py-10 border-b bottom-1 border-gray-200'>
          <div className='grid4 items-center containers'>
            {footerTop.map((item) => (
              <div className='box flex items-center' key={item.id}>
                <div className='icon mr-5'>
                  <i className='text-red-400'>{item.icon}</i>
                </div>
                <div className='text'>
                  <h2 className='text-xl font-medium'>{item.title}</h2>
                  <span className='text-gray1 text-sm'>{item.subtitel}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='footer-bottom py-12'>
          <div className='containers'>
            <ul className='grid4'>
              {footerBottom.map((item, i) => (
                <li key={i} className='block mb-3'>
                  <h4 className='text-md font-medium mb-4'>{item.title}</h4>
                  {item.links.map((t, i) => (
                    <NavLink to={"/#"} key={i} className='text-sm block mb-4 text-gray1'>
                      {t.text} <br />
                    </NavLink>
                  ))}
                </li>
              ))}
              <li>
                <h4 className='text-md font-medium mb-4'>EXPERIENCE CARDEKHO APP</h4>
                <div className='images flex justify-between'>
                  <img src={appstore} alt='appstore' />
                  <img src={playstore} alt='playstore' />
                </div>

                <h4 className='text-md font-medium my-8'>CarDekho Group Ventures</h4>
                <div className='grid2'>
                  <img src={f1} alt='f1' />
                  <img src={f2} alt='f2' />
                  <img src={f3} alt='f3' />
                  <img src={f4} alt='f4' />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className='legal border-t bottom-1 border-gray-200 pt-5'>
          <div className='containers flex justify-between items-center'>
            <p className='text-gray1 text-s'>© 2023 Girnar Software Pvt. Ltd.</p>
            <div className='connect flex justify-between'>
              <h1 className='text-lg text-black font-semibold'>Connect : </h1>
              <div className='flex ml-5'>
                <BsFacebook size={19} className='text-red-500' />
                <AiFillTwitterCircle size={22} className='mx-3 text-red-500' />
                <AiFillYoutube size={22} className='text-red-500' />
                <AiFillInstagram size={22} className='mx-3 text-red-500' />
                <AiFillLinkedin size={22} className='text-red-500' />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
