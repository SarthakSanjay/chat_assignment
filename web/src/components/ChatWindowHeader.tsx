import React from 'react'

const ChatWindowHeader = () => {
  return (
    <div className='h-[76px] w-full border bg-inherit px-5 flex gap-2 justify-start items-center'>
      <div className='h-14 w-14 border rounded-full flex justify-center items-center'>A</div>
      <div className='h-14 w-max flex flex-col'>
        <h1>Sharko</h1>
        <span>Typing...</span>
      </div>
    </div>
  )
}

export default ChatWindowHeader
