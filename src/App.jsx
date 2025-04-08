import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Bulletin from './Bulletin.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/bulletin" element={<Bulletin/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
