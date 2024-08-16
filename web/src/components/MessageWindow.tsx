import React from 'react'

const MessageWindow = () => {
  const messages = [
    "hello mofo",
    "hello chmo",
    "how are you",
    "i am fine",
    "what about you",
    "I am also ok",
    "so what's going on",
    "having fun bro",
    "same here",
    "have you watched transformer movie",
    "ya i did",
    "who is your fav character",
    "that girl played by Megan Fox you know why 😎"
  ]
  return (
    <div className='h-[90vh] w-full p-4 overflow-y-auto'>
      {messages.map((msg, index) => {
        return <div className={`h-14 w-full flex
       ${(index + 1) % 2 === 0 ? 'justify-end' : 'justify-start'}
`}>
          <div className={`${(index + 1) % 2 === 0 ? ' text-white bg-[#ef6145]' : 'bg-zinc-200'} h-14 w-max px-3 rounded-lg flex items-center`}>{msg}</div>
        </div>
      })}
    </div >
  )
}

export default MessageWindow
