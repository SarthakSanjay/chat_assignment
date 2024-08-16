import React from 'react'
import SearchBar from './SearchBar'
import ChatFilterMenu from './ChatFilterMenu'

const ContactsBar = () => {
  return (
    <div className='h-screen w-1/3 bg-white text-black border'>
      <div className='h-[76px] w-full flex justify-center items-center px-5 border-b'>
        <SearchBar />
      </div>
      <ChatFilterMenu />
    </div>
  )
}

export default ContactsBar
