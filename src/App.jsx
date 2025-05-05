import { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import 'react'

import NavBar from './components/NavBar.jsx'
import Bulletin from './pages/Bulletin.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bulletin" element={<Bulletin/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
