import React from "react"
import { RiSearch2Line } from "react-icons/ri"

export const SearchBox = () => {
  return (
    <>
      <form className='searchBox'>
        <div className='flex border bottom-1 border-gray-200 rounded-md'>
          <div className='relative w-[450px]'>
            <input type='search' className='p-3 pl-6 border bottom-2 bg-gray-50 border-gray-200 w-full rounded-lg text-sm focus:ring-2 focus:ring-slate-900 focus:outline-none' placeholder='Search Car, model,Car Design...' required />
            <button type='submit' className='absolute top-0 right-0 p-[11px] text-sm font-medium text-white bg-slate-900 rounded-r-lg border border-blue-700 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-slate-900'>
              <RiSearch2Line size={22} />
              <span className='sr-only'>Search</span>
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
