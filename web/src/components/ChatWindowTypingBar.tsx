import React from 'react'
import { Icon206Attachment, IconSendHorizonal } from '../Icons'

const ChatWindowTypingBar = () => {
  return (
    <div className='h-[76px] w-full bg-inherit px-5 border flex justify-center items-center'>
      <div className='h-14 w-full px-2 flex justify-between items-center rounded-lg bg-zinc-100 '>
        <input placeholder='Type your message here' className='h-full w-full bg-inherit px-3 rounded-l-lg outline-none' />
        <div className='flex items-center gap-1'>
          <button className='h-12 w-12 flex justify-center items-center text-[#ef6145] text-lg '><Icon206Attachment /></button>
          <button className='h-10 w-10 rounded-lg flex justify-center items-center text-[#ef6145] text-lg bg-[#fee6e2] hover:bg-[#ef6145] hover:text-[#fee6e2]'><IconSendHorizonal /></button>
        </div>
      </div>
    </div>
  )
}



export default ChatWindowTypingBar
