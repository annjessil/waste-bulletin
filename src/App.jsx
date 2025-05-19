import { useState } from 'react'
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Bulletin from './pages/Bulletin.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bulletin" element={<Bulletin />} />
        <Route path="/search" element={<Search />} />
        {/* Redirect any unknown path to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
