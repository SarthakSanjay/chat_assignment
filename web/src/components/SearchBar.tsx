import React from 'react'
import { IconBxSearchAlt } from '../Icons'

const SearchBar = () => {
  return (
    <div className='h-14 w-full bg-[#f6f6f6] px-4 rounded-lg flex justify-start items-center gap-5'>
      <IconBxSearchAlt className='text-2xl text-gray-500' />
      <input placeholder='Search' className='bg-inherit w-full h-full outline-none' />
    </div>
  )
}




export default SearchBar
