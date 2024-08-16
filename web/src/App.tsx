import './App.css'
import ChatWindow from './components/ChatWindow'
import ContactsBar from './components/ContactsBar'

function App() {

  return (
    <div className='h-screen w-screen bg-black flex'>
      <ContactsBar />
      <ChatWindow />
    </div>
  )
}

export default App
