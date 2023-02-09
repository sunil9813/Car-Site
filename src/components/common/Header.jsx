import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/images/login.svg"
import { SearchBox } from "./SearchBox"
import { AiOutlineHeart } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { HiOutlineUserCircle } from "react-icons/hi"
import { navBar } from "../assets/data/data"

export const Header = () => {
  //const activeNavLink = ({ isActive }) => (isActive ? "active" : "NavLink")
  //const [isMenu, setIsMenu] = useState(false)

  return (
    <header className='h-auto bg-white border-b bottom-2 border-gray-200'>
      <div className='containers'>
        <div className='flex justify-between items-center py-4'>
          {/* logo */}
          <div className='logo flex h-12 w-48 object-contain'>
            <NavLink to='/' className='logo-link'>
              <img src={logo} alt='logo' className='object-contain ' width='100%' height='100%' />
            </NavLink>
          </div>

          {/* search box */}
          <SearchBox />

          <div className='user flex items-center text-sm'>
            <select name='' id=''>
              <option value=''>English</option>
              <option value=''>Hindi</option>
              <option value=''>Neplai</option>
            </select>

            <AiOutlineHeart size={22} className='mx-8' />

            <div className='logoin flex items-center'>
              <HiOutlineUserCircle size={22} className='mr-3' />
              <NavLink to='/login'>Login</NavLink>
              <span>/</span>
              <NavLink to='/register'>Register</NavLink>
            </div>
          </div>
        </div>
      </div>
      <nav className='border-t bottom-1 border-gray-200 p-3'>
        <div className='containers flex justify-between'>
          <ul className='flex item-center'>
            {navBar.map((item) => (
              <li className='mr-8' key={item.id}>
                <NavLink to={item.path} className='NavLink uppercase text-[15px] font-medium text-primary'>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='location flex items-center'>
            <GoLocation size={20} />
            <span className='text-sm ml-3'>Kathmandu</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
