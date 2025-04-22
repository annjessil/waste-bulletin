import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'react'

import Bulletin from './Bulletin.jsx'
import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bulletin" element={<Bulletin/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
