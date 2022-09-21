import React from 'react'
import Header from './Component/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import { About } from './Pages/About'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import { Technologies } from './Pages/Technologies'
import Footer from './Component/Footer'
import './style.css'
const App = () => {
  return (
    <div className='main'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path = '/' element={<Home />}/>
          <Route path = '/home' element={<Home />}/>
          <Route path = '/about' element={<About />}/>
          <Route path = '/project' element={<Projects />}/>
          <Route path = '/technologies' element={<Technologies />}/>
          <Route path = '/contact' element={<Contact  />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App