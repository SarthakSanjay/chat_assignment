import React from 'react'
import ChatWindowHeader from './ChatWindowHeader'
import ChatWindowTypingBar from './ChatWindowTypingBar'
import MessageWindow from './MessageWindow'

const ChatWindow = () => {
  return (
    <div className='h-screen w-2/3  bg-white text-black flex flex-col'>
      <ChatWindowHeader />
      <MessageWindow />
      <ChatWindowTypingBar />
    </div>
  )
}

export default ChatWindow
