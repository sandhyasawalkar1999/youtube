import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/components/navbar/navbar'
import Sidebar from './assets/components/sidebar/sidebar'
import Cards from './assets/components/cards/cards'
import style from './assets/components/cards/cards.module.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div  style={{display:"flex"}}>
      <Sidebar />
      <div  style={{display:"flex"}}>     
       <Cards />
      </div>
      <div  style={{display:"flex"}}>     
       <Cards />
      </div>
      <div  style={{display:"flex"}}>     
       <Cards />
      </div>

      </div>
    
    </>
  )
}

export default App
