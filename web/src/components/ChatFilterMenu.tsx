import React from 'react'

const ChatFilterMenu = () => {
  const options = ['All', 'Unread', 'Archived', 'Blocked']
  return (
    <div className='h-14 w-full px-5 flex justify-start items-center gap-5'>
      {options.map((type) => {
        return <div className='h-6 w-max px-2 py-1 text-sm bg-white text-gray-900 border border-gray-300 rounded-full hover:bg-[#ef6145] hover:text-white flex justify-center items-center'>{type}</div>
      })}
    </div>
  )
}

export default ChatFilterMenu
