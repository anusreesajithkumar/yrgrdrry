import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Use from './components/Use'
import Api from './components/Api'
import Pokemon from './components/Pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Nav />
        <Routes>
          <Route path='/l' element={<Login />} />
          <Route path='/s' element={<Signup />} />
          <Route path='/a' element={<Statebasics />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/u' element={<Use />} />
          <Route path='/ai' element={<Api />} />
          <Route path='/po' element={<Pokemon/>} />
        </Routes>
        
      </div>

    </>
  )
}

export default App
